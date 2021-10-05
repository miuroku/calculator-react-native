import React from "react";
import { StyleSheet, View } from "react-native";
import { useEffect } from "react";

import KeyRow from "../KeyContainingEl/KeyRow";
import KeyColumn from "../KeyContainingEl/KeyColumn";
import Key from "../Key";
import { mainState } from "../../../App";
import { inputedTypes } from "../../Logic/calculator";


export default function SciencieficKeyboard ({ state_ref, tapHandler }
    : {state_ref: React.RefObject<mainState>, tapHandler: (type: string, value?:any)=>void} ) {

    return (        
        <View style={styles.sciencificKeyboard}>     
            <KeyColumn flex_1={5}>
                <KeyRow>            
                    <Key text='AC'  onPress={() => tapHandler(inputedTypes.clear)}></Key> 
                    <Key text='DEL' onPress={() => tapHandler(inputedTypes.delete)}></Key>                    
                </KeyRow>   
                <KeyRow>            
                    <Key text="7"   onPress={() => tapHandler(inputedTypes.number, 7)}></Key>         
                    <Key text='8'   onPress={() => tapHandler(inputedTypes.number, 8)}></Key>
                    <Key text='9'   onPress={() => tapHandler(inputedTypes.number, 9)}></Key>                                
                </KeyRow>               
                <KeyRow>
                    <Key text="4"   onPress={() => tapHandler(inputedTypes.number, 4)}></Key>         
                    <Key text='5'   onPress={() => tapHandler(inputedTypes.number, 5)}></Key>
                    <Key text='6'   onPress={() => tapHandler(inputedTypes.number, 6)}></Key>                    
                </KeyRow>         
                <KeyRow>
                    <Key text="1"   onPress={() => tapHandler(inputedTypes.number, 1)}></Key>         
                    <Key text='2'   onPress={() => tapHandler(inputedTypes.number, 2)}></Key>
                    <Key text='3'   onPress={() => tapHandler(inputedTypes.number, 3)}></Key>                                    
                </KeyRow>
                <KeyRow>
                    <Key text='0'   onPress={() => tapHandler(inputedTypes.number, 0)}></Key>
                    <Key text="."   onPress={() => tapHandler(inputedTypes.dot)}></Key>                             
                </KeyRow>
            </KeyColumn> 
            <KeyColumn flex_1={2}>
                <Key text='/'   onPress={() => tapHandler(inputedTypes.operator, inputedTypes.operator_val.divide)}></Key>
                <Key text='X'   onPress={() => tapHandler(inputedTypes.operator, inputedTypes.operator_val.multiplication)}></Key>
                <Key text='-'   onPress={() => tapHandler(inputedTypes.operator, inputedTypes.operator_val.subtraction)}></Key>
                <Key text='+'   onPress={() => tapHandler(inputedTypes.operator, inputedTypes.operator_val.addition)}></Key>
                <Key text='='   onPress={() => tapHandler(inputedTypes.equal)}></Key>
            </KeyColumn>        
        </View>
    );
};


const styles = StyleSheet.create({
    sciencificKeyboard: {
        flex:4,
        flexDirection:'row',        
        backgroundColor:'#c9b5ff',          
        borderTopColor:'#ffff',  
        borderTopWidth:5,
    }, 
});