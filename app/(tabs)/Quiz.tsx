import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import QuizCategory from '@/components/navlist/quizCategory';


export default function Quiz() {
  return (
    <View style={styles.container}>
        <QuizCategory categoryName='Quiz 1' disable={false} />
        <QuizCategory categoryName='Quiz 2' disable={false} />
        <QuizCategory categoryName='Quiz 3' disable={true} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#222831"
}
})