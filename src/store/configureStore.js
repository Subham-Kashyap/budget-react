import { combineReducers, configureStore } from "@reduxjs/toolkit";
import entriesReducers from '../reducers/entries.reducers'
import modalsReducers from '../reducers/modals.reducers'
import createSagaMiddleware from "redux-saga";
//import { testSaga } from "../sagas/testSaga";
import { initSagas } from "../sagas";

const sagaMiddleware = createSagaMiddleware();
//const middlewares = [sagaMiddleware];
const store = configureStore({
    reducer: combineReducers({
        entries : entriesReducers,
        modals: modalsReducers,
    }),
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  });
  //sagaMiddleware.run(testSaga);
  initSagas(sagaMiddleware);
export default store;