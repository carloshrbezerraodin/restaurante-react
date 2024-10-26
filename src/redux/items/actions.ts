import { Dispatch } from 'redux';
import { ResponseApiProps } from "../../types/ResponseApi";
import ItemsActionTypes from "./action-types";

export const fetchItemRequest = () => ({
  type: ItemsActionTypes.FETCH_ITEMS_REQUEST
});

export const fetchItemsSuccess = (data: ResponseApiProps) => ({
  type: ItemsActionTypes.FETCH_ITEMS_SUCCESS,
  payload: data
});

export const fetchItemsFailure = (error: string) => ({
  type: ItemsActionTypes.FETCH_ITEMS_FAILURE,
  payload: error
})

export const fetchItems = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchItemRequest());

    try {
      const response = await fetch("/api/challenge/menu");
      const data: ResponseApiProps = await response.json();
      dispatch(fetchItemsSuccess(data))
    } catch (error) {
      dispatch(fetchItemsFailure("FALHA AO FAZER A REQUISIÇÃO"))
    }
  }
}