import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import SavingsGoalForm from "../components/SavingsGoalForm";
import { useSavings } from "../../contexts/SavingsContext";

export default function PlanSavings() {
  const { goals } = useSavings();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Plan Your Savings</Text>
      <SavingsGoalForm onGoalAdded={() => {}} />
      
      <Text style={styles.subHeader}>Your Savings Goals</Text>
      {goals.length === 0 ? (
        <Text style={styles.noGoals}>No goals yet! Start planning.</Text>
      ) : (
        <FlatList
          data={goals}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.goalItem}>
              <Text style={styles.goalTitle}>{item.title}</Text>
              <Text>Target: ${item.targetAmount}</Text>
              <Text>Saved: ${item.savedAmount}</Text>
              <Text>Deadline: {item.deadline}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  subHeader: { fontSize: 18, fontWeight: "bold", marginTop: 20 },
  noGoals: { textAlign: "center", marginTop: 10, fontSize: 16 },
  goalItem: { padding: 10, backgroundColor: "#f1f1f1", borderRadius: 8, marginVertical: 5 },
  goalTitle: { fontSize: 16, fontWeight: "bold" },
});
