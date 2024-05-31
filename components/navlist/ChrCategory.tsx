import { Text, StyleSheet, TouchableOpacity, Dimensions, } from 'react-native'
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

const { height, width } = Dimensions.get("window")

interface CategoryProps {
    categoryName: string;
    disable: boolean;
  }

const ChrCategory: React.FC<CategoryProps> = (props) => {

  
  const router = useRouter();

  const routeFlashCards = (props: string) => {
    //router.push(`/FlashCards?categoryName=${props}`)
    router.push({pathname: "/FlashCards", params: { categoryName: props}})
  }

  return (
    <TouchableOpacity onPress={() => routeFlashCards(props.categoryName)}  disabled={props.disable} style={[styles.container, {backgroundColor: props.disable ? "#262a38": "#2F3548",}]}>
      <Text style={[styles.txtCategory, {color: props.disable ? "gray" : "#FFF"}]}>{props.categoryName}</Text>
      <Ionicons size={28} name='chevron-forward-outline' color={props.disable ? "gray" : "#FFF"} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        height: height/12,
        width: "100%",
        padding: 20,
        justifyContent: "space-between",
        borderRadius: 10,
        flexDirection: "row",
        marginTop: 30
    },
    txtCategory: {
        fontSize: 20,
        letterSpacing: 1,
        color: "#FFF"
    }
})

export default ChrCategory;