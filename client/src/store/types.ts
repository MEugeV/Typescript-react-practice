import { FetchUsersAction,DeleteUsersAction} from "./actions"; 


export enum ActionTypes {
    fetchUsers,
    deleteUsers,
}

export type Action = FetchUsersAction | DeleteUsersAction;