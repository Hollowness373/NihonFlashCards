import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity} from "react-native";
import hiragana from "@/assets/(characters)/hiragana/Hiragana.json";
import katakana from "@/assets/(characters)/katakana/Katakana.json"
import { useRouter, useLocalSearchParams } from "expo-router";

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
            console.log("CHeck last btn?")
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
        router.push("/Study")
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
            <TouchableOpacity onPress={onHold} style={styles.cards}>
                <Text style={styles.countIndicator}>{count + 1}/{chrs.length}</Text>
                <Text style={styles.chrStyle}>{reveal ? chrs[count].romaji : chrs[count].chr}</Text>
            </TouchableOpacity>
            <View style={styles.footerContainer}>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <TouchableOpacity onPress={onReview} style={styles.buttons}>
                        <Text style={styles.btnText}>Review</Text>
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
        height: 80,
        width: "40%",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#0a7ea4'
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

    }
})

export default FlashCards;