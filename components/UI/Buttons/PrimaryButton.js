import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import colors from "../../../constants/colors";

const PrimaryButton = ({ children, onPress }) => {
  const [buttonPressed, setButtonPressed] = useState(false);

  const buttonPressHandler = (event) => {
    event.preventDefault();
    onPress();
  };

  return (
    <View
      style={
        buttonPressed
          ? [styles.buttonOuterContainer, styles.buttonPressedIn]
          : [styles.buttonOuterContainer, styles.buttonPressedOut]
      }
    >
      <Pressable
        style={styles.buttonInnerContainer}
        android_ripple={{ color: colors.primary700 }} // only for android
        onPress={buttonPressHandler}
        onPressIn={setButtonPressed.bind(this, true)}
        onPressOut={setButtonPressed.bind(this, false)}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    borderRadius: 26,
    backgroundColor: colors.primary400,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    paddingBlock: 12,
    paddingInline: 16,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
  buttonPressedIn: {
    transform: [{ scale: 0.99 }],
    boxShadow: [
      {
        offsetX: 0,
        offsetY: 0,
        color: colors.primary600,
      },
    ],
  },
  buttonPressedOut: {
    boxShadow: [
      {
        offsetX: 0,
        offsetY: 0,
        color: colors.primary600,
        spreadDistance: 2,
        blurRadius: 5,
      },
    ],
  },
});
export default PrimaryButton;
