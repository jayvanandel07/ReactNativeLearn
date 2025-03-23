import { Text, View, StyleSheet } from "react-native";

const GoalItem = ({ text }) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{text}</Text>
    </View>
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
