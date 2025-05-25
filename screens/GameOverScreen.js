import { View, Text, StyleSheet } from "react-native";
import React from "react";
import PrimaryButton from "../components/UI/Buttons/PrimaryButton";
import colors from "../constants/colors";
import Card from "../components/UI/Card";

const GameOverScreen = ({ onSetGameOver }) => {
  return (
    <View style={styles.screen}>
      <Card style={styles.gameOverContainer}>
        <Text style={styles.gameOverText}>Game Over !</Text>
        <View>
          <PrimaryButton onPress={() => onSetGameOver(false)}>
            Guess Again
          </PrimaryButton>
        </View>
      </Card>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  gameOverContainer: {
    width: "100%",
    padding: 36,
  },
  gameOverText: {
    color: colors.secondary500,
    fontSize: 24,
    fontWeight: "bold",
  },
});
