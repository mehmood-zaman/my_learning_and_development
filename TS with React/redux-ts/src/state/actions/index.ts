import { ActionTypes } from "./action-types";
interface SearchRepositoriesAction {
  type: ActionTypes.SearchRepositoriesAction;
}
interface SearchRepositoriesSuccessAction {
  type: ActionTypes.SearchRepositoriesSuccessAction;
  payload: string[];
}
interface SearchRepositoriesErrorAction {
  type: ActionTypes.SearchRepositoriesErrorAction;
  payload: string;
}
export type Actions =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;
