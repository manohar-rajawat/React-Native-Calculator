import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

const screen = Dimensions.get("window")
const buttonWidth = screen.width / 4


export default ({ onPress, text, size, theme }) => {
    const buttonStyle = [styles.buttonWrapper];
    const textStyle = [styles.text];

    if (size === "Double") {
        buttonStyle.push(styles.doubleButtonWrapper)
    }
    if (theme === "secondary") {
        buttonStyle.push(styles.secondaryThemeWrapper)
        textStyle.push(styles.secondaryThemeText)
    } else if (theme === "accent") {
        buttonStyle.push(styles.accentThemeWrapper)
        textStyle.push(styles.accentThemeText)
    }
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>{text}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    buttonWrapper: {
        flex: 1,
        backgroundColor: '#333333',
        alignItems: "center",
        justifyContent: "center",
        height: buttonWidth - 10,
        borderRadius: buttonWidth,
        margin: 5,
    },
    text: {
        color: '#FFF',
        fontSize: 25,
    },
    doubleButtonWrapper: {
        flex: 0,
        alignItems: "flex-start",
        width: (screen.width / 2) - 10,
        paddingLeft: 40,

    },
    secondaryThemeWrapper: {
        backgroundColor: '#A6A6A6',
    },
    accentThemeWrapper: {
        backgroundColor: '#F09A36',
    },
    secondaryThemeText: {
        color: '#060606',
    },
    accentThemeText: {},
})