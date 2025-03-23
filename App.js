import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/goalItem";
import GoalInput from "./components/goalInput";

export default function App() {
  const [goalList, setGoalList] = useState([]);

  const addGoalHandler = (enteredText) => {
    // setGoalList((prev) => [
    //   ...prev,
    //   { key: "GL0" + (prev.length + 1).toString(), text: goalInputText },
    // ]); //FlatList key method 1
    setGoalList((prev) => [
      ...prev,
      { id: "GL0" + (prev.length + 1).toString(), text: enteredText },
    ]); //Flat list key method 2 eg id Instead of key
  };
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          //Flat list requires a key for child
          // method 1: have key(prop) in the data object
          // method 2: use key Extractor
          data={goalList} // need to pass the input Data
          keyExtractor={(item, index) => item.id}
          renderItem={(itemData) => {
            // item data contains the meta data as well i.e, itemData
            return <GoalItem text={itemData.item.text} />;
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
  goalsContainer: {
    flex: 8,
    paddingBlock: 10,
  },
});
