import { TypedThunk } from 'store';
import { api } from 'utils/api';

export const removeProduct =
  (id: string): TypedThunk =>
  async (dispatch) => {
    dispatch({ type: 'product/remove' });

    try {
      const response = await api.delete(`/products/${id}`);
      dispatch({ type: 'product/removeFulfilled', payload: response.data });
    } catch (error) {
      dispatch({ type: 'product/removeRejected', error });
    }
  };
