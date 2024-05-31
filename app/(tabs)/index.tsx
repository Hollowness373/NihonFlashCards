import { View, StyleSheet } from 'react-native'
import React from 'react'
import ChrCategory from '@/components/navlist/ChrCategory'



export default function Index() {
  return (
    <View style={styles.container}>
      <ChrCategory categoryName='Hiragana' disable={false} />
      <ChrCategory categoryName='Katakana' disable={false} />
      <ChrCategory categoryName='Kanji' disable={true} />
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