import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function GoalItem({ text, onDeleteItem, id }) {
  return (
    <Pressable onPress={onDeleteItem.bind(this, id)}>
      <View style={styles.goalItemContainer}>
        <Text style={styles.goalItemText}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItemContainer: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc"
  },
  goalItemText: {
    color: "white"
  }
});
