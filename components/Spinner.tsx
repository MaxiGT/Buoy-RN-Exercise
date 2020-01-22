import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

const Spinner = () => (
  <View style={styles.spinnerContainer}>
    <ActivityIndicator size={100} style={styles.spinner} color="green" />
  </View>
);

const styles = StyleSheet.create({
  spinnerContainer: {
    justifyContent: "center",
    flex: 1,
  },
  spinner: {
    marginTop: 800
  }
});

export default Spinner;
