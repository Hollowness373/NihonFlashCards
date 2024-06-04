import { Text, StyleSheet, TouchableOpacity, Dimensions, } from 'react-native'
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

const { height, width } = Dimensions.get("window")

interface CategoryProps {
    categoryName: string;
    disable: boolean;
    setQuiz: Object
  }

const QuizCategory: React.FC<CategoryProps> = (props) => {

  
  const router = useRouter();

  const routeFlashCards = (props: string) => {
    router.push({pathname: "/QuizHandler", params: { categoryName: props }})
  }

  return (
    <TouchableOpacity onPress={() => routeFlashCards(props.categoryName)}  disabled={props.disable} style={[styles.container, {backgroundColor: props.disable ? "#262a38": "#00ADB5",}]}>
      <Text style={[styles.txtCategory, {color: props.disable ? "gray" : "#EEE"}]}>{props.categoryName}</Text>
      <Ionicons size={28} name='chevron-forward-outline' color={props.disable ? "gray" : "#EEE"} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        height: height/12,
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 10,
        flexDirection: "row",
        marginTop: 30,
        paddingLeft: 20,
        paddingRight: 10
    },
    txtCategory: {
        fontSize: 20,
        letterSpacing: 1,
    }
})

export default QuizCategory;