import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { lineString } from '@turf/helpers';

import { withTranslator, Translator } from 'fm3/l10nInjector';

import { setTool, Tool } from 'fm3/actions/mainActions';
import {
  distanceMeasurementAddPoint,
  Point as DistancePoint,
} from 'fm3/actions/distanceMeasurementActions';
import {
  areaMeasurementAddPoint,
  Point as AreaPoint,
} from 'fm3/actions/areaMeasurementActions';
import { elevationMeasurementSetPoint } from 'fm3/actions/elevationMeasurementActions';

import {
  elevationChartSetTrackGeojson,
  elevationChartClose,
} from 'fm3/actions/elevationChartActions';

import FontAwesomeIcon from 'fm3/components/FontAwesomeIcon';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Button from 'react-bootstrap/lib/Button';
import { mapEventEmitter } from 'fm3/mapEventEmitter';
import { RootState } from 'fm3/storeCreator';
import { RootAction } from 'fm3/actions';
import { LatLon } from 'fm3/types/common';
import { GeoJsonObject } from 'geojson';

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    t: Translator;
  };

class MeasurementMenu extends React.Component<Props> {
  componentDidMount() {
    mapEventEmitter.on('mapClick', this.handlePoiAdd);
  }

  componentWillUnmount() {
    mapEventEmitter.removeListener('mapClick', this.handlePoiAdd);
  }

  handlePoiAdd = (
    lat: number,
    lon: number,
    position?: number,
    id0?: number,
  ) => {
    if (this.props.tool === 'measure-ele') {
      this.props.onElePointSet({ lat, lon });
      return;
    }

    const points =
      this.props.tool === 'measure-area'
        ? this.props.areaPoints
        : this.props.distancePoints;
    const pos = position ? Math.ceil(position / 2) : points.length;
    let id: number;
    if (id0) {
      id = id0;
    } else if (pos === 0) {
      id = points.length ? points[pos].id - 1 : 0;
    } else if (pos === points.length) {
      id = points[pos - 1].id + 1;
    } else {
      id = (points[pos - 1].id + points[pos].id) / 2;
    }

    if (this.props.tool === 'measure-dist') {
      this.props.onDistPointAdd({ lat, lon, id }, pos);
    }

    if (this.props.tool === 'measure-area') {
      this.props.onAreaPointAdd({ lat, lon, id }, pos);
    }
  };

  toggleElevationChart = () => {
    // TODO to logic

    const isActive = this.props.elevationChartTrackGeojson;
    if (isActive) {
      this.props.onElevationChartClose();
    } else {
      this.props.onElevationChartTrackGeojsonSet(
        lineString(this.props.distancePoints.map(p => [p.lon, p.lat])),
      );
    }
  };

  render() {
    const {
      onToolSet,
      tool,
      routeDefined,
      elevationChartTrackGeojson,
      t,
    } = this.props;

    return (
      <>
        <ButtonGroup>
          <Button
            onClick={() => onToolSet('measure-dist')}
            active={tool === 'measure-dist'}
            title={t('measurement.distance')}
          >
            <FontAwesomeIcon icon="arrows-h" />
            <span className="hidden-xs"> {t('measurement.distance')}</span>
          </Button>
          <Button
            onClick={() => onToolSet('measure-ele')}
            active={tool === 'measure-ele'}
            title={t('measurement.elevation')}
          >
            <FontAwesomeIcon icon="long-arrow-up" />
            <span className="hidden-xs"> {t('measurement.elevation')}</span>
          </Button>
          <Button
            onClick={() => onToolSet('measure-area')}
            active={tool === 'measure-area'}
            title={t('measurement.area')}
          >
            <FontAwesomeIcon icon="square" />
            <span className="hidden-xs"> {t('measurement.area')}</span>
          </Button>
        </ButtonGroup>{' '}
        {tool === 'measure-dist' && (
          <Button
            active={elevationChartTrackGeojson !== null}
            onClick={this.toggleElevationChart}
            disabled={!routeDefined}
          >
            <FontAwesomeIcon icon="bar-chart" />
            <span className="hidden-xs"> {t('general.elevationProfile')}</span>
          </Button>
        )}
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  tool: state.main.tool,
  distancePoints: state.distanceMeasurement.points,
  areaPoints: state.areaMeasurement.points,
  routeDefined: state.distanceMeasurement.points.length > 1,
  elevationChartTrackGeojson: state.elevationChart.trackGeojson,
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => ({
  onToolSet(tool: Tool) {
    dispatch(setTool(tool));
  },
  onElevationChartTrackGeojsonSet(trackGeojson: GeoJsonObject) {
    dispatch(elevationChartSetTrackGeojson(trackGeojson));
  },
  onElevationChartClose() {
    dispatch(elevationChartClose());
  },
  onAreaPointAdd(point: AreaPoint, position: number) {
    dispatch(areaMeasurementAddPoint({ point, position }));
  },
  onDistPointAdd(point: DistancePoint, position: number) {
    dispatch(distanceMeasurementAddPoint({ point, position }));
  },
  onElePointSet(point: LatLon) {
    dispatch(elevationMeasurementSetPoint(point));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslator(MeasurementMenu));
