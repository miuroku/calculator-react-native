import React, { useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Keyboard, TouchableWithoutFeedbackBase, TouchableWithoutFeedback } from 'react-native';

import WholeExpressionScrollView from './DisplayParts/WholeExpressionScrollView';
import ResultScrollView from './DisplayParts/ResultScrollView';
import { mainState } from '../../App';
import { calculate_result } from '../Logic/calculator';
import UpperButtonsPanel from './DisplayParts/UpperButtonsPanel/UpperButtonsPanel';


export default function Display ({ wholeExpression, isPortrait, useSciencificButtonsPanelInPortrait, setUseSciencificButtonsPanelInPortrait }
    : {
        wholeExpression: string,        
        isPortrait: ()=>boolean,
        useSciencificButtonsPanelInPortrait: boolean,
        setUseSciencificButtonsPanelInPortrait: (state: boolean)=>void | ((fun: (prev_state: boolean)=>boolean)=>void)
    } ) {        
        
    const [result, setResult] = useState("");

    useMemo(() => {
        const new_result = calculate_result( {wholeExpression} );
        setResult(new_result);
    }, [wholeExpression]);

    return (  
        <View style={styles.body}>                               
            <UpperButtonsPanel 
                isPortrait={isPortrait} 
                useSciencificButtonsPanelInPortrait={useSciencificButtonsPanelInPortrait} 
                setUseSciencificButtonsPanelInPortrait={setUseSciencificButtonsPanelInPortrait}/>
            <WholeExpressionScrollView wholeExpression={wholeExpression}/>
            <ResultScrollView result={result}/>            
        </View>                      
    );
}

const styles = StyleSheet.create({
    body: {
        flex:5,
        backgroundColor: '#ece5ff',                
        borderWidth:0,
        borderColor: '#794df0',                     
      },    
    resultFieldText: {                
        backgroundColor: '#cc1'
    },

    
});