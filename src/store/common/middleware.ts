import { middleware } from 'typescript-fsa-redux-middleware';

import { changeEmailAction, changeUrlAction, changeUserAction, initAction } from './actions';
import {
  ChangeEmailAction,
  ChangeUrlAction,
  ChangeUserAction,
  CommonState,
  InitAction,
} from './types';

import { Middleware, Dispatch } from 'redux';
import { Action } from 'typescript-fsa';

export const common: Middleware<CommonState> = middleware()
  .case(initAction, ({ getState, dispatch }, next: Dispatch, action: Action<InitAction>) => {
    next(action);
  })
  .case(
    changeEmailAction,
    ({ getState, dispatch }, next: Dispatch, action: Action<ChangeEmailAction>) => {
      next(action);
    },
  )
  .case(
    changeUrlAction,
    ({ getState, dispatch }, next: Dispatch, action: Action<ChangeUrlAction>) => {
      next(action);
    },
  )
  .case(
    changeUserAction,
    ({ getState, dispatch }, next: Dispatch, action: Action<ChangeUserAction>) => {
      next(action);
    },
  );
