import type { Product } from 'types/product';

type ProductsFetch = {
  type: 'products/fetch';
};

type ProductsFetchFulfilled = {
  type: 'products/fetchFulfilled';
  payload: Array<Product>;
};

type ProductsFetchRejected = {
  type: 'products/fetchRejected';
  error: any;
};

type ProductsReset = {
  type: 'products/reset';
};

export type ProductsActions =
  | ProductsFetch
  | ProductsFetchFulfilled
  | ProductsFetchRejected
  | ProductsReset;
