import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet, Button } from "react-native";
import ExpensesGraph from "../components/ExpensesGraph";

const HomeScreen = () => {
  const [calculatedTax, setCalculatedTax] = useState<number | null>(null);
  const hardcodedGeoLocation = "Bangalore, India"; // Hardcoded Indian location

  // Function to calculate tax (example: 10% of total income)
  const handleTaxCalculation = () => {
    const totalIncome = 25000 + 18000 + 12000; // Sum of all client incomes
    const taxRate = 0.1; // 10% tax rate
    const tax = totalIncome * taxRate;
    setCalculatedTax(tax);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.userId}>User ID: 12345</Text>
      </View>

      {/* Client Income Table */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Client Income</Text>
        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={styles.cell}>Client</Text>
            <Text style={styles.cell}>Income</Text>
            <Text style={styles.cell}>Status</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.cell}>Client A</Text>
            <Text style={styles.cell}>₹25,000</Text>
            <Text style={[styles.cell, { color: "green" }]}>Paid</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.cell}>Client B</Text>
            <Text style={styles.cell}>₹18,000</Text>
            <Text style={[styles.cell, { color: "green" }]}>Paid</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.cell}>Client C</Text>
            <Text style={styles.cell}>₹12,000</Text>
            <Text style={[styles.cell, { color: "red" }]}>Overdue</Text>
          </View>
        </View>
      </View>

      {/* Expenses Graph */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Expenses Overview</Text>
        <ExpensesGraph />
      </View>

      {/* Tax Calculation */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tax Calculation</Text>
        <Button title="Calculate Tax" onPress={handleTaxCalculation} />
        {calculatedTax !== null && (
          <View style={styles.taxResult}>
            <Text style={styles.resultText}>Calculated Tax: ₹{calculatedTax.toFixed(2)}</Text>
            <Text style={styles.resultText}>Based on Location: {hardcodedGeoLocation}</Text> {/* Updated to Indian location */}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  userId: {
    fontSize: 16,
    color: "gray",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  table: {
    borderWidth: 1,
    borderColor: "#ccc",
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    paddingVertical: 8,
  },
  cell: {
    flex: 1,
    textAlign: "center",
  },
  taxResult: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  resultText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomeScreen;
