import { View, Text, Button, Image } from "react-native";
import { useAuth } from "@/hooks/useAuth";

export default function LoginScreen() {
  const { handleGoogleLogin, handleFacebookLogin } = useAuth();

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold mb-6">Freelancer Finance</Text>
      
      <Button title="Sign in with Google" onPress={handleGoogleLogin} />
      <View style={{ marginVertical: 10 }} />
      <Button title="Sign in with Facebook" onPress={handleFacebookLogin} />
    </View>
  );
}
