import React, { useCallback } from 'react';
import FontAwesomeIcon from 'fm3/components/FontAwesomeIcon';
import ReactTags, { Tag } from 'react-tag-autocomplete';
import 'fm3/styles/react-tag-autocomplete.css';

import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import Alert from 'react-bootstrap/lib/Alert';

import DateTime from '../DateTime';
import { Translator } from 'fm3/l10nInjector';
import { GalleryTag } from 'fm3/actions/galleryActions';

export interface PictureModel {
  title: string;
  description: string;
  tags: string[];
  takenAt: string;
  dirtyPosition: string;
}

interface Props {
  model: PictureModel;
  allTags: GalleryTag[];
  errors: string[] | null | undefined;
  onPositionPick: undefined | (() => void);
  onModelChange: (model: PictureModel) => void;
  t: Translator;
}

const GalleryEditForm: React.FC<Props> = ({
  model,
  allTags,
  errors,
  onPositionPick,
  t,
  onModelChange,
}) => {
  const changeModel = useCallback(
    (key: keyof PictureModel, value) => {
      onModelChange({ ...model, [key]: value });
    },
    [model, onModelChange],
  );

  const handleTitleChange = useCallback(
    (e: React.FormEvent<FormControl>) => {
      changeModel('title', (e.target as HTMLInputElement).value || null);
    },
    [changeModel],
  );

  const handleDescriptionChange = useCallback(
    (e: React.FormEvent<FormControl>) => {
      changeModel(
        'description',
        (e.target as HTMLTextAreaElement).value || null,
      );
    },
    [changeModel],
  );

  const handleTakenAtChange = useCallback(
    (value: string) => {
      changeModel('takenAt', value);
    },
    [changeModel],
  );

  const handlePositionChange = useCallback(
    (e: React.FormEvent<FormControl>) => {
      changeModel(
        'dirtyPosition',
        (e.target as HTMLTextAreaElement).value || null,
      );
    },
    [changeModel],
  );

  const handleTagAdded = useCallback(
    ({ name }: Tag) => {
      const fixed = name
        .toLowerCase()
        .trim()
        .replace(/ {2,}/g, ' ');
      if (!model.tags.includes(fixed)) {
        changeModel('tags', [...model.tags, fixed]);
      }
    },
    [changeModel, model.tags],
  );

  const handleTagDeleted = useCallback(
    (i: number) => {
      const tags = [...model.tags];
      tags.splice(i, 1);
      changeModel('tags', tags);
    },
    [changeModel, model.tags],
  );

  return (
    <div>
      {errors &&
        errors.map(error => (
          <Alert bsStyle="danger" key={error}>
            {error.startsWith('~') ? error.slice(1) : t(error)}
          </Alert>
        ))}
      <FormGroup>
        <FormControl
          placeholder={t('gallery.editForm.name')}
          type="text"
          value={model.title}
          onChange={handleTitleChange}
          maxLength={255}
        />
      </FormGroup>
      <FormGroup>
        <FormControl
          placeholder={t('gallery.editForm.description')}
          componentClass="textarea"
          value={model.description}
          onChange={handleDescriptionChange}
          maxLength={4096}
        />
      </FormGroup>
      <FormGroup>
        <DateTime
          value={model.takenAt}
          onChange={handleTakenAtChange}
          placeholders={{
            date: t('gallery.editForm.takenAt.date'),
            time: t('gallery.editForm.takenAt.time'),
            datetime: t('gallery.editForm.takenAt.datetime'),
          }}
        />
      </FormGroup>
      <FormGroup>
        <InputGroup>
          <FormControl
            type="text"
            placeholder={t('gallery.editForm.location')}
            onChange={handlePositionChange}
            value={model.dirtyPosition}
          />
          <InputGroup.Button>
            <Button onClick={onPositionPick}>
              <FontAwesomeIcon icon="dot-circle-o" />
              {t('gallery.editForm.setLocation')}
            </Button>
          </InputGroup.Button>
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <ReactTags
          placeholder={t('gallery.editForm.tags')}
          tags={model.tags.map(tag => ({ id: tag, name: tag }))}
          suggestions={allTags.map(({ name }) => ({ id: name, name }))}
          handleAddition={handleTagAdded}
          handleDelete={handleTagDeleted}
          allowNew
        />
      </FormGroup>
    </div>
  );
};

export default GalleryEditForm;
