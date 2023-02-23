import type { Product } from 'types/product';
import type { Actions } from 'redux/actions/types';

export type State = {
  data: Array<Product>;
  status: {
    fetching: boolean;
    fetched: boolean;
  };
  error: any;
};

const InitialState: State = {
  data: [],
  status: {
    fetching: false,
    fetched: false,
  },
  error: null,
};

const reducer = (state: State = InitialState, action: Actions): State => {
  switch (action.type) {
    // fetch all
    case 'products/fetch':
      return {
        ...state,
        status: {
          fetching: true,
          fetched: false,
        },
      };
    case 'products/fetchFulfilled':
      return {
        ...state,
        status: {
          fetching: false,
          fetched: true,
        },
        data: action.payload,
      };
    case 'products/fetchRejected':
      return {
        ...state,
        status: {
          fetching: false,
          fetched: false,
        },
        error: action.error,
      };
    // reset
    case 'products/reset':
      return InitialState;
    default:
      return state;
  }
};

export default reducer;
