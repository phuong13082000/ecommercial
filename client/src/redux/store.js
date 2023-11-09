import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { AllProductReducer } from "./product/reducer.js";
import { AllUserReducer } from "./user/reducer.js";
import { AllOrderReducer } from "./order/reducer.js";
import { AllMessageReducer } from "./message/reducer.js";
import { AllAdminReducer } from "./admin/reducer.js";

const rootReducer = combineReducers({
    AuthUserReducer: AllUserReducer,
    AuthAdminReducer: AllAdminReducer,
    OrderReducer: AllOrderReducer,
    ProductReducer: AllProductReducer,
    MessageReducer: AllMessageReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
store.subscribe(() => console.log(store.getState()));