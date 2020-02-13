import { createSelector } from 'reselect';

import { CommonState } from './types';
import { AppState } from '../index';

const getCommonState = (state: AppState): CommonState => state.common;

export const getEmail = createSelector(getCommonState, (state: CommonState): string => state.email);
export const getUser = createSelector(getCommonState, (state: CommonState): string => state.user);
export const getUrl = createSelector(getCommonState, (state: CommonState): string => state.url);
