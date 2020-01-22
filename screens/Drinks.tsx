import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { View, Button, Text } from "react-native";
import { fetchDrinks, fetchDrinkDetail, onSelectDrink, filterChange } from "../redux/actions/actions";
import { Drink } from '../types/Drink';
import DrinksList from '../components/DrinksList';
import Spinner from '../components/Spinner';
import { getFilteredDrinks } from '../redux/selectors/selectors';
import SearchBar from '../components/SearchBar';
import { HeaderConfigProps } from 'types/HeaderConfigProps';

type IncomingProps = {
    navigation: any;
    drinks: Drink[];
    isFetching: boolean;
    fetchDrinks: () => void;
    fetchDrinkDetail: (id: number) => void;
    onSelectDrink: (id: number) => void;
    filterChange: (filter: string) => void;
}

const Drinks = (props: IncomingProps) => {

    const [drinks, setDrinks] = useState<Drink[]>(props.drinks);

    const setUpHeaderDetailAndNavigate = (drinkName: string) => {
        props.navigation.navigate("DrinkDetail", { detailHeader: drinkName });
    }

    const selectRandom = () => {
        const id = Math.round(Math.random() * drinks.length);
        props.onSelectDrink(parseInt(props.drinks[id].idDrink));
        setUpHeaderDetailAndNavigate(props.drinks[id].strDrink);
    }

    useEffect(() => {
        if (props.drinks && props.drinks.length === 0) {
            props.fetchDrinks();
        }
    }, []);

    useEffect(() => {
        if (props.drinks.length != drinks.length) {
            setDrinks(props.drinks);
        }
    }, [props]);

    useEffect(() => {
        if (drinks.length > 0) {
            props.navigation.setParams({ selectRandom });
        }
    }, [drinks]);

    const onItemSelect = (id: number) => {
        props.onSelectDrink(id);
        const drink = drinks.filter((d) => parseInt(d.idDrink) === id);
        setUpHeaderDetailAndNavigate(drink[0].strDrink);
    }

    return (
        <View>
            <SearchBar
                onSearch={props.filterChange}
            />
            {props.isFetching ? 
                (
                    <Spinner />
                )
                : (
                    <DrinksList drinks={drinks} onSelectDrink={onItemSelect} />
                )}
        </View>
    );
}

Drinks.navigationOptions = (headerProps: HeaderConfigProps) => {
    return (
        {
            // If we'd like to have a Custom Header of some Sort as part of the Navigation Library
            // We can easily implement something of this sort instead of headerRight and headerLeft
            // header: () => (
            //     <View>
            //         <Text>Custom Header App</Text>
            //     </View>
            // ),
            headerRight: () =>
                (<Button
                    onPress={() => headerProps.navigation.getParam('selectRandom')()}
                    title="Select Random"
                    color="red"
                />)
        }
    );
}

const mapStateToProps = (state: any) => {
    return {
        drinks: getFilteredDrinks(state),
        isFetching: state.drinksReducer.isFetching
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({
        fetchDrinks,
        fetchDrinkDetail,
        onSelectDrink,
        filterChange
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Drinks);