import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Row from './Row'
import Button from './Button'

const Calculator = ({ pressButton }) => (
    <View style={styles.calculatorWrapper}>
        <Row>
            <Button text="C" theme="secondary" onPress={() => pressButton("clear")} />
            <Button text="+/-" theme="secondary" onPress={() => pressButton("posneg")} />
            <Button text="%" theme="secondary" onPress={() => pressButton("percentage")} />
            <Button text="/" theme="accent" onPress={() => pressButton("operator", "/")} />
        </Row>
        <Row>
            <Button text="7" onPress={() => pressButton("number", 7)} />
            <Button text="8" onPress={() => pressButton("number", 8)} />
            <Button text="9" onPress={() => pressButton("number", 9)} />
            <Button text="×" theme="accent" onPress={() => pressButton("operator", "*")} />
        </Row>
        <Row>
            <Button text="4" onPress={() => pressButton("number", 4)} />
            <Button text="5" onPress={() => pressButton("number", 5)} />
            <Button text="6" onPress={() => pressButton("number", 6)} />
            <Button text="−" theme="accent" onPress={() => pressButton("operator", "-")} />
        </Row>
        <Row>
            <Button text="1" onPress={() => pressButton("number", 1)} />
            <Button text="2" onPress={() => pressButton("number", 2)} />
            <Button text="3" onPress={() => pressButton("number", 3)} />
            <Button text="+" theme="accent" onPress={() => pressButton("operator", "+")} />
        </Row>
        <Row>
            <Button size="Double" text="0" onPress={() => pressButton("number", 0)} />
            <Button text="." onPress={() => pressButton("number", ".")} />
            <Button text="=" theme="accent" onPress={() => pressButton("equal")} />
        </Row>
    </View>
)

const styles = StyleSheet.create({
    calculatorWrapper: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Calculator
