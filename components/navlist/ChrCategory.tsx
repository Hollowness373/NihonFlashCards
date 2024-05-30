import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'

const { height, width } = Dimensions.get("window")

interface CategoryProps {
    categoryName: string;
  }

const ChrCategory: React.FC<CategoryProps> = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.txtCategory}>{props.categoryName}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        height: height/12,
        width: "100%",
        padding: 20,
        justifyContent: "space-between",
        backgroundColor: "#2F3548",
        borderRadius: 10,
        flexDirection: "row"
    },
    txtCategory: {
        fontSize: 20,
        letterSpacing: 1,
        color: "#FFF"
    }
})

export default ChrCategory