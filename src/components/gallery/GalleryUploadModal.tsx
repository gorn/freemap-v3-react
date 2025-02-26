import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import Checkbox from 'react-bootstrap/lib/Checkbox';

import {
  galleryAddItem,
  galleryRemoveItem,
  galleryMergeItem,
  gallerySetItemForPositionPicking,
  galleryUpload,
  galleryHideUploadModal,
  galleryToggleShowPreview,
  GalleryItem,
} from 'fm3/actions/galleryActions';

import { toastsAdd } from 'fm3/actions/toastsActions';

import GalleryUploadItem from 'fm3/components/gallery/GalleryUploadItem';
import FontAwesomeIcon from 'fm3/components/FontAwesomeIcon';
import { withTranslator, Translator } from 'fm3/l10nInjector';
import { toDatetimeLocal } from 'fm3/dateUtils';
import { RootState } from 'fm3/storeCreator';
import { RootAction } from 'fm3/actions';
import { PictureModel } from './GalleryEditForm';
import { usePictureDropHandler } from '../../hooks/pictureDropHandlerHook';

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    t: Translator;
  };

const GalleryUploadModal: React.FC<Props> = ({
  items,
  onPositionPick,
  visible,
  onUpload,
  uploading,
  allTags,
  t,
  showPreview,
  onShowPreviewToggle,
  onItemRemove,
  onItemMerge,
  onItemAdd,
  onClose,
  language,
}) => {
  const handleModelChange = useCallback(
    (id: number, model: PictureModel) => {
      onItemMerge({
        id,
        ...model,
        takenAt: model.takenAt ? new Date(model.takenAt) : null,
      });
    },
    [onItemMerge],
  );

  const handleClose = useCallback(() => {
    onClose(!!items.length);
  }, [onClose, items]);

  const handleFileDrop = usePictureDropHandler(
    showPreview,
    language,
    onItemAdd,
    onItemMerge,
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleFileDrop,
    accept: '.jpg,.jpeg',
  });

  return (
    <Modal show={visible} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{t('gallery.uploadModal.title')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {items.map(
          ({
            id,
            file,
            url,
            title,
            description,
            takenAt,
            tags,
            errors,
            dirtyPosition,
          }) => (
            <GalleryUploadItem
              key={id}
              id={id}
              t={t}
              filename={file.name}
              url={url}
              model={{
                dirtyPosition,
                title,
                description,
                takenAt: takenAt ? toDatetimeLocal(takenAt) : '',
                tags,
              }}
              allTags={allTags}
              errors={errors}
              onRemove={onItemRemove}
              onPositionPick={onPositionPick}
              onModelChange={handleModelChange}
              disabled={uploading}
              showPreview={showPreview}
            />
          ),
        )}
        {!uploading && (
          <>
            <Checkbox
              onChange={onShowPreviewToggle}
              checked={showPreview}
              disabled={!!items.length}
            >
              {t('gallery.uploadModal.showPreview')}
            </Checkbox>

            <div
              {...getRootProps()}
              className={`dropzone${isDragActive ? ' dropzone-dropping' : ''}`}
            >
              <input {...getInputProps()} />
              <div
                dangerouslySetInnerHTML={{
                  __html: t('gallery.uploadModal.rules'),
                }}
              />
            </div>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onUpload} disabled={uploading}>
          <FontAwesomeIcon icon="upload" />{' '}
          {uploading
            ? t('gallery.uploadModal.uploading', { n: items.length })
            : t('gallery.uploadModal.upload')}
        </Button>
        <Button onClick={handleClose} bsStyle="danger">
          <Glyphicon glyph="remove" /> {t('general.cancel')} <kbd>Esc</kbd>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = (state: RootState) => ({
  items: state.gallery.items,
  visible: state.gallery.pickingPositionForId === null,
  uploading: !!state.gallery.uploadingId,
  allTags: state.gallery.tags,
  showPreview: state.gallery.showPreview,
  language: state.l10n.language,
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => ({
  onItemAdd(item: GalleryItem) {
    dispatch(galleryAddItem(item));
  },
  onItemRemove(id: number) {
    dispatch(galleryRemoveItem(id));
  },
  onUpload() {
    dispatch(galleryUpload());
  },
  onClose(ask: boolean) {
    if (ask) {
      dispatch(
        toastsAdd({
          collapseKey: 'galleryUploadModal.close',
          messageKey: 'general.closeWithoutSaving',
          style: 'warning',
          actions: [
            {
              nameKey: 'general.yes',
              action: galleryHideUploadModal(),
              style: 'danger',
            },
            { nameKey: 'general.no' },
          ],
        }),
      );
    } else {
      dispatch(galleryHideUploadModal());
    }
  },
  onPositionPick(id: number) {
    dispatch(gallerySetItemForPositionPicking(id));
  },
  onItemMerge(item: Pick<GalleryItem, 'id'> & Partial<GalleryItem>) {
    dispatch(galleryMergeItem(item));
  },
  onShowPreviewToggle() {
    dispatch(galleryToggleShowPreview());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslator(GalleryUploadModal));
