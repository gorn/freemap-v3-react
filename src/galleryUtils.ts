import { GalleryFilter } from './actions/galleryActions';

export function createFilter({
  tag,
  userId,
  ratingFrom,
  ratingTo,
  takenAtFrom,
  takenAtTo,
  createdAtFrom,
  createdAtTo,
}: GalleryFilter) {
  return {
    tag,
    userId,
    ratingFrom,
    ratingTo,
    takenAtFrom: takenAtFrom && takenAtFrom.toISOString(),
    takenAtTo: takenAtTo && plusDay(takenAtTo).toISOString(),
    createdAtFrom: createdAtFrom && createdAtFrom.toISOString(),
    createdAtTo: createdAtTo && plusDay(createdAtTo).toISOString(),
  };
}

function plusDay(d: Date): Date {
  if (!d) {
    return d;
  }

  const r = new Date(d);
  r.setDate(r.getDate() + 1);
  return r;
}
