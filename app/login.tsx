import { View, Button } from "react-native";
import { useAuth } from "../hooks/useAuth";
import * as SecureStore from "expo-secure-store";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const { user, promptAsync } = useAuth();
  const router = useRouter();
  console.log("In Login Screen");

  const handleLogin = async () => {
    console.log("In Login handleLogin");
    // const result = await promptAsync();
    // if (result?.type === "success") {
    //   await SecureStore.setItemAsync("user", JSON.stringify(result.authentication));
      router.replace("/dashboard/DashboardScreen"); // Redirect after login
    // }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Sign in with Google" onPress={handleLogin} />
    </View>
  );
}
