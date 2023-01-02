//Defining redux store
import { createStore, applyMiddleware } from "redux"; //Only can accept one para
import thunk from "redux-thunk"; //Importing thunk from redux-thunk
import { composeWithDevTools } from "redux-devtools-extension"; //Importinf redux dev tools extion package
import rootReducer from "./rootReducer";
import logger from "redux-logger"; //importing logger middleware
// import cakeReducer from "./cake/cakeReducer";

// const store = createStore(cakeReducer);
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
); //applying logger middleware

export default store;
