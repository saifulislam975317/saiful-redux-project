import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore } from "redux";
import ProductReducers from "./reducers/ProductReducers";

const store = createStore(ProductReducers, composeWithDevTools());

export default store;
