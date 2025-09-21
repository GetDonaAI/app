import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';

import {
  Handjet_400Regular,
  Handjet_500Medium,
  Handjet_600SemiBold,
  Handjet_700Bold,
  useFonts,
} from '@expo-google-fonts/handjet';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { loadCustomFonts } from '@/src/utils/fonts';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: 'index',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    Handjet_400Regular,
    Handjet_500Medium,
    Handjet_600SemiBold,
    Handjet_700Bold,
  });
  const [customFontsLoaded, setCustomFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await loadCustomFonts();
        setCustomFontsLoaded(true);
      } catch (error) {
        console.error('Error loading custom fonts:', error);
        setCustomFontsLoaded(true); // Continue even if fonts fail to load
      }
    };

    loadFonts();
  }, []);

  useEffect(() => {
    if (fontsLoaded && customFontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, customFontsLoaded]);

  if (!fontsLoaded || !customFontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
