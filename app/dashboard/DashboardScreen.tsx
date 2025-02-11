import { View, Text, Image, Button } from "react-native";
import { useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import { useRouter } from "expo-router";

export default function DashboardScreen() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const storedUser = await SecureStore.getItemAsync("user");
      if (storedUser) setUser(JSON.parse(storedUser));
    };
    loadUser();
  }, []);

  const handleLogout = async () => {
    await SecureStore.deleteItemAsync("user");
    router.replace("/(auth)/LoginScreen");
  };

  if (!user) return <Text>Loading...</Text>;

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Image source={{ uri: user.picture }} className="w-24 h-24 rounded-full mb-4" />
      <Text className="text-lg font-semibold">Welcome, {user.name}!</Text>
      <Text>Email: {user.email}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
