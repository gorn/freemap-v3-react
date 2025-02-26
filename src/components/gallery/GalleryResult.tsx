import React from 'react';
import { connect } from 'react-redux';

import { mapEventEmitter } from 'fm3/mapEventEmitter';

import RichMarker from 'fm3/components/RichMarker';

import { gallerySetPickingPosition } from 'fm3/actions/galleryActions';

import 'fm3/styles/gallery.scss';
import { RootState } from 'fm3/storeCreator';
import { RootAction } from 'fm3/actions';
import { Dispatch } from 'redux';
import { DragEndEvent } from 'leaflet';

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

class GalleryResult extends React.Component<Props> {
  componentDidMount() {
    mapEventEmitter.on('mapClick', this.handleMapClick);
  }

  componentWillUnmount() {
    mapEventEmitter.removeListener('mapClick', this.handleMapClick);
  }

  // TODO mode to GalleryMenu to be consistent with other tools
  handleMapClick = (lat: number, lon: number) => {
    if (this.props.isPickingPosition) {
      this.props.onPositionPick(lat, lon);
    }
  };

  handlePositionMarkerDragEnd = (e: DragEndEvent) => {
    const coords = e.target.getLatLng();
    this.props.onPositionPick(coords.lat, coords.lng);
  };

  render() {
    const { pickingPosition, showPosition, image } = this.props;

    return (
      <>
        {pickingPosition && (
          <RichMarker
            draggable
            position={{ lat: pickingPosition.lat, lng: pickingPosition.lon }}
            ondragend={this.handlePositionMarkerDragEnd}
          />
        )}
        {showPosition && image && (
          <RichMarker position={{ lat: image.lat, lng: image.lon }} />
        )}
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  image: state.gallery.image,
  isPickingPosition: state.gallery.pickingPositionForId !== null,
  pickingPosition: state.gallery.pickingPosition,
  showPosition: state.gallery.showPosition,
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => ({
  onPositionPick(lat: number, lon: number) {
    dispatch(gallerySetPickingPosition({ lat, lon }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GalleryResult);
