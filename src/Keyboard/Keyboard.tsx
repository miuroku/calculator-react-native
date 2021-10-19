import React, { useEffect, useMemo, useRef, useState } from "react";
import { View, StyleSheet, Text, TouchableHighlight, TouchableOpacity, Vibration, ScrollView } from "react-native";

import { mainState } from "../../App";
import calculator from "../Logic/calculator";

import CommonKeyboard from "./Keyboards/CommonKeyboard";
import SciencieficKeyboard from "./Keyboards/SciencificKeyboard";


export default function Keyboard ({ state_ref, isPortrait, useSciencificButtonsPanelInPortrait }
    : {
        state_ref: React.RefObject<mainState>, 
        isPortrait: ()=>boolean, 
        useSciencificButtonsPanelInPortrait: boolean }
    ) {    

    // Changes 'infoState' using 'calculator'.
    let tapHandler = (type: string, value: any=type): void => {            
        calculator({type, value, state_ref});
    };    


    const scrollViewRef = useRef<ScrollView>(null);

    // Make scroll if need to switch between calculator modes (Sciencific/Common).
    useEffect(() => {
        if (useSciencificButtonsPanelInPortrait){
            scrollViewRef.current?.scrollToEnd();            
        }
        else {
            scrollViewRef.current?.scrollTo();            
        }        
    },[useSciencificButtonsPanelInPortrait, isPortrait()]);


    return (
        <View style={styles.keyboard}>
            {useMemo(() =>                
                isPortrait() ?                                    
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    scrollEnabled={true}
                    ref={scrollViewRef}                        
                    style={[styles.portraitScrollView]}
                    contentContainerStyle={styles.portraitScrollViewElement}
                >
                    <View style={styles.portraitScrollViewInnerElement}>                        
                            <CommonKeyboard tapHandler={tapHandler} isPortrait={true}/>       
                            <View style={styles.horizontalUntouchableLine}></View>                                      
                            <SciencieficKeyboard tapHandler={tapHandler} isPortrait={true}/>                     
                    </View>
                </ScrollView>                
                :
                <View style={styles.keyboard}>
                    <CommonKeyboard tapHandler={tapHandler} isPortrait={false}/>                    
                    <SciencieficKeyboard tapHandler={tapHandler} isPortrait={false}/>
                </View>
            , [isPortrait()])}            
        </View>
    );
};

const styles = StyleSheet.create({
    keyboard: {
        flex:9,
        flexDirection:'row',        
        backgroundColor:'#c9b5ff',          
        /* borderTopColor:'#000000',  */ 
        borderTopWidth:0,
        width: '100%',
        justifyContent: 'flex-end',
    },        
    portatraitKeyboard: {
        width: '100%',
    },
    portraitScrollView: {        
        width: '100%',
        height: '100%',
    },
    portraitScrollViewElement: {        
        width: '170%',
        height: '100%',
    },
    portraitScrollViewInnerElement: {
        height: '100%',
        width: '100%',        
        flexDirection: "row",        
    },
    horizontalUntouchableLine: {
        flex:1,
        maxWidth: '4%',
        backgroundColor:'#7a9fff',
        borderTopColor:'#ffff',
        borderTopWidth:5,
    },
});