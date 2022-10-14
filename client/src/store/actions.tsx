import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

const url = "http://localhost:3001/api/user";

export interface User {
  id: number;
  name: string;
  lastName: string;
}

export interface FetchUsersAction {
  type: ActionTypes.fetchUsers;
  payload: User[];
}

export interface DeleteUsersAction {
  type: ActionTypes.deleteUsers;
  payload: User;
}

export const fetchUsers = () => {
  return async (dispatch: Dispatch) => {
    //implicit return any
    const response = await axios.get<User[]>(url); // get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
    dispatch<FetchUsersAction>({
      type: ActionTypes.fetchUsers, //implicit string
      payload: response.data, //implicit any
    });
  };
};

export const deleteUsers = (id: number) => {
  return async (dispatch: Dispatch) => {
    const response = await axios.delete<User>(`${url}/${id}`);
    dispatch<DeleteUsersAction>({
      type: ActionTypes.deleteUsers, //implicit string
      payload: response.data, //implicit any
    });
  };
};
  