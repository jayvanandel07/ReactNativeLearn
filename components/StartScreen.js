import { Text, TextInput, View } from "react-native";
import PrimaryButton from "./Buttons/PrimaryButton";

const StartScreen = () => {
  return (
    <View>
      <Text>
        <Text>Guess</Text> The Number
      </Text>
      <TextInput
        placeholder="Enter the Number to guess!"
        keyboardType="numeric"
      />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

export default StartScreen;
