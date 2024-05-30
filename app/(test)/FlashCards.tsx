import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity} from "react-native";
import hiragana from "@/assets/(characters)/hiragana/Hiragana.json"

const { height, width } = Dimensions.get("window");

const FlashCards = () => {

    const [ count, setCount] = useState(0)
    const [ chrs, setChrs ] = useState(hiragana)
    const [ reveal, setReveal ] = useState(false)
    
    const onReview = () => {
        setCount(0)
        console.log(chrs.length)
        
    }
    const onNext = () => {
        var newCount = count + 1;
        setReveal(false)
        if (chrs.length <= newCount) {
            return
        }
        setCount(newCount)
    }
    const onHold = () => {
        setReveal(!reveal)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onHold} style={styles.cards}>
                <Text style={styles.chrStyle}>{reveal ? chrs[count].romaji : chrs[count].chr}</Text>
            </TouchableOpacity>
            <View style={styles.footerContainer}>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <TouchableOpacity onPress={onReview} style={styles.buttons}>
                        <Text>Review</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onNext} style={styles.buttons}>
                        <Text>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 20,
        backgroundColor: '#151718',
    },
    cards: {
        height: height/2.3,
        width: "100%",
        borderRadius: 20,
        marginTop: height/12,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#0a7ea4'
    },
    chrStyle: {
        color: "#FFF",
        fontSize: 230,
    },
    footerContainer: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        paddingTop: 20,
    },
    buttons: {
        height: 50,
        width: "30%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    }
})

export default FlashCards;