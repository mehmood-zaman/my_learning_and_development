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
    case ActionTypes.SearchRepositoriesAction:
      return { loading: true, error: null, data: [] };
    case ActionTypes.SearchRepositoriesSuccessAction:
      return { loading: false, error: null, data: action.payload };
    case ActionTypes.SearchRepositoriesErrorAction:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
