import { ImageBackground, StyleSheet } from "react-native";
import StartScreen from "./screens/StartScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient
      style={styles.rootContainer}
      colors={["#d2bd78", "#d4b755", "#e0b118"]}
    >
      {/* Expo linear gradient : npx expo install expo-linear-gradient */}
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={[styles.rootContainer]} //style of containing element
        imageStyle={styles.backgroundImage} //style for image itself
      >
        <StartScreen />
      </ImageBackground>
      {/* ImageBackground in used to set a background image unlike image which is used to set a image in the layout */}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.35,
  },
});
