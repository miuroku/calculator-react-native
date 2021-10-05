import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableHighlight, TouchableOpacity, Vibration } from "react-native";

import { mainState } from "../../App";
import calculator from "../Logic/calculator";

import CommonKeyboard from "./Keyboards/CommonKeyboard";
import SciencieficKeyboard from "./Keyboards/SciencificKeyboard";


export default function Keyboard ({ state_ref }
    : {state_ref: React.RefObject<mainState>} ) {

    // Changes 'infoState' using 'calculator'.
    let tapHandler = (type: string, value: any=type): void => {            

        calculator({type, value, state_ref});
    };    

    return (
        <View style={styles.keyboard}>
            {/* <SciencieficKeyboard state_ref={state_ref} tapHandler={tapHandler}/>           */}
            <CommonKeyboard state_ref={state_ref} tapHandler={tapHandler}/>
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
    },         
});