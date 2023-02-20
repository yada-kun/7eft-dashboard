import { TypedThunk } from 'store';

export const resetProducts = (): TypedThunk => async (dispatch) => {
  dispatch({ type: 'products/reset' });
};
