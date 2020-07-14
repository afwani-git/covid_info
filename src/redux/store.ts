import { createStore, applyMiddleware }  from "redux";
import { logger }  from "redux-logger";
import rootReducer from "./rootReducer";
import createMiddleware from "redux-saga";
import { rootSaga } from "./rootSaga";

const sagasMiddlewares = createMiddleware();

const middlewares: any[] = [sagasMiddlewares];

if(process.env.NODE_ENV === 'development'){
  middlewares.push(logger);
}

export const store = createStore(rootReducer,{},applyMiddleware(...middlewares))

sagasMiddlewares.run(rootSaga);
