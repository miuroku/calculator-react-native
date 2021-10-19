import React from "react";
import { StyleSheet, View } from "react-native";
import { useEffect } from "react";

import KeyRow from "../KeyContainingEl/KeyRow";
import KeyColumn from "../KeyContainingEl/KeyColumn";
import Key from "../Key";
import { mainState } from "../../../App";
import { inputedTypes } from "../../Logic/calculator";
import { KeyType } from "../Key";


export default function SciencieficKeyboard ({ tapHandler, isPortrait }
    : { tapHandler: (type: string, value?:any)=>void, isPortrait: boolean } ) {

    return (        
        <View style={isPortrait? styles.portraitSciencificKeyboard: styles.sciencificKeyboard}>     
            <KeyColumn flex_1={1}>
                <KeyRow>            
                    <Key text='sin'     onPress={() => tapHandler(inputedTypes.sciencificKeys.sin)}         keyType={KeyType.Sciencific}></Key> 
                    <Key text='cos'     onPress={() => tapHandler(inputedTypes.sciencificKeys.cos)}         keyType={KeyType.Sciencific}></Key>                    
                    <Key text='%'       onPress={() => tapHandler(inputedTypes.sciencificKeys.percent)}     keyType={KeyType.Sciencific}></Key>
                </KeyRow>   
                <KeyRow>            
                    <Key text='tan'     onPress={() => tapHandler(inputedTypes.sciencificKeys.tan)}     keyType={KeyType.Sciencific}></Key>         
                    <Key text='lg'      onPress={() => tapHandler(inputedTypes.sciencificKeys.lg)}      keyType={KeyType.Sciencific}></Key>
                    <Key text='ln'      onPress={() => tapHandler(inputedTypes.sciencificKeys.ln)}      keyType={KeyType.Sciencific}></Key>                                
                </KeyRow>               
                <KeyRow>
                    <Key text="x^y"     onPress={() => tapHandler(inputedTypes.sciencificKeys.erection_degree)}     keyType={KeyType.Sciencific}></Key>         
                    <Key text='1/x'     onPress={() => tapHandler(inputedTypes.sciencificKeys.divide_one)}          keyType={KeyType.Sciencific}></Key>
                    <Key text='RAD'     onPress={() => tapHandler(inputedTypes.sciencificKeys.RAD)}                 keyType={KeyType.Sciencific}></Key>                    
                </KeyRow>         
                <KeyRow>
                    <Key text="√x"      onPress={() => tapHandler(inputedTypes.sciencificKeys.root)}    keyType={KeyType.Sciencific}></Key>         
                    <Key text='π'       onPress={() => tapHandler(inputedTypes.sciencificKeys.pi)}      keyType={KeyType.Sciencific}></Key>    
                    <Key text=''        onPress={() => tapHandler(inputedTypes.blank_key)}              keyType={KeyType.Sciencific}></Key>                
                </KeyRow>
                <KeyRow>
                    <Key text='x!'      onPress={() => tapHandler(inputedTypes.sciencificKeys.factorial)}   keyType={KeyType.Sciencific}></Key>
                    <Key text="e"       onPress={() => tapHandler(inputedTypes.sciencificKeys.e)}           keyType={KeyType.Sciencific}></Key>       
                    <Key text=''        onPress={() => tapHandler(inputedTypes.blank_key)}                  keyType={KeyType.Sciencific}></Key>                
                </KeyRow>
            </KeyColumn>       
        </View>
    );
};


const styles = StyleSheet.create({
    sciencificKeyboard: {
        flex:4,
        flexDirection:'row',        
        backgroundColor:'#89aaff',          
        borderTopColor:'#ffff',  
        borderTopWidth:5,        
    },
    portraitSciencificKeyboard: {
        flex:4,
        flexDirection:'row',        
        backgroundColor:'#89aaff',          
        borderTopColor:'#ffff',  
        borderTopWidth:5,
        maxWidth: '41%',
    }, 
});