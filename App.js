import { StyleSheet } from "react-native";

import StartScreen from "./components/StartScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient
      style={styles.rootContainer}
      colors={["#d2bd78", "#d4b755", "#e0b118"]}
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
