import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function GoalItem({ text, onDeleteItem, id }) {
  return (
    <View style={styles.goalItemContainer}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={onDeleteItem.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalItemText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItemContainer: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc"
  },
  goalItemText: {
    color: "white",
    padding: 8
  },
  pressedItem: {
    opacity: 0.5
  }
});
