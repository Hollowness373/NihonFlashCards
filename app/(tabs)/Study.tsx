import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ChrCategory from '@/components/navlist/ChrCategory'



const Study = () => {
  return (
    <View style={styles.container}>
      <ChrCategory categoryName='Hiragana' />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#1A1C29"
        //backgroundColor: '#151718',
    }
})

export default Study;


