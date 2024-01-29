import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";

export default function GoalInput({ onAddGoal, visible, onCancel }) {
  const [goalText, setGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setGoalText(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(goalText);
    setGoalText("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require("../assets/images/goal.png")} style={styles.image} />
        <TextInput style={styles.textInput} placeholder="Your goal" onChangeText={goalInputHandler} value={goalText} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" onPress={onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="ADD GOAL" onPress={addGoalHandler} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16
  },
  button: {
    width: 100,
    marginHorizontal: 8
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  }
});
