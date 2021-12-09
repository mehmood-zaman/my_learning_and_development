import { ActionTypes } from "../action-types";
import { Actions } from "../index";

const search_repositories = (term: string) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionTypes.SEARCH_REPOSITORIES_ACTION,
    });

    try {
    } catch (error) {
      dispatch({
        type: ActionTypes.SEARCH_REPOSITORIES_ERROR_ACTION,
      });
    }
  };
};
