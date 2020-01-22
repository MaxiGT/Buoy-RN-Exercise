import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

type IncomingProps = {
    name: string;
    imgSrc: string;
}

const Cocktail = (props: IncomingProps) => {
    return (
        <View style={styles.cocktailContainer}>
            <View style={styles.cocktailNameContainer}>
                <Text style={styles.cocktailName}>{props.name}</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={{ uri: props.imgSrc }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  cocktailContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: "#eee",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5
  },
  cocktailNameContainer: { flex: 1 },
  cocktailName: {
    fontSize: 30,
    color: "#616161",
    textAlign: "left",
    padding: 5,
    flexWrap: "wrap"
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    height: 90,
    width: 150,
    borderRadius: 5,
    margin: 10
  },
  cocktailImage: {
    height: 170,
    width: 150,
    borderRadius: 5,
    margin: 10
  }
});

export default Cocktail;
