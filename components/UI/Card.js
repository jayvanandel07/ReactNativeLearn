import { View, StyleSheet } from "react-native";
import React from "react";
import colors from "../../constants/colors";

const Card = ({ children, style }) => {
  let combinedStyle = styles.card;
  if (Array.isArray(style)) {
    combinedStyle = [styles.card, ...style];
  } else if (typeof style === "object" && style !== null) {
    combinedStyle = [styles.card, style];
  }

  return <View style={combinedStyle}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    backgroundColor: colors.primary500,
    marginVertical: 16,
    padding: 16,
    borderRadius: 10,
    gap: 16,
  },
});
