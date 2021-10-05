import React, { useEffect, useMemo, useState } from "react";
import { View, StyleSheet, Text, TouchableHighlight, TouchableOpacity, Vibration, Dimensions } from "react-native";

import { mainState } from "../../App";
import calculator from "../Logic/calculator";

import CommonKeyboard from "./Keyboards/CommonKeyboard";
import SciencieficKeyboard from "./Keyboards/SciencificKeyboard";


export default function Keyboard ({ state_ref }
    : {state_ref: React.RefObject<mainState>} ) {

    const [windowInfo, setWindowInfo] = useState(Dimensions.get("window"));

    const isPortrait = (): boolean => {        
        const result: boolean = windowInfo.height >= windowInfo.width;        
        return result;
    };

    // Handling changes in "Dimensions".
    useEffect(() => {
        const onChangeHandler = ({window, screen}: {window: any, screen: any}) => {
            setWindowInfo(window);
        };

        Dimensions.addEventListener("change", onChangeHandler);

        return (() => {
            Dimensions.removeEventListener("change", onChangeHandler)});
    }, []);

    // Changes 'infoState' using 'calculator'.
    let tapHandler = (type: string, value: any=type): void => {            

        calculator({type, value, state_ref});
    };    

    return (
        <View style={styles.keyboard}>
            {useMemo(() =>                
                isPortrait() ?
                <View style={styles.keyboard}>
                    <CommonKeyboard state_ref={state_ref} tapHandler={tapHandler}/>
                </View>
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
    },         
});