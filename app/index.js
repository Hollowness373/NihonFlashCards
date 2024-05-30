import { Text, View, StyleSheet } from "react-native";
import FlashCards from "./(test)/FlashCards"

export default function Index() {
  return (
    <View style={styles.container}>
      <FlashCards />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
})
