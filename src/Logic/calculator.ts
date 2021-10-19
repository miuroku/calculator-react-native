import React from "react";
import { mainState } from "../../App";

// Add more types/operator_val later for scienciefic part of calculator ...
export const inputedTypes = {
    number: "number",
    operator: "operator",
    operator_val: { 
        addition: "+",
        subtraction: "-",
        multiplication: "X",
        divide: "/"
    },
    sciencificKeys: {
        sin: "sin",
        cos: "cos",
        percent: "%",
        tan: "tan",
        lg: "lg",
        ln: "ln",
        erection_degree: "x^y",
        divide_one: "1/x",
        root: "√x",
        pi: "π",
        factorial: "x!",
        e: "e",
        RAD: "RAD",
        DEG: "DEG",
    },
    brackets: "()",
    dot: ".",  
    equal: "=",        
    clear: "AC",    
    delete: "DEL",
    blank_key: '',
};

export function calculate_result( {wholeExpression}:
    {wholeExpression: string} ): string {            
    
    return wholeExpression;
}

// TO-DO:
// Add switch case for handling specific inputed types ...
export default function calculator ( {type, value, state_ref}:
    {type: string, value: any, state_ref: React.RefObject<mainState>} ): void {    

    const state = state_ref.current;

    if (!state) {
        return;
    }

    console.log(`+Calculator() -> type: "${type}" and value : "${value}"`);    

    switch (type) {
        case inputedTypes.delete: {
            const updatedExpression = state.wholeExpression.slice(0, -1);
            state.setWholeExpression(updatedExpression);
            break;
        }
        case inputedTypes.clear: {            
            state.setWholeExpression("");
            state.setPreviousResult("");
            break;
        }
        // TO-DO:
        // Handle all another inputed, functions for handling e.t.c. ...
        case inputedTypes.equal: {
            console.log(`${state.wholeExpression}`)            
            const result = "";
            //const result = eval(state.wholeExpression);
            //state.setPreviousResult(result)            
            state.setWholeExpression(result);                        
            break;
        }
        case inputedTypes.number: {
            state.setWholeExpression(state.wholeExpression + `${value}`);
            break;
        }
        case inputedTypes.operator: {
            break;            
        }
        default: {
            // Just printing all values.    
            const updatedExpression = state.wholeExpression.concat(value);        
            state.setWholeExpression(updatedExpression);
        }
    }                    
};