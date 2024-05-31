import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import ChrCategory from '@/components/navlist/ChrCategory';


export default function Quiz() {
  return (
    <View style={styles.container}>
        <ChrCategory categoryName='Quiz 1' disable={true} />
        <ChrCategory categoryName='Quiz 2' disable={true} />
        <ChrCategory categoryName='Quiz 3' disable={true} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#1A1C29"
    //backgroundColor: '#151718',
}
})