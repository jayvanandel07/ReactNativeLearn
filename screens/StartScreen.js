import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/Buttons/PrimaryButton";

import { useState } from "react";

const StartScreen = () => {
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
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        placeholder="00"
        maxLength={2}
        keyboardType="number-pad"
        placeholderTextColor={"#ddb42f7e"}
        cursorColor={"#ddb52f"}
        selectionHandleColor={"#ddb52f"}
        onChangeText={enteredNumberHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
        <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    marginTop: 100,
    margin: 20,
    padding: 16,
    backgroundColor: "#72063c",
    borderRadius: 10,
    boxShadow: [
      // only works on new version of ios and android
      {
        offsetX: 0,
        offsetY: 0,
        blurRadius: "20px",
        spreadDistance: "3px",
        color: "#00000053",
        inset: false,
      },
    ],
  },
  numberInput: {
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    marginVertical: 10,
    color: "#ddb52f",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
});

export default StartScreen;
