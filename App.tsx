import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useMemo, useRef } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Display from './src/Display';
import Keyboard from './src/Keyboard/Keyboard';


export interface mainState {
    currentValue: any,
    setCurrentValue: (value: any) => void,
    previousValue: any,
    setPreviousValue: (value: any) => void,
    operator: any,
    setOperator: (value: any) => void,
    previousResult: any,
    setPreviousResult: (value: any) => void,
    wholeExpression: string,
    setWholeExpression: (value: string) => void,
};


export default function App() {

    // States for interacting with calculator data.
    const [currentValue, setCurrentValue] = useState("0");
    const [operator, setOperator] = useState(null);
    const [previousValue, setPreviousValue] = useState(null);
    const [wholeExpression, setWholeExpression] = useState("");
    const [previousResult, setPreviousResult] = useState("");
    
    // Unit all states in one object.
    const infoState: mainState = {
        currentValue,
        setCurrentValue,
        previousValue,
        setPreviousValue,
        operator,
        setOperator,
        previousResult,
        setPreviousResult,
        wholeExpression,
        setWholeExpression,
    };
    
    const infoState_ref = useRef<mainState>(infoState);

    useMemo(() => {
        infoState_ref.current = {
        currentValue,
        setCurrentValue,
        previousValue,
        setPreviousValue,
        operator,
        setOperator,
        previousResult,
        setPreviousResult,
        wholeExpression,
        setWholeExpression,
        }
    },[currentValue, previousResult, previousValue, operator, wholeExpression]);

    return (
        <View style={styles.mainBody}>
            <StatusBar
                animated={true}
                backgroundColor="#d0bfff"    
                hidden={false} />

            <Display wholeExpression={wholeExpression} />            
                                    
            <Keyboard state_ref={infoState_ref} />

        </View>
    );
}

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,    
    backgroundColor: '#fff',    
  },  
});
