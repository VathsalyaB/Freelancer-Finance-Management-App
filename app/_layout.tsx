import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { Stack } from "expo-router";

export default function Layout() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const user = await SecureStore.getItemAsync("user");
      setIsAuthenticated(!!user);
    };
    checkAuth();
  }, []);

  return (
    <Stack>
      {!isAuthenticated ? (
        <Stack.Screen name="(auth)/LoginScreen" options={{ headerShown: false }} />
      ) : (
        <Stack.Screen name="(dashboard)/DashboardScreen" options={{ title: "Dashboard" }} />
      )}
    </Stack>
  );
}
