import { View, Text, StyleSheet, Alert } from "react-native";
import Title from "../components/UI/Buttons/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/UI/Buttons/PrimaryButton";
import colors from "../constants/colors";

function getRandomNumber(min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return getRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber }) => {
  const [currentGuess, setCurrentGuess] = useState(
    getRandomNumber(1, 100, userNumber)
  );

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      // Alert the user that they are wrong
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = getRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  };

  useEffect(() => {
    if (currentGuess === userNumber) {
      Alert.alert("Congratulations!", "You guessed the number!", [
        { text: "Start Over", style: "cancel" },
      ]);
    }
  }, [currentGuess]);
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>

      <View style={styles.controlsContainer}>
        <Text style={styles.controlTitle}>Higher or Lower?</Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
              +
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              -
            </PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  controlsContainer: {
    alignItems: "center",
    backgroundColor: colors.primary500,
    padding: 16,
    borderRadius: 10,
    gap: 16,
  },
  controlTitle: {
    color: colors.secondary500,
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonsContainer: {
    width: "100%",
  },
  buttonContainer: {},
});
