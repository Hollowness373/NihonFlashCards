import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({onChangeText, value, placeholder, inputMode, borderColor}) => {
  return (
    <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        inputMode={inputMode}
        placeholderTextColor={"gray"}
        style={[styles.container, {borderColor: borderColor}]}
    />
  )
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 20,
        color: "#EEE"
    }
})

export default CustomInput