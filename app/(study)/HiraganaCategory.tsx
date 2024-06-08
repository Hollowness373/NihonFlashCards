import { StyleSheet, View } from 'react-native'
import React from 'react';
import { useRouter} from "expo-router";
import ChrCategory from '@/components/navlist/ChrCategory';

const HiraganaCategory = () => {

  const router = useRouter();

  const onBtnCategory = (path: string) => {
    router.push({pathname: "/FlashCards", params: {categoryName: path + "Hiragana"}});
  }

  return (
    <View style={styles.container}>
      <ChrCategory chrBTN={onBtnCategory}  categoryName='Original' disable={false} />
      <ChrCategory chrBTN={onBtnCategory}  categoryName='Dakuon' disable={false} />
      <ChrCategory chrBTN={onBtnCategory}  categoryName='Combo' disable={false} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: "center",
        backgroundColor: "#222831"
    }
});


export default HiraganaCategory;