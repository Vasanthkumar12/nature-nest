import { applyMiddleware, legacy_createStore } from "redux";
import { productReducer } from "./productReducer";
import { thunk } from "redux-thunk";

export const productStore = legacy_createStore(productReducer, applyMiddleware(thunk))