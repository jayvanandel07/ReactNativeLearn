import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

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
    //StatusBar Expo component
    <>
      <StatusBar style="dark" />
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/goal.png")}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Your Course Goal!"
            value={goalInputText}
            onChangeText={goalInputHandler}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Cancel"
                color="#f31282"
                onPress={props.onCancelHandler}
              />
            </View>
            <View style={styles.button}>
              <Button title="Add Goal" onPress={addGoalHandler} />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingInline: 20,
    backgroundColor: "#6cdff6",
  },
  image: {
    aspectRatio: 1 / 1,
    width: 100,
    height: 100,
    margin: 10,
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#71717160",
    backgroundColor: "#e8e8e8",
    borderRadius: 5,
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
