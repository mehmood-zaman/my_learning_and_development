import { ActionTypes } from "../actions/action-types";
import { Actions } from "../actions";
interface StoreReducerTypes {
  loading: boolean;
  error: string | null;
  data: string[];
}

const reducer = (
  state: StoreReducerTypes,
  action: Actions
): StoreReducerTypes => {
  switch (action.type) {
    case ActionTypes.SEARCH_REPOSITORIES_ACTION:
      return { loading: true, error: null, data: [] };
    case ActionTypes.SEARCH_REPOSITORIES_SUCCESS_ACTION:
      return { loading: false, error: null, data: action.payload };
    case ActionTypes.SEARCH_REPOSITORIES_ERROR_ACTION:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
