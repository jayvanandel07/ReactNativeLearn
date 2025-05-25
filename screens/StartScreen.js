import { Alert, StyleSheet, TextInput, View } from "react-native";

import { useState } from "react";
import Title from "../components/UI/Buttons/Title";
import colors from "../constants/colors";
import PrimaryButton from "../components/UI/Buttons/PrimaryButton";
import Card from "../components/UI/Card";

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
      <Card style={[styles.inputContainer]}>
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
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
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
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartScreen;
