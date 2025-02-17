import { useEffect, useState } from "react";
import * as Google from "expo-auth-session/providers/google";
import * as AuthSession from "expo-auth-session";
import { makeRedirectUri } from "expo-auth-session";
import { Platform } from "react-native";

export function useAuth() {
  const [user, setUser] = useState(null);

  // Initialize Google Authentication
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: "637806351138-9d7u1qform6ph0p7kbdpt7n1tn8ls0sd.apps.googleusercontent.com",
    androidClientId: "637806351138-9d7u1qform6ph0p7kbdpt7n1tn8ls0sd.apps.googleusercontent.com",
    redirectUri: makeRedirectUri({
      native: "expo.io", // Replace with your app's scheme
    }),
  });

  useEffect(() => {
    if (response?.type === "success" && response.authentication) {
      const { authentication } = response;
      if (authentication) {
        fetchUserInfo(authentication.accessToken);
      }
    }
  }, [response]);

  async function fetchUserInfo(token: string) {
    try {
      const res = await fetch("https://www.googleapis.com/userinfo/v2/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const userInfo = await res.json();
      setUser(userInfo);
    } catch (error) {
      console.error("Failed to fetch user info:", error);
    }
  }

  return { user, promptAsync };
}
