import { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

const GoalInput = (props) => {
  const [goalInputText, setGoalInputText] = useState("");
  const goalInputHandler = (inputText) => {
    setGoalInputText(inputText);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your Course Goal!"
        value={goalInputText}
        onChangeText={goalInputHandler}
      />
      <Button
        title="Add Goal"
        onPress={() => {
          props.onAddGoal(goalInputText);
          setGoalInputText("");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBlockEnd: 20,
    borderBlockEndColor: "#cccc",
    borderBottomWidth: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    flex: 1,
    marginRight: 10,
    padding: 8,
  },
});

export default GoalInput;
