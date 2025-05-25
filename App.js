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
import colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(false);
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  // function to set game over
  function resetGame(isGameOver) {
    setGameOver(isGameOver);
    if (!isGameOver) {
      setUserNumber(null); // Reset user number when game is restarted
    }
  }
  let screen = <StartScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onSetGameOver={setGameOver} />;
  }
  if (gameOver) {
    screen = <GameOverScreen onSetGameOver={resetGame} />;
  }
  return (
    <LinearGradient
      style={styles.rootContainer}
      colors={colors.backgroundGradient}
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
            padding: 24,
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
