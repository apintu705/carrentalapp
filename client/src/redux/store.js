import { createStore, applyMiddleware ,combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"
import {loading} from "./reducers/loading"
import { reducer } from './reducers/reducer';

const rootReducers=combineReducers({
    reducer:reducer,
    loading:loading
})

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});
export const store = createStore(
  rootReducers,
  composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);