import { StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "./Buttons/PrimaryButton";

const StartScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        placeholder="00"
        maxLength={2}
        keyboardType="numeric"
        placeholderTextColor={"#ddb42f7e"}
        cursorColor={"#ddb52f"}
        selectionHandleColor={"#ddb52f"}
      />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    margin: 20,
    padding: 16,
    backgroundColor: "#72063c",
    borderRadius: 10,
    boxShadow: [
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
    marginVertical: 8,
    color: "#ddb52f",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default StartScreen;
