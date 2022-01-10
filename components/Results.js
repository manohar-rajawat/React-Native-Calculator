import React from "react";
import { View, Text, StyleSheet } from 'react-native'

const Result = ({ result }) => (
    <View style={styles.results}>
        <Text style={styles.resultText}>{result}</Text>
    </View>
)

const styles = StyleSheet.create({
    results: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    resultText: {
        color: '#FFF',
        fontSize: 65,
        textAlign: 'right',
        marginRight: 20,
    },
})

export default Result