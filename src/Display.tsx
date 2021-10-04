import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { mainState } from '../App';

export default function Display ({ state }
    : {state: mainState} ) {
    const [text, setText] = useState('');

    /**const scrollToEnd = (obj) => {
        const scrollResponder = this.ref
    };
    **/

    return (  
        <View style={styles.body}>            
            <ScrollView
            horizontal={true}>
                <Text style={styles.inputFieldText}>{state.wholeExpression}</Text>
            </ScrollView>
            {/* <ScrollView
            horizontal={true}>
                <Text style={styles.resultFieldText}>{state.previousResult}</Text>
            </ScrollView> */}
        </View>                      
    );
}

const styles = StyleSheet.create({
    body: {
        flex:3,
        backgroundColor: '#c9b5ff',                
        borderWidth:1,
        borderColor: '#794df0',                     
      },
    inputFieldText: {        
        backgroundColor: '#ffffff'
    },
    resultFieldText: {                
        backgroundColor: '#cc1'
    },
});