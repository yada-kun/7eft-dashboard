import { useEffect } from 'react';
import { ReduxState, useTypedDispatch, useTypedSelector } from 'store';
//
import { fetchProducts } from 'redux/actions/products/fetch';
import { resetProducts } from 'redux/actions/products/reset';

const useProducts = () => {
  const dispatch = useTypedDispatch();
  const {
    data,
    status: { fetching, fetched },
    error,
  } = useTypedSelector((state: ReduxState) => state.products);

  // dispatch fetch products
  const dispatchFetchProducts = () => {
    dispatch(fetchProducts());
  };
  // dispatch reset products
  const dispatchResetProducts = () => {
    dispatch(resetProducts());
  };

  // fetch products on mount
  useEffect(() => {
    if (fetching || fetched || error) {
      return;
    }
    dispatchFetchProducts();
  }, [dispatchFetchProducts, fetching, fetched, error]);

  // Reset products on unmount
  useEffect(() => () => dispatchResetProducts(), []);

  return {
    dispatchFetchProducts,
    data,
    fetching,
    fetched,
    error,
  };
};

export default useProducts;
