import { TypedThunk } from 'store';
import { api } from 'utils/api';
import { Product } from 'types/product';

export const updateProduct =
  (id: string, data: Product): TypedThunk =>
  async (dispatch) => {
    dispatch({ type: 'product/update' });

    try {
      const response = await api.patch(`/products/${id}`, data);
      dispatch({ type: 'product/updateFulfilled', payload: response.data });
    } catch (error) {
      dispatch({ type: 'product/updateRejected', error });
    }
  };
