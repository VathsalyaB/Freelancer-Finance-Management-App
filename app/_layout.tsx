import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { useEffect, useState } from "react";
import { Slot, useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import * as SplashScreen from 'expo-splash-screen';
import { View, ActivityIndicator } from "react-native";

import { useColorScheme } from '@/hooks/useColorScheme';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { SavingsProvider } from "../contexts/SavingsContext";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  console.log("TEST 123");
  // useEffect(() => {
  //   // if (loaded) {
  SplashScreen.hideAsync();
  //   // }
  // }, [loaded]);

  // if (!loaded) {
  //   return null;
  // }

  return (
    <SavingsProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          {/* <Stack.Screen name="plan-savings" options={{ title: "Plan Savings" }} /> */}
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </SavingsProvider>
  );
}
