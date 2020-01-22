import React from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";

type IncomingProps = {
    imgSrc: string;
    ingredients: string[];
    instructions: string;
}

const CocktailDetail = (
    {
        imgSrc,
        ingredients,
        instructions
    } : IncomingProps) => (
  <ScrollView style={styles.cocktailContainer}>
    <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: imgSrc }} />
    </View>
    <View style={styles.ingredientList}>
        <Text style={styles.instructionsHeader}>{`Ingredients:`}</Text>
        {ingredients.map(item => {
            return (
            <Text style={styles.ingredientsText} key={item}>
                • {item}
            </Text>
            );
        })}
    </View>
    <View>
        <Text style={styles.instructionsHeader}>{`How to prepare`}</Text>
        <Text style={styles.instructionsText}>{instructions}</Text>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  cocktailContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: "#eee",
    flexDirection: "column",
    borderRadius: 5,
    height: '100%'
  },
  imageContainer: {
    height: 300,
    width: 350,
    margin: 5
  },
  image: {
    height: 300,
    width: '100%',
    borderRadius: 5,
    margin: 10
  },
  cocktailImage: {
    width: 350,
    height: 300,
    padding: 5,
    borderRadius: 5
  },
  ingredientList: {
    flexDirection: "column"
  },
  ingredientsText: { fontSize: 20 },
  instructionsHeader: { fontSize: 22, marginTop: 10, marginBottom: 10 },
  instructionsText: { fontSize: 20 }
});

export default CocktailDetail;
