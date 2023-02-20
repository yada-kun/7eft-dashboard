import { TypedThunk } from 'store';

export const resetProduct = (): TypedThunk => async (dispatch) => {
  dispatch({ type: 'product/reset' });
};
