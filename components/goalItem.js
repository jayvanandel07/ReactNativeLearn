import { Text, View, StyleSheet, Pressable } from "react-native";

const GoalItem = ({ text, id, onDeleteGoalHandler }) => {
  return (
    //bind(this,id) setting the initial arguments
    <Pressable onPress={onDeleteGoalHandler.bind(this, id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  ); //itemData.item contains the item itself
};

const styles = StyleSheet.create({
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

export default GoalItem;
