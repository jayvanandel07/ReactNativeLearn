import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [goalInputText, setGoalInputText] = useState("");
  const [goalList, setGoalList] = useState([]);
  const goalInputHandler = (inputText) => {
    setGoalInputText(inputText);
  };
  const addGoalHandler = () => {
    // setGoalList((prev) => [
    //   ...prev,
    //   { key: "GL0" + (prev.length + 1).toString(), text: goalInputText },
    // ]); //FlatList key method 1
    setGoalList((prev) => [
      ...prev,
      { id: "GL0" + (prev.length + 1).toString(), text: goalInputText },
    ]); //Flat list key method 2 eg id Instead of key
    setGoalInputText("");
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal!"
          value={goalInputText}
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          //Flat list requires a key for child
          // method 1: have key(prop) in the data object
          // method 2: use key Extractor
          data={goalList} // need to pass the input Data
          keyExtractor={(item, index) => item.id}
          renderItem={(itemData) => {
            // item data contains the meta data as well i.e, itemData
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            ); //itemData.item contains the item itself
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingInline: 20,
  },
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
  goalsContainer: {
    flex: 8,
    paddingBlock: 10,
  },
  goalItem: {
    backgroundColor: "#43abf5",
    marginBottom: 5,
    padding: 10,
    borderRadius: 5,
  },
  goalText: {
    color: "#fff",
  },
});
