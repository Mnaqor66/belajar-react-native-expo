import * as SplashScreen from 'expo-splash-screen';
import { Stack } from "expo-router";

SplashScreen.preventAutoHideAsync()
setTimeout(SplashScreen.hideAsync, 5000)

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
      <Stack.Screen name="+not-found"/>
    </Stack>
  );
}
