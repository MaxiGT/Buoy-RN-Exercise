import React from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import FastImage from 'react-native-fast-image';

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
        <FastImage
          style={styles.image}
          source={{
            uri: imgSrc,
            priority: FastImage.priority.high,
            cache: FastImage.cacheControl.immutable
          }}
        />
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
    height: 'auto'
  },
  imageContainer: {
    height: 300,
    width: 300,
  },
  image: {
    height: 300,
    width: '100%',
    borderRadius: 10,
  },
  ingredientList: {
    flexDirection: "column",
    margin: 5
  },
  ingredientsText: { fontSize: 20, marginLeft: 5 },
  instructionsHeader: { fontSize: 22, marginTop: 10, marginBottom: 10, marginLeft: 5 },
  instructionsText: { fontSize: 20, marginBottom: 20, marginLeft: 5 }
});

export default CocktailDetail;
