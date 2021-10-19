import React, { useEffect, useRef } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";



export default function WholeExpressionScrollView ({ wholeExpression } 
    : {wholeExpression: string}) {

    // Defining Ref to scrollView for getting it functionality later.
    const wholeExpressionScrollView = useRef<ScrollView>(null);

    useEffect(() => {
        wholeExpressionScrollView.current?.scrollToEnd({animated: false});
    }, [wholeExpression]);

    return (
        <View style={styles.outerExpressionScrollStyle}>
            <ScrollView
                    horizontal={true}
                    style={styles.outerExpressionScrollStyle}
                    contentContainerStyle={styles.innerExpressionScrollStyle}
                    ref={wholeExpressionScrollView}                
                >                
                    <Text style={styles.contentinsideExpressionScrollStyle}>{wholeExpression}</Text>                
            </ScrollView> 
        </View>
    );
}

const styles = StyleSheet.create({
    outerExpressionScrollStyle: {
        flex: 4,
        minWidth: '100%',
    },
    innerExpressionScrollStyle: {
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    contentinsideExpressionScrollStyle: {        
        fontSize: 58,
        color: 'black',        
        fontFamily: "monospace",     
        marginLeft: 70,   
    }
});