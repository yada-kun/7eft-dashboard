import { api } from 'utils/api';
import { TypedThunk } from 'store';

export const fetchProducts = (): TypedThunk => async (dispatch) => {
  dispatch({ type: 'products/fetch' });

  try {
    const response = await api.get('/products');
    dispatch({ type: 'products/fetchFulfilled', payload: response.data });
  } catch (error) {
    dispatch({ type: 'products/fetchRejected', error });
  }
};
