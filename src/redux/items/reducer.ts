import { ResponseApiProps } from "../../types/ResponseApi";
import ItemsActionTypes, { ItemsActionsProps } from "./action-types";

interface ItemsState {
  loading: boolean,
  items: ResponseApiProps | null,
  error: string | null
}

const initalState: ItemsState = {
  loading: false,
  items: null,
  error: null
}

const itemReducer = (state = initalState, action: ItemsActionsProps): ItemsState => {
  switch (action.type) {
    case ItemsActionTypes.FETCH_ITEMS_REQUEST:
      return { ...state, loading: true, error: null };
    case ItemsActionTypes.FETCH_ITEMS_SUCCESS:
      return { ...state, loading: false, items: action.payload };
    case ItemsActionTypes.FETCH_ITEMS_FAILURE:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
};

export default itemReducer;