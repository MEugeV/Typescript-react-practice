import { User } from "../actions"; //, FetchUsersAction
import { ActionTypes, Action } from "../types";

export const usersReducer = (state: User[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchUsers:
      return action.payload;
    case ActionTypes.deleteUsers:
        return state.filter(el=>el.id !== action.payload.id );
    default:
    return state;
  }
};
