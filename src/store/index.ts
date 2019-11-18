import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { commonReducer } from './common/reducers';
import { common } from './common/middleware';

const rootReducer = combineReducers({
  common: commonReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(thunk, common));
