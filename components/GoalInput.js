import { Button, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";

export default function GoalInput({ onAddGoal }) {
  const [goalText, setGoalText] = useState("");

  const goalInputHandler = enteredText => {
    setGoalText(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(goalText);
    setGoalText("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} placeholder="Your goal" onChangeText={goalInputHandler} value={goalText} />
      <Button title="ADD GOAL" onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8
  }
});
