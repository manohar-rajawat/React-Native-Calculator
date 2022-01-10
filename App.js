import React, { useState } from 'react'
import { Text, View, StyleSheet, StatusBar, SafeAreaView } from 'react-native'
import Calculator from './components/Calculator'
import Result from './components/Results'

let lengthToNine = number => { return number.toString().length > 9 ? Number(number.toString().slice(0, 9)) : number }

export default function App() {
  const [currVal, setCurrVal] = useState("0");
  const [operator, setOperator] = useState(null);
  const [prevVal, setPrevVal] = useState(null);
  handleTap = (type, value) => {
    if (type === "number") {
      if (currVal != 0)
        setCurrVal(lengthToNine(`${currVal}${value}`));
      else
        setCurrVal(lengthToNine(`${value}`));
    }

    if (type === "operator") {
      setOperator(value);
      setPrevVal(currVal);
      setCurrVal("0");
    }

    if (type === "clear") {
      setCurrVal("0");
      setOperator(null);
      setPrevVal(null);
    }

    if (type === "posneg") {
      setCurrVal(`${parseFloat(currVal) * -1}`);
    }

    if (type === "percentage") {
      setCurrVal(`${parseFloat(currVal) * 0.01}`);
    }

    if (type === "equal") {
      const current = parseFloat(currVal);
      const previous = parseFloat(prevVal);

      if (operator === "+") {
        setCurrVal(lengthToNine(previous + current));
        setOperator(null);
        setPrevVal(null);
      }

      if (operator === "/") {
        setCurrVal(lengthToNine(previous / current));
        setOperator(null);
        setPrevVal(null);
      }

      if (operator === "-") {
        setCurrVal(lengthToNine(previous - current));
        setOperator(null);
        setPrevVal(null);
      }

      if (operator === "*") {
        setCurrVal(lengthToNine(previous * current));
        setOperator(null);
        setPrevVal(null);
      }
    }

  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle="light-content"
        showHideTransition="slide" />
      <Result result={currVal} />
      <Calculator pressButton={handleTap} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

})