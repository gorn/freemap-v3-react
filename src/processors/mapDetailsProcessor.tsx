import React from 'react';

import {
  mapDetailsSetTrackInfoPoints,
  mapDetailsSetUserSelectedPosition,
} from 'fm3/actions/mapDetailsActions';
import { toastsAdd } from 'fm3/actions/toastsActions';
import RoadDetails from 'fm3/components/RoadDetails';
import { trackViewerSetData } from 'fm3/actions/trackViewerActions';
import { lineString, point, featureCollection } from '@turf/helpers';
import { Processor } from 'fm3/middlewares/processorMiddleware';
import { httpRequest } from 'fm3/authAxios';
import { getType } from 'typesafe-actions';
import { assertType } from 'typescript-is';

interface Element {
  id: number;
  tags: {
    [key: string]: string;
  };
  timestamp: string;
  type: 'way' | 'node' | 'relation';
  geometry: any; // TODO per type
}

interface OverpassResult {
  elements?: Element[];
}

const mappings = {
  way: element =>
    lineString(element.geometry.map(({ lat, lon }) => [lon, lat])),
  node: element => point([element.lon, element.lat]),
  relation: element => ({
    type: 'Feature',
    geometry: {
      type: 'GeometryCollection',
      geometries: element.members
        .filter(({ type }) =>
          ['way', 'node' /* TODO , 'relation' */].includes(type),
        )
        .map(member =>
          member.type === 'way'
            ? lineString(member.geometry.map(({ lat, lon }) => [lon, lat]))
            : point([member.lon, member.lat]),
        ),
    },
  }),
};

export const mapDetailsProcessor: Processor = {
  actionCreator: mapDetailsSetUserSelectedPosition,
  errorKey: 'mapDetails.fetchingError',
  handle: async ({ dispatch, getState }) => {
    const { subtool, userSelectedLat, userSelectedLon } = getState().mapDetails;
    if (subtool !== 'track-info') {
      return;
    }

    const [{ data }, { data: data1 }] = await Promise.all([
      httpRequest({
        getState,
        method: 'POST',
        url: '//overpass-api.de/api/interpreter',
        data:
          '[out:json];(' +
          // + `node(around:33,${userSelectedLat},${userSelectedLon});`
          `way(around:33,${userSelectedLat},${userSelectedLon})[highway];` +
          // + `relation(around:33,${userSelectedLat},${userSelectedLon});`
          ');out geom meta;',
        expectedStatus: 200,
      }),
      { data: { elements: [] } },
      // axios.post(
      //   '//overpass-api.de/api/interpreter',
      //   `[out:json];
      //     is_in(${userSelectedLat},${userSelectedLon})->.a;
      //     way(pivot.a);
      //     out geom meta;
      //     relation(pivot.a);
      //     out geom meta;
      //   `,
      //   {
      //     validateStatus: status => status === 200,
      //     cancelToken: source.token,
      //   },
      // ),
    ]);

    const oRes = assertType<OverpassResult>(data);

    const elements = [...(oRes.elements || []), ...(data1.elements || [])];
    if (elements.length > 0) {
      const geojson = featureCollection(
        elements.map(element => mappings[element.type](element) as any), // TODO fix type
      );

      (oRes.elements || []).forEach(element => {
        dispatch(
          toastsAdd({
            // collapseKey: 'mapDetails.trackInfo.detail',
            message: <RoadDetails way={element} />,
            cancelType: getType(mapDetailsSetUserSelectedPosition),
            style: 'info',
          }),
        );
      });

      // dispatch(mapDetailsSetTrackInfoPoints(geojson));

      dispatch(
        trackViewerSetData({
          trackGeojson: geojson as any, // TODO fix type
          startPoints: [],
          finishPoints: [],
        }),
      );
    } else {
      dispatch(
        toastsAdd({
          collapseKey: 'mapDetails.trackInfo.detail',
          messageKey: 'mapDetails.notFound',
          cancelType: getType(mapDetailsSetUserSelectedPosition),
          timeout: 5000,
          style: 'info',
        }),
      );
      dispatch(mapDetailsSetTrackInfoPoints(null));
    }
  },
};
