import React, { useState } from "react";
import { ScrollView, View, Text, TextInput, Button, StyleSheet } from "react-native";

const SavingsGoalScreen = () => {
  const [goal, setGoal] = useState("");
  const [saved, setSaved] = useState("");

  const remainingAmount = parseFloat(goal) - parseFloat(saved) || 0;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Plan Your Savings Goal</Text>

      <Text>Enter your savings goal:</Text>
      <TextInput style={styles.input} keyboardType="numeric" value={goal} onChangeText={setGoal} />

      <Text>Amount saved so far:</Text>
      <TextInput style={styles.input} keyboardType="numeric" value={saved} onChangeText={setSaved} />

      {remainingAmount > 0 ? (
        <Text style={styles.remaining}>You need to save ${remainingAmount.toFixed(2)} more.</Text>
      ) : (
        <Text style={styles.achieved}>Goal Achieved! 🎉</Text>
      )}

      <Button title="Update Goal" onPress={() => alert("Goal updated!")} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  remaining: {
    color: "red",
    marginBottom: 10,
  },
  achieved: {
    color: "green",
    marginBottom: 10,
  },
});

export default SavingsGoalScreen;
