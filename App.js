import { StyleSheet, Text, View } from "react-native";

import StartScreen from "./components/StartScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient
      style={styles.rootContainer}
      colors={["#d0b869", "#d6b750", "#e0b118"]}
    >
      {/* Expo linear gradient : npx expo install expo-linear-gradient */}
      <StartScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
