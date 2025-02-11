import * as Google from "expo-auth-session/providers/google";
import * as Facebook from "expo-auth-session/providers/facebook";
import * as SecureStore from "expo-secure-store";
import { GOOGLE_CLIENT_ID, FACEBOOK_APP_ID } from "@/utils/authConfig";
import { useState } from "react";
import { useRouter } from "expo-router";

export function useAuth() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  // Google Login
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: GOOGLE_CLIENT_ID,
  });

  const handleGoogleLogin = async () => {
    const result = await promptAsync();
    if (result?.type === "success") {
      const userInfo = await fetchUserInfo(result.authentication?.accessToken);
      setUser(userInfo);
      await SecureStore.setItemAsync("user", JSON.stringify(userInfo));
      router.replace("/(dashboard)");
    }
  };

  // Facebook Login
  const [fbRequest, fbResponse, fbPromptAsync] = Facebook.useAuthRequest({
    clientId: FACEBOOK_APP_ID,
  });

  const handleFacebookLogin = async () => {
    const result = await fbPromptAsync();
    if (result?.type === "success") {
      const userInfo = await fetchUserInfo(result.authentication?.accessToken, "facebook");
      setUser(userInfo);
      await SecureStore.setItemAsync("user", JSON.stringify(userInfo));
      router.replace("/(dashboard)");
    }
  };

  const fetchUserInfo = async (token: string, provider = "google") => {
    const endpoint =
      provider === "google"
        ? "https://www.googleapis.com/userinfo/v2/me"
        : `https://graph.facebook.com/me?fields=id,name,email,picture&access_token=${token}`;

    const response = await fetch(endpoint);
    return response.json();
  };

  return { user, handleGoogleLogin, handleFacebookLogin };
}
