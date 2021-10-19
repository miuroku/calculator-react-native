import React, { useEffect, useRef } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";


export default function ResultScrollView ({ result } 
    : {result: string}) {

    // Defining Ref to scrollView for getting it functionality later.
    const resultExpressionScrollView = useRef<ScrollView>(null);        
    
    useEffect(() => {
        resultExpressionScrollView.current?.scrollToEnd({animated: false});
    }, [result]);

    return (
        <ScrollView
                horizontal={true}
                style={styles.outerExpressionScrollStyle}
                contentContainerStyle={styles.innerExpressionScrollStyle}
                ref={resultExpressionScrollView}                
            >                
                <Text style={styles.contentinsideExpressionScrollStyle}>{result}</Text>                
        </ScrollView> 
    );
}

const styles = StyleSheet.create({
    outerExpressionScrollStyle: {
        flex: 1,
        minWidth: '100%',
    },
    innerExpressionScrollStyle: {
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    contentinsideExpressionScrollStyle: {        
        fontSize: 47,
        color: '#828282',        
        fontFamily: "monospace",     
        marginLeft: 70,
        marginBottom: 10,   
    }
});