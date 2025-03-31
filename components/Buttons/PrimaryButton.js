import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";

const PrimaryButton = (props) => {
  const [buttonPressed, setButtonPressed] = useState(false);

  const buttonPressHandler = (event) => {
    event.preventDefault();
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
        android_ripple={{ color: "#55002a" }} // only for android
        onPress={buttonPressHandler}
        onPressIn={setButtonPressed.bind(this, true)}
        onPressOut={setButtonPressed.bind(this, false)}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    borderRadius: 26,
    backgroundColor: "#7e0642",
    overflow: "hidden",
  },
  buttonInnerContainer: {
    paddingBlock: 16,
    paddingInline: 8,
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
        color: "#670034",
      },
    ],
  },
  buttonPressedOut: {
    boxShadow: [
      {
        offsetX: 0,
        offsetY: 0,
        color: "#670034",
        spreadDistance: 2,
        blurRadius: 5,
      },
    ],
  },
});
export default PrimaryButton;
