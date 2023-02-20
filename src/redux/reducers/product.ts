import type { Product } from 'types/product';
import type { Actions } from 'redux/actions/types';

export type State = {
  data: Product | null;
  status: {
    fetching: boolean;
    fetched: boolean;
    adding: boolean;
    added: boolean;
    updating: boolean;
    updated: boolean;
    removing: boolean;
    removed: boolean;
  };
  error: any;
};

const InitialState = {
  data: null,
  status: {
    fetching: false,
    fetched: false,
    adding: false,
    added: false,
    updating: false,
    updated: false,
    removing: false,
    removed: false,
  },
  error: null,
};

const reducer = (state: State = InitialState, action: Actions): State => {
  switch (action.type) {
    // fetch
    case 'product/fetch':
      return {
        ...state,
        status: {
          ...state.status,
          fetching: true,
          fetched: false,
        },
      };
    case 'product/fetchFulfilled':
      return {
        ...state,
        status: {
          ...state.status,
          fetching: false,
          fetched: true,
        },
        data: action.payload,
      };
    case 'product/fetchRejected':
      return {
        ...state,
        status: {
          ...state.status,
          fetching: false,
          fetched: false,
        },
        error: action.error,
      };
    // add
    case 'product/add':
      return {
        ...state,
        status: {
          ...state.status,
          adding: true,
          added: false,
        },
      };
    case 'product/addFulfilled':
      return {
        ...state,
        status: {
          ...state.status,
          adding: false,
          added: true,
        },
        data: action.payload,
      };
    case 'product/addRejected':
      return {
        ...state,
        status: {
          ...state.status,
          adding: false,
          added: false,
        },
        error: action.error,
      };
    // update
    case 'product/update':
      return {
        ...state,
        status: {
          ...state.status,
          updating: true,
          updated: false,
        },
      };
    case 'product/updateFulfilled':
      return {
        ...state,
        status: {
          ...state.status,
          updating: false,
          updated: true,
        },
        data: action.payload,
      };
    case 'product/updateRejected':
      return {
        ...state,
        status: {
          ...state.status,
          updating: false,
          updated: false,
        },
        error: action.error,
      };
    // remove
    case 'product/remove':
      return {
        ...state,
        status: {
          ...state.status,
          removing: true,
          removed: false,
        },
      };
    case 'product/removeFulfilled':
      return {
        ...state,
        status: {
          ...state.status,
          removing: false,
          removed: true,
        },
        data: action.payload,
      };
    case 'product/removeRejected':
      return {
        ...state,
        status: {
          ...state.status,
          removing: false,
          removed: false,
        },
        error: action.error,
      };

    case 'product/reset':
      return InitialState;

    default:
      return state;
  }
};

export default reducer;
