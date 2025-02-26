import { createReducer } from 'typesafe-actions';
import { RootAction } from 'fm3/actions';
import { clearMap, setAppState } from 'fm3/actions/mainActions';
import {
  trackViewerSetData,
  trackViewerSetTrackUID,
  trackViewerDownloadTrack,
  trackViewerColorizeTrackBy,
  trackViewerGpxLoad,
  TrackPoint,
} from 'fm3/actions/trackViewerActions';
import {
  osmClear,
  osmLoadNode,
  osmLoadWay,
  osmLoadRelation,
} from 'fm3/actions/osmActions';
import { FeatureCollection } from 'geojson';
import produce from 'immer';
import { searchSelectResult } from 'fm3/actions/searchActions';

export interface TrackViewerState {
  trackGeojson: FeatureCollection | null;
  trackGpx: string | null;
  trackUID: string | null;
  startPoints: TrackPoint[];
  finishPoints: TrackPoint[];
  colorizeTrackBy: null | 'elevation' | 'steepness';
  gpxUrl: string | null;

  osmNodeId: number | null;
  osmWayId: number | null;
  osmRelationId: number | null;
  eleSmoothingFactor?: number;
}

const initialState: TrackViewerState = {
  trackGeojson: null,
  trackGpx: null,
  trackUID: null,
  startPoints: [],
  finishPoints: [],
  colorizeTrackBy: null,
  gpxUrl: null, // TODO to separate reducer (?)

  osmNodeId: null,
  osmWayId: null,
  osmRelationId: null,
  eleSmoothingFactor: undefined,
};

export const trackViewerReducer = createReducer<TrackViewerState, RootAction>(
  initialState,
)
  .handleAction(clearMap, () => initialState)
  .handleAction(setAppState, (state, action) => {
    return { ...state, ...action.payload.trackViewer };
  })
  .handleAction(trackViewerSetData, (state, action) => ({
    ...state,
    ...action.payload,
  }))
  .handleAction(trackViewerSetTrackUID, (state, action) => ({
    ...state,
    trackUID: action.payload,
  }))
  .handleAction(trackViewerDownloadTrack, (state, action) => ({
    ...state,
    trackUID: action.payload,
  }))
  .handleAction(trackViewerColorizeTrackBy, (state, action) => ({
    ...state,
    colorizeTrackBy: action.payload,
  }))
  .handleAction(trackViewerGpxLoad, (state, action) => ({
    ...state,
    gpxUrl: action.payload,
  }))
  .handleAction(osmClear, () => initialState)
  .handleAction(osmLoadNode, (state, action) => ({
    ...state,
    osmNodeId: action.payload,
  }))
  .handleAction(osmLoadWay, (state, action) => ({
    ...state,
    osmWayId: action.payload,
  }))
  .handleAction(osmLoadRelation, (state, action) => ({
    ...state,
    osmRelationId: action.payload,
  }))
  .handleAction(searchSelectResult, (state, action) =>
    produce(state, draft => {
      draft.osmNodeId = null;
      draft.osmWayId = null;
      draft.osmRelationId = null;
      if (action.payload.osmType === 'node') {
        draft.osmNodeId = action.payload.id;
      }
      if (action.payload.osmType === 'way') {
        draft.osmWayId = action.payload.id;
      }
      if (action.payload.osmType === 'relation') {
        draft.osmRelationId = action.payload.id;
      }
    }),
  );
