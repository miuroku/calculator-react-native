import React, { useEffect, useRef } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";



export default function WholeExpressionScrollView ({ wholeExpression } 
    : {wholeExpression: string}) {

    // Defining Ref to scrollView for getting it functionality later.
    const wholeExpressionScrollView = useRef<ScrollView>(null);

    useEffect(() => {
        wholeExpressionScrollView.current?.scrollToEnd({animated: false});
    }, [wholeExpression]);

    return (
        <ScrollView
                horizontal={true}
                style={styles.outerExpressionScrollStyle}
                contentContainerStyle={styles.innerExpressionScrollStyle}
                ref={wholeExpressionScrollView}                
            >                
                <Text style={styles.contentinsideExpressionScrollStyle}>{wholeExpression}</Text>                
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
        fontSize: 56,
        color: 'black',        
        fontFamily: "monospace",     
        marginLeft: 20,   
    }
});