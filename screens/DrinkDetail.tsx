import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { View } from "react-native";
import { DrinkDetail } from 'types/DrinkDetail';
import Spinner from '../components/Spinner';
import CocktailDetail from '../components/CocktailDetail';
import { getObjProps } from '../utils/drinksHelper';
import { HeaderConfigProps } from 'types/HeaderConfigProps';

type IncomingProps = {
    isFetching: boolean;
    selectedDrink: DrinkDetail;
    navigation: any;
    cleanSelectedDrink: () => void;
}

const DrinkDetails = (props: IncomingProps) => {
    const ingredients = getObjProps(props.selectedDrink, 'ingredient');
    return (
        <View>
            {props.isFetching ? 
                (
                    <Spinner />
                )
                : (    
                    <CocktailDetail
                        imgSrc={props.selectedDrink.strDrinkThumb}
                        ingredients={ingredients}
                        instructions={props.selectedDrink.strInstructions} />
                )}
        </View>
    );
}

DrinkDetails.navigationOptions = (headerProps: HeaderConfigProps) => {
    const headerDetail = headerProps.navigation.getParam('detailHeader');
    return (
        {
            title: `${!!headerDetail ? `${headerDetail} - ` : ''} Detail`
        }
    );
}

const mapStateToProps = (state: any) => {
    return {
        selectedDrink: state.drinksReducer.selectedDrink,
        isFetching: state.drinksReducer.isFetching
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DrinkDetails);