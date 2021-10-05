import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Keyboard, TouchableWithoutFeedbackBase, TouchableWithoutFeedback } from 'react-native';
import { mainState } from '../App';

export default function Display ({ wholeExpression }
    : {wholeExpression: string} ) {
        
    const [text, setText] = useState('');
    
    /**const scrollToEnd = (obj) => {
        const scrollResponder = this.ref
    };
    **/

    //const state = state_ref.current;


    // Defining Ref to scrollView for getting it functionality later.
    const wholeExpressionScrollView = useRef<ScrollView>(null);
    
    useEffect(() => {
        wholeExpressionScrollView.current?.scrollToEnd({animated: false});
    }, [wholeExpression]);
    

    useEffect(() => {
        Keyboard.dismiss();
    }, []);

    return (  
        <View style={styles.body}>       

            <ScrollView
                horizontal={true}
                style={styles.outerScrollStyle}
                contentContainerStyle={styles.innerScrollStyle}
                ref={wholeExpressionScrollView}                
            >                
                <Text style={styles.contentinsideScrollStyle}>{wholeExpression}</Text>                
            </ScrollView> 
            
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

    outerScrollStyle: {
        flex: 1,
        minWidth: '100%',
    },
    innerScrollStyle: {
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    contentinsideScrollStyle: {
        flex:1,
        fontSize: 56,
        color: 'black',        
        fontFamily: "monospace",     
        marginLeft: 20,   
    }
});