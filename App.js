import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const startAddGoalHandler = () => {
    setIsOpen(true);
  };

  const endAddGoalHandler = () => {
    setIsOpen(false);
  };

  const addGoalHandler = (enteredGoalText) => {
    setGoals((prevState) => [...prevState, { id: Math.random().toString(), text: enteredGoalText }]);
    endAddGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    setGoals((prevState) => {
      return prevState.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="#5e0acc" onPress={startAddGoalHandler} />
        <GoalInput onAddGoal={addGoalHandler} visible={isOpen} onCancel={endAddGoalHandler} />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandler} id={itemData.item.id} />;
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5
  }
});
