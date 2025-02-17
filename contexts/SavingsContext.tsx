import React, { createContext, useState, useContext } from 'react';

type SavingsGoal = {
  id: string;
  title: string;
  targetAmount: number;
  savedAmount: number;
  deadline: string;
};

type SavingsContextType = {
  goals: SavingsGoal[];
  addGoal: (goal: SavingsGoal) => void;
  updateGoal: (id: string, savedAmount: number) => void;
};

const SavingsContext = createContext<SavingsContextType | undefined>(undefined);

export const SavingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [goals, setGoals] = useState<SavingsGoal[]>([]);

  const addGoal = (goal: SavingsGoal) => {
    setGoals((prev) => [...prev, goal]);
  };

  const updateGoal = (id: string, savedAmount: number) => {
    setGoals((prev) =>
      prev.map((goal) =>
        goal.id === id ? { ...goal, savedAmount } : goal
      )
    );
  };

  return (
    <SavingsContext.Provider value={{ goals, addGoal, updateGoal }}>
      {children}
    </SavingsContext.Provider>
  );
};

export const useSavings = () => {
  const context = useContext(SavingsContext);
  if (!context) {
    throw new Error("useSavings must be used within a SavingsProvider");
  }
  return context;
};
