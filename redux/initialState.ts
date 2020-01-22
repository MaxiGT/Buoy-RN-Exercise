import { ApplicationState } from "types/ApplicationState";

export function initialState(): ApplicationState {
    return {
        drinks: [],
        selectedDrink: {
            idDrink: '',
            strCategory: '',
            strDrink: '',
            strDrinkThumb: '',
            strIngredient1: '',
            strMeasure1: '',
            strInstructions: ''
        },
        filter: '',
        error: {},
        isFetching: false
    };
}