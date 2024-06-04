import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity} from "react-native";
import hiragana from "@/assets/(characters)/hiragana/Hiragana.json";
import katakana from "@/assets/(characters)/katakana/Katakana.json"
import { useRouter, useLocalSearchParams } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

const { height, width } = Dimensions.get("window");

const FlashCards = () => {

    const [ count, setCount] = useState(0)
    const [ chrs, setChrs ] = useState([{chr: "", romaji: ""}])
    const [ reveal, setReveal ] = useState(false)
    const [ continueBTN, revContinueBTN ] = useState(false)

    const router = useRouter();
    const { categoryName } = useLocalSearchParams<{categoryName: string}>();
    
    const onReview = () => {
        setCount(0)
        revContinueBTN(false)
    }

    const onNext = () => {
        var newCount = count + 1;
        setReveal(false)
        if (chrs.length <= newCount) {
            return
        } else if (chrs.length-1 <= newCount) {
            revContinueBTN(true)
        }
        setCount(newCount)
    }

    const onHold = () => {
        setReveal(!reveal)
    }

    const onContinue = () => {
        router.dismissAll()
    }

    const onBack = () => {
        router.back()
    }

    useEffect(() => {
        if (categoryName == "Hiragana") {
            const newArr = hiragana.sort(() => Math.random() - 0.5)
            setChrs(newArr)
        } else if (categoryName == "Katakana") {
            const newArr = katakana.sort(() => Math.random() - 0.5)
            setChrs(newArr)
        } else {
            console.log(categoryName)
        }
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.headerStyle}>
                <TouchableOpacity onPress={onBack} style={styles.backBTN}> 
                    <Ionicons size={30} name='arrow-back-outline' color={"#EEE"} />
                </TouchableOpacity>
                <Text style={styles.headerTxt}>{categoryName}</Text>
            </View>
            <TouchableOpacity onPress={onHold} style={styles.cards}>
                <Text style={styles.countIndicator}>{count + 1}/{chrs.length}</Text>
                <Text style={ reveal ? styles.romajiStyle : styles.chrStyle}>{reveal ? chrs[count].romaji : chrs[count].chr}</Text>
            </TouchableOpacity>
            <View style={styles.footerContainer}>
                <Text style={styles.txtTip}>Tap the card to show the Romaji</Text>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity onPress={onReview} style={styles.buttons}>
                        <Text style={styles.btnText}>Reset</Text>
                    </TouchableOpacity>
                    {continueBTN ? 
                        <TouchableOpacity onPress={onContinue} style={[styles.buttons, {backgroundColor: "#58CC02"}]}>
                            <Text style={[styles.btnText, {fontWeight: "bold"}]}>Continue</Text>
                        </TouchableOpacity>
                    :
                        <TouchableOpacity onPress={onNext} style={styles.buttons}>
                            <Text style={styles.btnText}>Next</Text>
                        </TouchableOpacity>
                    }
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
        backgroundColor: '#222831',
    },
    headerStyle: {
        height: height / 12,
        width: width,
        backgroundColor: "#393E46",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 5,
        paddingRight: 5
    },
    headerTxt: {
        fontSize: 20,
        marginLeft: 10,
        color: "#EEE"
    },
    cards: {
        height: height/2.3,
        width: "100%",
        borderRadius: 20,
        marginTop: height/12,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#00ADB5'
    },
    chrStyle: {
        color: "#FFF",
        fontSize: 230,
    },
    romajiStyle: {
        color: "#FFF",
        fontSize: 150,
    },
    footerContainer: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        paddingTop: 20,
    },
    buttonsContainer: {
        flex: 1,
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center",
        width: "100%"
    },
    buttons: {
        height: 60,
        width: "40%",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#00ADB5'
    },
    btnText: {
        color: "#FFF",
        fontSize: 20,
        letterSpacing: 1
    },
    countIndicator: {
        fontSize: 18,
        color: "#FFF",
        position: "absolute",
        top: 20,
        right: 20
    },
    backBTN: {
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    txtTip: {
        color: "#EEE"
    }
})

export default FlashCards;