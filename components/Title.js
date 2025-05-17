import { View, Text, StyleSheet } from "react-native";

const Title = ({ children }) => {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ddb52f",
    backgroundColor: "#222", // Added contrasting background color
    paddingVertical: 8,
    borderRadius: 8,
  },
});
