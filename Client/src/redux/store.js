import { legacy_createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from 'redux-thunk'
import reducer from "./reducer";

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStore = legacy_createStore;

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;

