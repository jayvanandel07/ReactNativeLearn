import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/Buttons/PrimaryButton";

import { useState } from "react";
import Title from "../components/Title";
import Colors from "../constants/colors";
import colors from "../constants/colors";

const StartScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  function enteredNumberHandler(enteredNumber) {
    setEnteredNumber(enteredNumber);
  }

  function resetHandler() {
    setEnteredNumber("");
  }
  function confirmHandler() {
    const parsedNumber = parseInt(enteredNumber);
    if (isNaN(parsedNumber) || parsedNumber <= 0 || parsedNumber > 99) {
      // Alert calls the native alert
      Alert.alert("Invalid Number!", "Number should be between 0 and 100.", [
        { text: "Okay", style: "destructive", onPress: resetHandler },
      ]);
      return;
    }
    onPickNumber(parsedNumber);
  }

  return (
    <>
      <Title>Guess My Number</Title>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.numberInput}
          placeholder="00"
          maxLength={2}
          keyboardType="number-pad"
          placeholderTextColor={colors.secondary300}
          cursorColor={colors.secondary500}
          selectionHandleColor={colors.secondary500}
          onChangeText={enteredNumberHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
          <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    marginTop: 50,

    padding: 16,
    backgroundColor: Colors.primary500,
    borderRadius: 10,
    boxShadow: [
      // only works on new version of ios and android
      {
        offsetX: 0,
        offsetY: 0,
        blurRadius: "20px",
        spreadDistance: "3px",
        color: colors.shadow500,
        inset: false,
      },
    ],
  },
  numberInput: {
    width: 50,
    fontSize: 32,
    borderBottomColor: colors.secondary500,
    borderBottomWidth: 2,
    marginVertical: 10,
    color: colors.secondary500,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
});

export default StartScreen;
