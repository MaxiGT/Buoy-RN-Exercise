import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Drinks from "./Drinks";
import DrinkDetail from "./DrinkDetail";

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
        }
    },
    {
        initialRouteName: 'Drinks',
        defaultNavigationOptions: {
            animationEnabled: true,
        },
    }
);

export const AppContainer = createAppContainer(RootStack);