import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";
const url = "https://jsonplaceholder.typicode.com/todos";

interface Todos {
  id: number;
  title: string;
  completed: boolean;
}
interface FetchTodoActionTypes {
  type: ActionTypes.fetchTodos;
  payload: Todos[];
}
export const fetchTodo = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todos[]>(url);
    dispatch<FetchTodoActionTypes>({
      type: ActionTypes.fetchTodos,
      payload: response.data,
    });
  };
};
