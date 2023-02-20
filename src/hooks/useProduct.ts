import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTypedDispatch, useTypedSelector, ReduxState } from 'store';
//
import { fetchProduct } from 'redux/actions/product/fetch';
import { addProduct } from 'redux/actions/product/add';
import { updateProduct } from 'redux/actions/product/update';
import { removeProduct } from 'redux/actions/product/remove';
import { resetProduct } from 'redux/actions/product/reset';
//
import type { Product } from 'types/product';

const useProduct = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useTypedDispatch();
  const {
    data,
    status: {
      fetching,
      fetched,
      adding,
      added,
      updating,
      updated,
      removing,
      removed,
    },
    error,
  } = useTypedSelector((state: ReduxState) => state.product);

  // dispatch fetch product
  const dispatchFetchProduct = (id: string) => {
    dispatch(fetchProduct(id));
  };
  // dispatch add product
  const dispatchAddProduct = (data: Product) => {
    dispatch(addProduct(data));
  };
  // dispatch update product
  const dispatchUpdateProduct = (id: string, data: Product) => {
    dispatch(updateProduct(id, data));
  };
  // dispatch remove product
  const dispatchRemoveProduct = (id: string) => {
    dispatch(removeProduct(id));
  };
  // dispatch reset product
  const dispatchResetProduct = () => {
    dispatch(resetProduct());
  };

  // fetch product on mount
  useEffect(() => {
    if (id && !fetching && !fetched && !error) {
      dispatchFetchProduct(id);
    }
  }, [dispatchFetchProduct]);

  // Reset product on unmount
  useEffect(() => () => dispatchResetProduct(), []);

  return {
    dispatchFetchProduct,
    dispatchAddProduct,
    dispatchUpdateProduct,
    dispatchRemoveProduct,
    dispatchResetProduct,
    id,
    data,
    fetching,
    fetched,
    adding,
    added,
    updating,
    updated,
    removing,
    removed,
    error,
  };
};

export default useProduct;
