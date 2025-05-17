import {
  ImageBackground,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";
import StartScreen from "./screens/StartScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }
  let screen = <StartScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} />;
  }
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
        <SafeAreaView
          style={{
            ...styles.rootContainer,
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, // to avoid status bar
          }}
        >
          {screen}
        </SafeAreaView>
        {/* SafeAreaView is used to avoid notches and other screen elements */}
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
