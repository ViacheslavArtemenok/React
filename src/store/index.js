import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { profInfoReducer } from "./profile";
import { logger } from "./middlewares";
import { gistsReducer } from "./gists/reducer";
export const store = createStore(
  profInfoReducer,
  compose(
    applyMiddleware(logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
const persistConfig = {
  key: "root",
  storage,
};
const persistreducer = persistReducer(
  persistConfig,
  combineReducers({
    gists: gistsReducer,
  })
);
