import { TypedThunk } from 'store';
import { api } from 'utils/api';

export const fetchProduct =
  (id: string): TypedThunk =>
  async (dispatch) => {
    dispatch({ type: 'product/fetch' });

    try {
      const response = await api.get(`/products/${id}`);
      dispatch({ type: 'product/fetchFulfilled', payload: response.data });
    } catch (error) {
      dispatch({ type: 'product/fetchRejected', error });
    }
  };
