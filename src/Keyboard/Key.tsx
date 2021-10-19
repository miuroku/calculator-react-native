import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, Vibration, StyleSheet } from "react-native";
import { useState } from "react";

export enum KeyType {
    Common,
    Sciencific,
    CommonSpecial,
};


export default function Key ({ text, onPress, specialKeyTextSize, keyType=KeyType.Common }
    : {text: string, onPress: ()=>void, specialKeyTextSize?: number, keyType?: KeyType} ) {

    const textColors = {
        Common: '#ffff',
        touched: '#000c68',
    };
    
    const [textColor, setTextColor] = useState(textColors.Common);
    const [keyStyle, setKeyStyle] = useState(styles.key);

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


    useEffect(() => {
        if (keyType === KeyType.Common){
            setKeyStyle(styles.key);
        } else if (keyType === KeyType.Sciencific) {
            setKeyStyle(styles.sciencificKey);
        } else if (keyType === KeyType.CommonSpecial) {
            setKeyStyle(styles.commonKeyColumnSpecialStyle);
        } else {
            setKeyStyle(styles.key);
        }
    }, [])

    return (        
        <TouchableOpacity 
            style={keyStyle} 
            onPress={() => onPressClassicHandler(onPress)}
            onPressIn={() => onKeyPressHandler(OnOutPress.On)} 
            onPressOut={() => onKeyPressHandler(OnOutPress.Out)}>                
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
        margin:0,
        height:'100%',
        width:'100%',
    },
    keyText: {
        fontSize:33,            
        color:'#ffff',
    },
    sciencificKey: {
        flex: 1,
        alignItems:'center', // Horizontal   (if flexDirection of Parent also horizontal)
        justifyContent:'center', // Vertical (if flexDirection row)
        backgroundColor:'#326cff',        
        borderRadius:0,
        borderWidth:0,        
        margin:0,
        height:'100%',
        width:'100%',
    },
    commonKeyColumnSpecialStyle: {        
        flex: 1,
        alignItems:'center', // Horizontal   (if flexDirection of Parent also horizontal)
        justifyContent:'center', // Vertical (if flexDirection row)
        backgroundColor:'#8970a3',        
        borderRadius:0,
        borderWidth:0,        
        margin:0,
        height:'100%',
        width:'100%',        
    },
});