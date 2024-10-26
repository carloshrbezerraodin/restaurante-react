import { ResponseApiProps } from "../../types/ResponseApi";

enum ItemsActionTypes {
  FETCH_ITEMS_REQUEST = "items/request_fetch",
  FETCH_ITEMS_SUCCESS = "items/sucess_fetch",
  FETCH_ITEMS_FAILURE = 'items/failure_fetch'
}

interface FetchItemsRequestAction {
  type: ItemsActionTypes.FETCH_ITEMS_REQUEST;
}

interface FetchItemsSuccessAction {
  type: ItemsActionTypes.FETCH_ITEMS_SUCCESS;
  payload: ResponseApiProps;
}

interface FetchItemsFailureAction {
  type: ItemsActionTypes.FETCH_ITEMS_FAILURE;
  payload: string; 
}



export type ItemsActionsProps = FetchItemsRequestAction | FetchItemsSuccessAction | FetchItemsFailureAction;

export default ItemsActionTypes;