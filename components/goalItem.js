import { Text, View, StyleSheet, Pressable } from "react-native";

const GoalItem = ({ text, id, onDeleteGoalHandler }) => {
  return (
    //bind(this,id) setting the initial arguments
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={styles.androidGoalPressed}
        // style also accepts function and has access to the pressable state
        style={({ pressed }) => pressed && styles.goalPressed}
        onPress={onDeleteGoalHandler.bind(this, id)}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  ); //itemData.item contains the item itself
};

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#43abf5",
    marginBottom: 5,
    borderRadius: 5,
  },
  goalText: {
    color: "#fff",
    padding: 10,
  },
  androidGoalPressed: {
    color: "#2678c4d5",
  },
  goalPressed: {
    backgroundColor: "#2678c4d5",
    borderRadius: 5,
  },
});

export default GoalItem;
