import React from "react";
import { View, TouchableOpacity, Text, Vibration, StyleSheet } from "react-native";
import { useState } from "react";


export default function Key ({ text, onPress }
    : {text: string, onPress: ()=>void} ) {

    const textColors = {
        Common: '#ffff',
        touched: '#000c68',
    };
    
    const [textColor, setTextColor] = useState(textColors.Common);

    enum OnOutPress {
        On,
        Out,
    };


    const onKeyPressHandler = (onPressIn: OnOutPress) => {                
        if (onPressIn === OnOutPress.On){
            setTextColor(textColors.touched);                  
        }
        else  {
            setTextColor(textColors.Common);               
        }
    }; 

    const onPressClassicHandler = (someAnotherHandler: ()=>void) => {
        Vibration.vibrate(41);                
        someAnotherHandler();
    }; 

    return (        
        <TouchableOpacity 
            style={styles.key} 
            onPress={() => onPressClassicHandler(onPress)}
            onPressIn={() => onKeyPressHandler(OnOutPress.On)} 
            onPressOut={() => onKeyPressHandler(OnOutPress.Out)}>
                {/**Button TExt**/}
                <Text style={[styles.keyText, {color:textColor}]}>{text}</Text>            
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    key: {
        flex: 1,
        alignItems:'center', // Horizontal   (if flexDirection of Parent also horizontal)
        justifyContent:'center', // Vertical (if flexDirection row)
        backgroundColor:'#444A6B',        
        borderRadius:0,
        borderWidth:0,
        borderColor:'#ffff',
        margin:0,
        height:'100%',
        width:'100%',
    },
    keyText: {
        fontSize:30,            
        color:'#ffff',
    },
});