import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Drinks from "./Drinks";
import DrinkDetail from "./DrinkDetail";
import AddDrinkScreen from './AddDrink';

const RootStack = createStackNavigator(
    {
        Drinks: {
            screen: Drinks,
            navigationOptions: {
                title: `Drinks List`,
                animationEnabled: true,
            }
        },
        DrinkDetail: {
            screen: DrinkDetail,
            navigationOptions: {
                animationEnabled: true
            }
        },
        AddDrink: {
            screen: AddDrinkScreen,
            navigationOptions: {
                title: `Add Drink`,
                animationEnabled: true,
            }
        },
    },
    {
        initialRouteName: 'Drinks',
        defaultNavigationOptions: {
            animationEnabled: true,
        },
    }
);

export const AppContainer = createAppContainer(RootStack);