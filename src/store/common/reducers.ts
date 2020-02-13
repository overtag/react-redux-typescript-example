import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { changeEmailAction, changeUrlAction, changeUserAction, initAction } from './actions';
import {
  ChangeEmailAction,
  ChangeUrlAction,
  ChangeUserAction,
  CommonState,
  InitAction,
} from './types';

const initialState: CommonState = {
  email: 'test@test.com',
  user: 'test',
  url: 'test.com',
};

function initReducer(state: CommonState, payload: InitAction): CommonState {
  return { ...state, email: payload.email, user: payload.user, url: payload.url };
}

function changeEmailReducer(state: CommonState, payload: ChangeEmailAction): CommonState {
  console.log('changeEmailReducer');
  return { ...state, email: payload.email };
}

function changeUrlReducer(state: CommonState, payload: ChangeUrlAction): CommonState {
  return { ...state, email: payload.url };
}

function changeUserReducer(state: CommonState, payload: ChangeUserAction): CommonState {
  return { ...state, email: payload.user };
}

export const commonReducer = reducerWithInitialState(initialState)
  .case(initAction, initReducer)
  .case(changeEmailAction, changeEmailReducer)
  .case(changeUrlAction, changeUrlReducer)
  .case(changeUserAction, changeUserReducer);
