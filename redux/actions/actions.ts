import { actionTypes } from "./actionTypes";
import { Drink } from "types/Drink";
import ApiService from "../../services/apiService";
import { DrinkDetail } from "types/DrinkDetail";
import { removeEmpty } from "../../utils/drinksHelper";

// Fetch Drinks List Success
export type FetchDrinksSuccess = {
    type: typeof actionTypes.FETCH_DRINKS_SUCCESS,
    payload: Drink[]
};

export const fetchDrinksSuccess = (payload: Drink[]) => ({
    type: actionTypes.FETCH_DRINKS_SUCCESS,
    payload
});

// Fetch Drink Detail Success
export type FetchDrinkDetailSuccess = {
    type: typeof actionTypes.FETCH_DRINK_DETAIL_SUCCESS,
    payload: Drink
};

export const FetchDrinkDetailSuccess = (payload: DrinkDetail) => ({
    type: actionTypes.FETCH_DRINK_DETAIL_SUCCESS,
    payload
});

// Select Drink from List
export type SelectDrink = {
    type: typeof actionTypes.SELECT_DRINK,
    payload: DrinkDetail
};

export const selectDrink = (payload: DrinkDetail) => ({
    type: actionTypes.SELECT_DRINK,
    payload
});

// Generif API Request - isFetching = true
export type FetchRequest = {
    type: typeof actionTypes.FETCHING_REQUEST
};

export const fetchRequest = () => ({
    type: actionTypes.FETCHING_REQUEST
});

// Filter Change
export type FilterChange = {
    type: typeof actionTypes.FETCH_DRINKS_SUCCESS,
    payload: Drink[]
};

export const filterChange = (payload: string) => ({
    type: actionTypes.SET_FILTER,
    payload
});


// API Involved Methods
export const fetchDrinks = () => async (dispatch: any) => {
    dispatch(fetchRequest());
    const service = new ApiService();
    const drinks = await service.getDrinks();
    dispatch(fetchDrinksSuccess(drinks));
}

export const onSelectDrink = (id: number) => async (dispatch: any) => {
    dispatch(fetchRequest());
    const service = new ApiService();
    const selectedDrink = await service.getDrinkDetail(id);
    dispatch(selectDrink(removeEmpty(selectedDrink.drinks[0])));
}

export const fetchDrinkDetail = (id: number) => async (dispatch: any) => {
    dispatch(fetchRequest());
    const service = new ApiService();
    const detail = await service.getDrinkDetail(id);
    dispatch(FetchDrinkDetailSuccess(removeEmpty(detail.drinks[0])));
}
