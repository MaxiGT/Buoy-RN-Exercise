import React from 'react';
import { View, FlatList, TouchableOpacity, Text } from "react-native"
import { Drink } from "types/Drink";
import Cocktail from './Cocktail';

type IncomingProps = {
    drinks: Drink[];
    onSelectDrink: (id: number) => void;
}

const DrinksList = (props: IncomingProps) => {
    return (
        <View>
            <FlatList
                data={props.drinks}
                keyExtractor={item => item.idDrink}
                renderItem={(renderProps: any) => (
                    <TouchableOpacity
                        key={renderProps.item.idDrink}
                        onPress={() => {
                            props.onSelectDrink(parseInt(renderProps.item.idDrink))
                            }}>
                                <Cocktail name={renderProps.item.strDrink} imgSrc={renderProps.item.strDrinkThumb} />
                    </TouchableOpacity>
                )}
                initialNumToRender={10}
                ListEmptyComponent={
                    <Text>No Results</Text>
                }
            />
        </View>
    )
}

export default DrinksList;