import React, { useCallback, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Panel, ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import MapSwitchButton from './MapSwitchButton';
import FontAwesomeIcon from './FontAwesomeIcon';
import { getMapLeafletElement } from 'fm3/leafletElementHolder';
import { RootState } from 'fm3/storeCreator';
import { Translator, withTranslator } from 'fm3/l10nInjector';
import { RootAction } from 'fm3/actions';
import { MapViewState, mapRefocus } from 'fm3/actions/mapActions';
import { toggleLocate } from 'fm3/actions/mainActions';
import { Dispatch } from 'redux';

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    t: Translator;
  };

export const MapControlsInt: React.FC<Props> = ({
  zoom,
  embedFeatures,
  locate,
  onLocate,
  onMapRefocus,
  gpsTracked,
  t,
}) => {
  const leafletElement = getMapLeafletElement();

  const handleZoomInClick = useCallback(() => {
    onMapRefocus({ zoom: zoom + 1 });
  }, [onMapRefocus, zoom]);

  const handleZoomOutClick = useCallback(() => {
    onMapRefocus({ zoom: zoom - 1 });
  }, [onMapRefocus, zoom]);

  const handleFullscreenClick = useCallback(() => {
    if (!document.exitFullscreen) {
      // unsupported
    } else if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.body.requestFullscreen();
    }
  }, []);

  const [forceUpdate, setForceUpdate] = useState(0);

  useEffect(() => {
    const handler = () => {
      setForceUpdate(forceUpdate + 1);
    };

    document.addEventListener('fullscreenchange', handler);

    return () => {
      document.removeEventListener('fullscreenchange', handler);
    };
  }, [forceUpdate, setForceUpdate]);

  if (!leafletElement) {
    return null;
  }

  const embed = window.self !== window.top;

  return (
    <Panel className="fm-toolbar">
      <ButtonToolbar>
        {(!embed || !embedFeatures.includes('noMapSwitch')) && (
          <MapSwitchButton />
        )}
        <ButtonGroup>
          <Button
            onClick={handleZoomInClick}
            title={t('main.zoomIn')}
            disabled={zoom >= leafletElement.getMaxZoom()}
          >
            <FontAwesomeIcon icon="plus" />
          </Button>
          <Button
            onClick={handleZoomOutClick}
            title={t('main.zoomOut')}
            disabled={zoom <= leafletElement.getMinZoom()}
          >
            <FontAwesomeIcon icon="minus" />
          </Button>
        </ButtonGroup>
        {(!embed || !embedFeatures.includes('noLocateMe')) && (
          <Button
            onClick={onLocate}
            title={t('main.locateMe')}
            active={locate}
            bsStyle={gpsTracked ? 'warning' : 'default'}
          >
            <FontAwesomeIcon icon="dot-circle-o" />
          </Button>
        )}
        {document.exitFullscreen && (
          <Button
            onClick={handleFullscreenClick}
            title={
              document.fullscreenElement
                ? t('general.exitFullscreen')
                : t('general.fullscreen')
            }
          >
            <FontAwesomeIcon
              icon={document.fullscreenElement ? 'compress' : 'expand'}
            />
          </Button>
        )}
      </ButtonToolbar>
    </Panel>
  );
};

const mapStateToProps = (state: RootState) => ({
  zoom: state.map.zoom,
  embedFeatures: state.main.embedFeatures,
  locate: state.main.locate,
  gpsTracked: state.map.gpsTracked,
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => ({
  onMapRefocus(changes: Partial<MapViewState>) {
    dispatch(mapRefocus(changes));
  },
  onLocate() {
    dispatch(toggleLocate());
  },
});

export const MapControls = connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslator(MapControlsInt));
