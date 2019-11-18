import { actionCreatorFactory } from 'typescript-fsa';
import { InitAction, ChangeEmailAction, ChangeUserAction, ChangeUrlAction } from './types';

const actionCreator = actionCreatorFactory('');

export const initAction = actionCreator<InitAction>('INIT_ACTION');

export const changeEmailAction = actionCreator<ChangeEmailAction>('CHANGE_EMAIL_ACTION');
export const changeUserAction = actionCreator<ChangeUserAction>('CHANGE_USER_ACTION');
export const changeUrlAction = actionCreator<ChangeUrlAction>('CHANGE_URL_ACTION');
