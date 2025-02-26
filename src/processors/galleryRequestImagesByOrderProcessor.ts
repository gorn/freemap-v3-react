import {
  galleryRequestImage,
  galleryList,
  gallerySetImageIds,
} from 'fm3/actions/galleryActions';
import { createFilter } from 'fm3/galleryUtils';
import { Processor } from 'fm3/middlewares/processorMiddleware';
import { httpRequest } from 'fm3/authAxios';

export const galleryRequestImagesByOrderProcessor: Processor<
  typeof galleryList
> = {
  actionCreator: galleryList,
  errorKey: 'gallery.picturesFetchingError',
  handle: async ({ getState, dispatch, action }) => {
    const { data } = await httpRequest({
      getState,
      method: 'GET',
      url: '/gallery/pictures',
      params: {
        by: 'order',
        orderBy: action.payload.substring(1),
        direction: action.payload[0] === '+' ? 'asc' : 'desc',
        ...createFilter(getState().gallery.filter),
      },
      expectedStatus: 200,
    });

    const ids = data.map(item => item.id);
    dispatch(gallerySetImageIds(ids));
    if (ids.length) {
      dispatch(galleryRequestImage(ids[0]));
    }
  },
};
