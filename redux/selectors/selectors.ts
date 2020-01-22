import { createSelector } from "reselect";
import { Drink } from "types/Drink";

const getFilter = (root: any) => root.drinksReducer.filter;
const getDrinks = (root: any) => root.drinksReducer.drinks;

export const getFilteredDrinks = createSelector(
    [getDrinks, getFilter],
    (drinks, filter) => 
        drinks.filter((d: Drink) =>
            d.strDrink.toLowerCase().includes(filter.toLowerCase())
        )
);
