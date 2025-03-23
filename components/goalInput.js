import { useState } from "react";
import { Button, TextInput, View, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [goalInputText, setGoalInputText] = useState("");
  const goalInputHandler = (inputText) => {
    setGoalInputText(inputText);
  };
  const addGoalHandler = () => {
    props.onAddGoal(goalInputText);
    setGoalInputText("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal!"
          value={goalInputText}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancelHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBlockEndColor: "#cccc",
    borderBottomWidth: 1,
    padding: 20,
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 8,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    gap: 10,
  },
  button: {
    flex: 1,
  },
});

export default GoalInput;
