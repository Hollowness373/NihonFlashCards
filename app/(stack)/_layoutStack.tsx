import { Stack } from "expo-router";

export default function StackScreens() {
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="FlashCards" />
    </Stack>
  );
}
