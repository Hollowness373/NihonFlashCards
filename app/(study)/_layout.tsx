import { Stack } from "expo-router";

export default function StudyLayout() {
  return (
    <Stack screenOptions={{ headerShown: true, animation: "slide_from_right", headerStyle: {backgroundColor: "#393E46"}}}>
      <Stack.Screen name="HiraganaCategory" options={{title: "Hiragana", headerTintColor: "#EEE"}}/>
      <Stack.Screen name="KatakanaCategory" options={{title: "Katakana", headerTintColor: "#EEE"}}/>
    </Stack>
  );
}
