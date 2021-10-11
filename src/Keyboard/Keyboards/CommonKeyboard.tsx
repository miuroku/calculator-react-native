import React from "react";
import { StyleSheet, View } from "react-native";

import { mainState } from "../../../App";
import { inputedTypes } from "../../Logic/calculator";
import KeyColumn from "../KeyContainingEl/KeyColumn";
import KeyRow from "../KeyContainingEl/KeyRow";
import Key, { KeyType } from "../Key";



export default function CommonKeyboard ({ state_ref, tapHandler }
    : {state_ref: React.RefObject<mainState>, tapHandler: (type:string, value?:any)=> void}
    ) {        
    

    return (
        <View style={styles.keyboard}>     
            <KeyColumn flex_1={8} specialBackground={'#c1aaff'}>
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
                    <Key text='( )'  onPress={() => tapHandler(inputedTypes.brackets)} specialKeyTextSize={27}></Key>
                    <Key text='0'   onPress={() => tapHandler(inputedTypes.number, 0)}></Key>
                    <Key text="."   onPress={() => tapHandler(inputedTypes.dot)}></Key>                             
                </KeyRow>
            </KeyColumn> 
            <KeyColumn flex_1={3} specialBackground={'#97a6ed'}>
                <Key text='/'   onPress={() => tapHandler(inputedTypes.operator, inputedTypes.operator_val.divide)} keyType={KeyType.CommonSpecial}></Key>
                <Key text='X'   onPress={() => tapHandler(inputedTypes.operator, inputedTypes.operator_val.multiplication)} keyType={KeyType.CommonSpecial}></Key>
                <Key text='-'   onPress={() => tapHandler(inputedTypes.operator, inputedTypes.operator_val.subtraction)} keyType={KeyType.CommonSpecial}></Key>
                <Key text='+'   onPress={() => tapHandler(inputedTypes.operator, inputedTypes.operator_val.addition)} keyType={KeyType.CommonSpecial}></Key>
                <Key text='='   onPress={() => tapHandler(inputedTypes.equal)} keyType={KeyType.CommonSpecial}></Key>
            </KeyColumn>        
        </View>
    );
};

const styles = StyleSheet.create({
    keyboard: {
        flex:4,
        flexDirection:'row',        
        backgroundColor:'#c9b5ff',          
        borderTopColor:'white',  
        borderTopWidth:5,
    }, 
    keyColumnSpecialStyle: {        
            flex: 1,
            alignItems:'center', // Horizontal   (if flexDirection of Parent also horizontal)
            justifyContent:'center', // Vertical (if flexDirection row)
            backgroundColor:'#8970a3',        
            borderRadius:0,
            borderWidth:0,
            /* borderColor:'#ffff', */
            margin:0,
            height:'100%',
            width:'100%',        
    },
});