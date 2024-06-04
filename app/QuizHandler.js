import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, TextInput} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomInput from "@/components/textinput/CustomInput";
import Quiz1 from "@/assets/(quiz)/Hiragana/quiz1.json"

const { height, width } = Dimensions.get("window");


const QuizHandler = () => {


    const [ count, setCount] = useState(0);
    const [ chrs, setChrs ] = useState([{chr: "", romaji: "", english: ""}]);
    const [ reveal, setReveal ] = useState(false);
    const [ timer , setTimer ] = useState(10)
    const [ answerStatus, setAnswerStatus ] = useState(false);
    const [ input, setInput ] = useState("")
    const [ borderColor, setBorderColor ] = useState("#EEE")

    const router = useRouter();
    const { categoryName } = useLocalSearchParams();
    
    const runTimer = () => {
        // Runs the timer countdown
        const interval = setInterval(() => {
            setTimer(lastTimerCount => {
                if (lastTimerCount === 0) {
                    clearInterval(interval);
                } else {
                    if (lastTimerCount <= 1) clearInterval(interval);
                    return lastTimerCount - 1;
                }
            });
        }, 1000); // Each count lasts for a second

        // Cleanup the interval on complete
        return () => clearInterval(interval);
    }

    const resetStatus = () => {
        //Resets all components and states
        setBorderColor("#EEE");
        setInput("");
        setAnswerStatus(false);
        setReveal(false);
        setTimer(10);
        runTimer();
    }

    const onSubmit = () => {
        let checkAnswer = input.toLowerCase();
        if ( checkAnswer == chrs[count].romaji) {
            setBorderColor("#58CC02");
            setAnswerStatus(true);
            setReveal(true);
        } else {
            setBorderColor("#B74542");
            setAnswerStatus(true);
            setReveal(true);
        }
    }

    const onBtnSubmit = () => {
        setTimer(0)
    }

    const onContinue = () => {
        router.dismissAll()
    }

    const onBack = () => {
        router.back()
    }

    const countHandler = () => {
        //if array length is greater than or equal to current count, incrementing count by 1
        let checkCount = count + 1
        if ( chrs.length == checkCount) {
            onContinue();
        } else {
            setCount(count + 1);
        }
    }

    useEffect(() => {
        //Checks for timer count
        if (timer == 0) {
            onSubmit();
            setTimeout(() => {
                resetStatus();
                countHandler();
            }, 3000);
        }
    }, [timer]);

    useEffect(() => {
        // Initialize
        runTimer(); // Timer
        if (categoryName == "Quiz 1") {
            //Randomize the arrangements of Objects in the Array
            const newArr = Quiz1.sort(() => Math.random() - 0.5) 
            setChrs(newArr)
        } else {
            console.log(categoryName)
        }
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.headerStyle}>
                <TouchableOpacity onPress={onBack} style={styles.backBTN}> 
                    <Ionicons size={30} name='arrow-back-outline' color={"#EEE"} />
                </TouchableOpacity>
                <Text style={styles.headerTxt}>{categoryName}</Text>
            </View>
            <View  style={styles.cards}>
                <Text style={styles.countIndicator}>Q{count + 1}</Text>
                <Text style={styles.timerIndicator}>{timer}</Text>
                <Text style={ reveal ? styles.romajiStyle : styles.chrStyle}>{reveal ? chrs[count].romaji : chrs[count].chr}</Text>
                {reveal && <Text style={styles.engAnswer}>{chrs[count].english}</Text>}
            </View>
            <View style={styles.footerContainer}>
                <Text style={styles.txtTip}>Provide your answer in the text box below</Text>
                <View style={styles.answerContainer}>
                    <CustomInput
                        value={input}
                        placeholder={"Type your answer in Romaji"}
                        onChangeText={setInput}
                        borderColor={borderColor}
                    />
                    <TouchableOpacity onPress={onBtnSubmit} disabled={answerStatus} style={[styles.buttonStyle, {backgroundColor: answerStatus ? "#262a38" : "#00ADB5"}]}>
                        <Text style={[styles.btnText, {color: answerStatus ? "gray" : "#EEE"}]}>Submit</Text>
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
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#00ADB5'
    },
    chrStyle: {
        color: "#EEE",
        fontSize: 80,
    },
    romajiStyle: {
        color: "#EEE",
        fontSize: 80,
    },
    engAnswer: {
        color: "#EEE",
        fontSize: 20
    },
    footerContainer: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        paddingTop: 20,
    },
    answerContainer: {
        flex: 1,
        paddingTop: 20,
        alignItems: "center",
        width: "100%",
    },
    buttonStyle: {
        height: 50,
        width: "100%",
        borderRadius: 10,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center"
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
        left: 20
    },
    timerIndicator: {
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


export default QuizHandler;