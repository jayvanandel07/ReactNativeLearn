import { View, Text, StyleSheet } from "react-native";
import React from "react";
import PrimaryButton from "../components/UI/Buttons/PrimaryButton";
import colors from "../constants/colors";

const GameOverScreen = ({ onSetGameOver }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.gameOverContainer}>
        <Text style={styles.gameOverText}>Game Over!</Text>
        <View>
          <PrimaryButton onPress={() => onSetGameOver(false)}>
            Guess Again
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gameOverContainer: {
    backgroundColor: colors.primary500,
    padding: 36,
    width: "80%",
    borderRadius: 10,
    alignItems: "center",
    gap: 16,
  },
  gameOverText: {
    color: colors.secondary500,
    fontSize: 24,
    fontWeight: "bold",
  },
});
