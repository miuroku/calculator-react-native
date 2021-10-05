import React from "react";
import { View, TouchableOpacity, Text, Vibration, StyleSheet } from "react-native";
import { useState } from "react";


export default function Key ({ text, onPress, specialStyle, specialKeyTextSize }
    : {text: string, onPress: ()=>void, specialStyle?: any, specialKeyTextSize?: number} ) {

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
        Vibration.vibrate(20);                
        someAnotherHandler();
    }; 

    return (        
        <TouchableOpacity 
            style={specialStyle? specialStyle: styles.key} 
            onPress={() => onPressClassicHandler(onPress)}
            onPressIn={() => onKeyPressHandler(OnOutPress.On)} 
            onPressOut={() => onKeyPressHandler(OnOutPress.Out)}>
                {/**Button TExt**/}
                <Text 
                    style={
                        [styles.keyText, 
                        {color:textColor, 
                        fontSize:specialKeyTextSize ? specialKeyTextSize: styles.keyText.fontSize}]}>
                    {text}
                </Text>            
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
        fontSize:33,            
        color:'#ffff',
    },
});