import { StyleSheet, Text, View } from "react-native";

import StartScreen from "./components/StartScreen";

export default function App() {
  return <StartScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
