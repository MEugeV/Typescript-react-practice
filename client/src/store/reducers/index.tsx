import {combineReducers} from 'redux';
import { usersReducer } from './users';
import { User } from '../actions';

export interface StoreState {
  users: User[];
 }

export const reducers = combineReducers<StoreState>({
  users: usersReducer,
 });



// interface stateI {
//   counter: number;
// }

// interface actionI {
//   type: string;
// }

// const initialState: stateI = {
//   counter: 1,
// };

// export default function reducer(state: stateI = initialState, action: actionI) {    
//   return state;
// }
