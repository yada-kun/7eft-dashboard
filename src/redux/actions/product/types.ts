import { type } from 'os';
import { Product } from 'types/product';

// Fetching a single product

type ProductFetch = {
  type: 'product/fetch';
};

type ProductFetchFulfilled = {
  type: 'product/fetchFulfilled';
  payload: Product;
};

type ProductFetchRejected = {
  type: 'product/fetchRejected';
  error: any;
};

// Adding a product

type ProductAdd = {
  type: 'product/add';
};

type ProductAddFulfilled = {
  type: 'product/addFulfilled';
  payload: Product;
};

type ProductAddRejected = {
  type: 'product/addRejected';
  error: any;
};

// Updating a product

type ProductUpdate = {
  type: 'product/update';
};

type ProductUpdateFulfilled = {
  type: 'product/updateFulfilled';
  payload: Product;
};

type ProductUpdateRejected = {
  type: 'product/updateRejected';
  error: any;
};

// Removing a product

type ProductRemove = {
  type: 'product/remove';
};

type ProductRemoveFulfilled = {
  type: 'product/removeFulfilled';
  payload: Product;
};

type ProductRemoveRejected = {
  type: 'product/removeRejected';
  error: any;
};

// Resetting the product state

type ProductReset = {
  type: 'product/reset';
};

export type ProductActions =
  // Fetch
  | ProductFetch
  | ProductFetchFulfilled
  | ProductFetchRejected
  // Add
  | ProductAdd
  | ProductAddFulfilled
  | ProductAddRejected
  // Update
  | ProductUpdate
  | ProductUpdateFulfilled
  | ProductUpdateRejected
  // Remove
  | ProductRemove
  | ProductRemoveFulfilled
  | ProductRemoveRejected
  // Reset
  | ProductReset;
