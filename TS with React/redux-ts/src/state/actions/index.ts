import { ActionTypes } from "./action-types";
interface SearchRepositoriesAction {
  type: ActionTypes.SEARCH_REPOSITORIES_ACTION;
}
interface SearchRepositoriesSuccessAction {
  type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS_ACTION;
  payload: string[];
}
interface SearchRepositoriesErrorAction {
  type: ActionTypes.SEARCH_REPOSITORIES_ERROR_ACTION;
  payload: string;
}
export type Actions =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;
