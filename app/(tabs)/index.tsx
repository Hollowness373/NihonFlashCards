import { View, StyleSheet } from 'react-native'
import React from 'react'
import ChrCategory from '@/components/navlist/ChrCategory'
import { useRouter } from 'expo-router';


export default function Index() {


  const router = useRouter();

  const onBtnCategory = (path: String) => {
    switch (path) {
      case "Hiragana":
        router.push({pathname: "/HiraganaCategory"});
        break
      case "Katakana":
        router.push("/KatakanaCategory");
        break
    }
  }

  return (
    <View style={styles.container}>
      <ChrCategory chrBTN={onBtnCategory}  categoryName='Hiragana' disable={false} />
      <ChrCategory chrBTN={onBtnCategory}  categoryName='Katakana' disable={false} />
      <ChrCategory chrBTN={onBtnCategory}  categoryName='Kanji' disable={true} />
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