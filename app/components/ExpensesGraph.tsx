import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BarChart } from "react-native-chart-kit";

const ExpensesGraph = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [400, 300, 500, 600, 450, 550], // Business expenses
        color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`, // Blue for business expenses
      },
      {
        data: [200, 250, 300, 350, 270, 320], // Personal expenses
        color: (opacity = 1) => `rgba(255, 69, 58, ${opacity})`, // Red for personal expenses
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Business vs. Personal Expenses</Text>
      <BarChart
        data={data}
        width={350}
        height={250}
        yAxisLabel="$"
        yAxisSuffix="k"
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#f7f7f7",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          barPercentage: 0.7,
        }}
        style={styles.chart}
        fromZero
        showBarTops={false}
        withHorizontalLabels
        withInnerLines={false}
      />
      <View style={styles.legendContainer}>
        <View style={[styles.legendItem, { backgroundColor: "blue" }]} />
        <Text>Business Expenses</Text>
        <View style={[styles.legendItem, { backgroundColor: "red" }]} />
        <Text>Personal Expenses</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  chart: {
    borderRadius: 8,
  },
  legendContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  legendItem: {
    width: 15,
    height: 15,
    borderRadius: 3,
    marginRight: 5,
  },
});

export default ExpensesGraph;
