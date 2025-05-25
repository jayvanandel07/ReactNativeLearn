import { View, Text, StyleSheet } from "react-native";
import React from "react";
import colors from "../../constants/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={[styles.container]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.primary700,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.primary500,
    fontSize: 36,
    fontWeight: "bold",
  },
});
