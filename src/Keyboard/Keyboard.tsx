import React, { useEffect, useMemo, useRef, useState } from "react";
import { View, StyleSheet, Text, TouchableHighlight, TouchableOpacity, Vibration, ScrollView } from "react-native";

import { mainState } from "../../App";
import calculator from "../Logic/calculator";

import CommonKeyboard from "./Keyboards/CommonKeyboard";
import SciencieficKeyboard from "./Keyboards/SciencificKeyboard";


export default function Keyboard ({ state_ref, isPortrait }
    : {state_ref: React.RefObject<mainState>, isPortrait: ()=>boolean} ) {    

    // Changes 'infoState' using 'calculator'.
    let tapHandler = (type: string, value: any=type): void => {            

        calculator({type, value, state_ref});
    };    


    const scrollViewRef = useRef<ScrollView>(null);
    /* useEffect(() => {
        scrollViewRef.current?.scrollTo();
    },[]); */


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
                            <CommonKeyboard state_ref={state_ref} tapHandler={tapHandler}/>                                             
                            <SciencieficKeyboard state_ref={state_ref} tapHandler={tapHandler}/>                     
                    </View>
                </ScrollView>                
                :
                <View style={styles.keyboard}>
                    <CommonKeyboard state_ref={state_ref} tapHandler={tapHandler}/>
                    <SciencieficKeyboard state_ref={state_ref} tapHandler={tapHandler}/>
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
        width: '200%',
        height: '100%',
    },
    portraitScrollViewInnerElement: {
        height: '100%',
        width: '100%',        
        flexDirection: "row",        
    }
});