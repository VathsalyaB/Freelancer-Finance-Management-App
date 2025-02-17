import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useSavings } from  "@/contexts/SavingsContext";

export default function SavingsGoalForm({ onGoalAdded }: { onGoalAdded: () => void }) {
  const { addGoal } = useSavings();
  const [title, setTitle] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleAddGoal = () => {
    if (!title || !targetAmount || !deadline) return;

    addGoal({
      id: Date.now().toString(),
      title,
      targetAmount: parseFloat(targetAmount),
      savedAmount: 0,
      deadline,
    });

    setTitle("");
    setTargetAmount("");
    setDeadline("");
    onGoalAdded();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Savings Goal</Text>
      <TextInput style={styles.input} placeholder="Enter goal name" value={title} onChangeText={setTitle} />
      
      <Text style={styles.label}>Target Amount</Text>
      <TextInput style={styles.input} keyboardType="numeric" placeholder="Enter amount" value={targetAmount} onChangeText={setTargetAmount} />

      <Text style={styles.label}>Deadline</Text>
      <TextInput style={styles.input} placeholder="Enter date (YYYY-MM-DD)" value={deadline} onChangeText={setDeadline} />

      <Button title="Add Goal" onPress={handleAddGoal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: "white", borderRadius: 10, elevation: 5 },
  label: { fontSize: 16, fontWeight: "bold", marginTop: 10 },
  input: { borderWidth: 1, padding: 10, borderRadius: 5, marginTop: 5, backgroundColor: "#f9f9f9" },
});
