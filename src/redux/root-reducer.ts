import { combineReducers } from "redux";
import itemReducer from "./items/reducer";
import carrinhoReducer from "./carrinho/reducer";

const rootReducer = combineReducers({
  itemReducer,
  carrinhoReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;