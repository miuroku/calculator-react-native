import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Keyboard, TouchableWithoutFeedbackBase, TouchableWithoutFeedback } from 'react-native';

import WholeExpressionScrollView from './DisplayParts/WholeExpressionScrollView';
import ResultScrollView from './DisplayParts/ResultScrollView';
import { mainState } from '../../App';


export default function Display ({ wholeExpression, result="", isPortrait }
    : {
        wholeExpression: string,
        result?: string, 
        isPortrait: ()=>boolean
    } ) {        
            

    return (  
        <View style={styles.body}>                               

            <WholeExpressionScrollView wholeExpression={wholeExpression}/>

            <ResultScrollView result={result}/>

            {/* <TextInput style={styles.contentinsideScrollStyle} value={wholeExpression}/> */}

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