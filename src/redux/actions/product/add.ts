import { TypedThunk } from 'store';
import { api } from 'utils/api';
import { Product } from 'types/product';

export const addProduct =
  (data: Product): TypedThunk =>
  async (dispatch) => {
    dispatch({ type: 'product/add' });

    try {
      const response = await api.post('/products', data);
      dispatch({ type: 'product/addFulfilled', payload: response.data });
    } catch (error) {
      dispatch({ type: 'product/addRejected', error });
    }
  };
