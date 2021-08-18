import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { profInfoReducer } from "./profile";
import { logger } from "./middlewares";
export const store = createStore(
  profInfoReducer,
  compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
