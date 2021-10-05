import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { mainState } from '../App';

export default function Display ({ wholeExpression }
    : {wholeExpression: string} ) {
        
    const [text, setText] = useState('');
    
    /**const scrollToEnd = (obj) => {
        const scrollResponder = this.ref
    };
    **/

    //const state = state_ref.current;


    /* useEffect(() => {
        console.log(`${state?.wholeExpression}`);
    }, [state?.wholeExpression]); */

    return (  
        <View style={styles.body}>       

            <ScrollView
                horizontal={true}
                style={styles.outerScrollStyle}
                contentContainerStyle={styles.innerScrollStyle}>

                <Text style={styles.contentinsideScrollStyle}>{wholeExpression}</Text>
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
        fontSize: 30,
        color: 'black',
    }
});