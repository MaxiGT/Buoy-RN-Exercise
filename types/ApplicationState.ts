import { Drink } from "./Drink";
import { DrinkDetail } from "./DrinkDetail";

export type ApplicationState = {
    drinks: Drink[],
    selectedDrink: DrinkDetail,
    isFetching: Boolean,
    error: {},
    filter: string;
};

export type ApplicationStateReducer = {
    drinksReducer: {
        state: ApplicationState
    }
};