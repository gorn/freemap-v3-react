import pica from 'pica';
import ExifReader from 'exifreader';
import { latLonToString } from 'fm3/geoutils';
import { GalleryItem } from 'fm3/actions/galleryActions';
import { useCallback } from 'react';

let nextId = 1;

function loadPreview(
  file: File,
  tags: { [key: string]: any },
  cb: (err?: any, dataUrl?: string) => void,
) {
  const img = new Image();
  const url = URL.createObjectURL(file);

  img.onerror = () => {
    URL.revokeObjectURL(url);
    cb(new Error());
  };

  img.onload = () => {
    URL.revokeObjectURL(url);

    const canvas = document.createElement('canvas');
    const ratio = 618 / img.naturalWidth;
    const width = img.naturalWidth * ratio;
    const height = img.naturalHeight * ratio;
    const o = (tags.Orientation && tags.Orientation.value) || 1;
    canvas.width = width;
    canvas.height = height;

    const transformations: [
      number,
      number,
      number,
      number,
      number,
      number,
    ][] = [
      [1, 0, 0, 1, 0, 0],
      [-1, 0, 0, 1, width, 0],
      [-1, 0, 0, -1, width, height],
      [1, 0, 0, -1, 0, height],
      [0, 1, 1, 0, 0, 0],
      [0, 1, -1, 0, height, 0],
      [0, -1, -1, 0, height, width],
      [0, -1, 1, 0, 0, width],
    ];

    pica()
      .resize(img, canvas)
      .then(() => {
        let canvas2: HTMLCanvasElement;
        if (o === 1) {
          canvas2 = canvas;
        } else {
          canvas2 = document.createElement('canvas');
          const ctx = canvas2.getContext('2d');
          if (!ctx) {
            throw new Error('context is null');
          }
          canvas2.width = o > 4 ? height : width;
          canvas2.height = o > 4 ? width : height;
          ctx.transform(...transformations[o - 1]);
          ctx.drawImage(canvas, 0, 0);
        }

        // TODO play with toBlob (not supported in safari)
        // canvas2.toBlob((blob) => {
        //   this.props.onItemUrlSet(id, URL.createObjectURL(blob));
        //   cb();
        // });
        cb(undefined, canvas2.toDataURL());
      })
      .catch((err: any) => {
        cb(err);
      });
  };

  img.src = url;
}

export function usePictureDropHandler(
  showPreview: boolean,
  language: string,
  onItemAdd: (item: GalleryItem) => void,
  onItemChange: (item: Pick<GalleryItem, 'id'> & Partial<GalleryItem>) => void,
) {
  const processFile = useCallback(
    (file: File, cb: (err?: any) => void) => {
      const reader = new FileReader();

      reader.onerror = () => {
        reader.abort();
        cb(new Error());
      };

      reader.onload = () => {
        let tags: { [key: string]: any };
        try {
          tags = ExifReader.load(reader.result as ArrayBuffer);
        } catch (e) {
          tags = {};
        }

        const keywords: string[] = [];

        // try {
        //   keywords.push(...tags.Keywords.description.split(',').map(x => x.trim()).filter(x => x));
        // } catch (e) {
        //   // ignore
        // }
        //
        // try {
        //   keywords.push(...tags.subject.value.map(({ description }) => description));
        // } catch (e) {
        //   // ignore
        // }

        const id = nextId;
        nextId += 1;

        const NS = { S: -1, N: 1 };
        const EW = { W: -1, E: 1 };

        const description = tags.description
          ? tags.description.description
          : tags.ImageDescription
          ? tags.ImageDescription.description
          : '';

        console.log(tags.DateTimeOriginal);
        console.log(tags.DateTime);

        const takenAtRaw = tags.DateTimeOriginal || tags.DateTime;

        let lat;
        if (
          tags.GPSLatitude &&
          typeof tags.GPSLatitude.description === 'number'
        ) {
          lat = tags.GPSLatitude.description;
        } else {
          const [rawLat, latRef] = adaptGpsCoordinate(tags.GPSLatitude);
          lat =
            rawLat *
            (NS[
              (
                latRef ||
                (tags.GPSLatitudeRef || { value: [] }).value[0] ||
                ''
              ).toUpperCase()
            ] || Number.NaN);
        }

        let lon;
        if (
          tags.GPSLongitude &&
          typeof tags.GPSLongitude.description === 'number'
        ) {
          lon = tags.GPSLongitude.description;
        } else {
          const [rawLon, lonRef] = adaptGpsCoordinate(tags.GPSLongitude);
          lon =
            rawLon *
            (EW[
              (
                lonRef ||
                (tags.GPSLongitudeRef || { value: [] }).value[0] ||
                ''
              ).toUpperCase()
            ] || Number.NaN);
        }

        onItemAdd({
          id,
          file,
          dirtyPosition:
            Number.isNaN(lat) || Number.isNaN(lon)
              ? ''
              : latLonToString({ lat, lon }, language),
          title: tags.title
            ? tags.title.description
            : tags.DocumentName
            ? tags.DocumentName.description
            : '',
          description: /CAMERA|^DCIM/.test(description) ? '' : description,
          takenAt: takenAtRaw && parseExifDateTime(takenAtRaw.description),
          tags: keywords,
          errors: [],
        });

        if (showPreview) {
          loadPreview(file, tags, (err, url) => {
            if (err) {
              return;
            }

            onItemChange({ id, url });

            cb();
          });
        } else {
          cb();
        }
      };

      reader.readAsArrayBuffer(file.slice(0, 128 * 1024));
    },
    [showPreview, language, onItemAdd, onItemChange],
  );

  return useCallback(
    (acceptedFiles: File[] /* , rejectedFiles: File[] */) => {
      for (const accpetedFile of acceptedFiles) {
        processFile(accpetedFile, (err?: Error) => {
          if (err) {
            // TODO
          }
        });
      }
    },
    [processFile],
  );
}

// adds support for Olympus and other weirdos
function adaptGpsCoordinate(x: {
  description: string | number;
  value: string;
}) {
  if (x) {
    if (typeof x.description === 'number') {
      return [x.description];
    }

    // { value: "48,57.686031N", attributes: {}, description: "48.96143385N" }

    const { description, value } = x;
    const p = /^(?:(\d+),)?(\d+(?:\.\d+)?)([NSWE])?$/;
    const m1 = p.exec(description);
    const m2 = p.exec(value);

    if (m1 && (!m2 || !m2[3])) {
      return parse2(m1);
    }

    if (m2) {
      return parse2(m2);
    }
  }

  return [Number.NaN, null] as const;
}

function parse2(m: RegExpExecArray) {
  return [
    m[1] === undefined
      ? parseFloat(m[2])
      : parseInt(m[1], 10) + parseFloat(m[2]) / 60,
    m[3] || null,
  ] as const;
}

function parseExifDateTime(s: string) {
  // try ISO
  if (s && s.match(/\dT\d/)) {
    return new Date(s);
  }

  const m = /^(\d+):(\d+):(\d+)(?: (\d+)(?::(\d+)(?::(\d+))?)?)?$/.exec(s);
  return (
    (m &&
      new Date(
        Number(m[1]),
        Number(m[2]) - 1,
        Number(m[3]),
        m[4] ? Number(m[4]) : undefined,
        m[5] ? Number(m[5]) : undefined,
        m[6] ? Number(m[6]) : undefined,
      )) ||
    null
  );
}
