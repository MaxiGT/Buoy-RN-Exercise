import { initialState } from "../initialState";
import { ApplicationState } from "types/ApplicationState";
import { actionTypes } from "../actions/actionTypes";

export default function drinkReducer (state: ApplicationState = initialState(), action: any) {
    switch (action.type) {
        case actionTypes.FETCHING_REQUEST:
            return {
                ...state, isFetching: true
            }
        case actionTypes.FETCH_DRINKS_SUCCESS:
            return {
                ...state, isFetching: false, drinks: action.payload.drinks
            }
        case actionTypes.FETCH_DRINK_DETAIL_SUCCESS:
            return {
                ...state, isFetching: false
            }
        case actionTypes.SELECT_DRINK:
            return {
                ...state, isFetching: false, selectedDrink: action.payload
            }
        case actionTypes.SET_FILTER:
            return {
                ...state, filter: action.payload
            }
        case actionTypes.CREATE_DRINK:
            return {
                ...state, drinks: [...state.drinks, action.payload]
            }
        default:
            return { ...state };
    }
}