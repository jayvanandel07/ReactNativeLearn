import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

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
    color: colors.secondary500,
    backgroundColor: colors.primary500, // Added contrasting background color
    paddingVertical: 8,
    borderRadius: 8,
  },
});
