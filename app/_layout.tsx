import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    'sora-regular': require('@/assets/fonts/Sora-Regular.ttf'),
    'sora-medium': require('@/assets/fonts/Sora-Medium.ttf'),
    'sora-semiBold': require('@/assets/fonts/Sora-SemiBold.ttf'),
    'sora-bold': require('@/assets/fonts/Sora-Bold.ttf'),
  })

  if (fontError) {
  console.error('Font load error:', fontError);
  return null;
}

if (!fontsLoaded) {
  return null; // or a loading screen
}


  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
