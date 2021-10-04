
// TO-DO: 
// Add more types/operator_val later for scienciefic part of calculator ...
export const inputedTypes = {
    number: "number",
    operator: "operator",
    operator_val: { 
        addition: "+",
        subtraction: "-",
        multiplication: "X",
        divide: "/"},
    equal: "=",        
    special_val: {
        equal: "=",  
        dot: ".",      
    },
    clear: "AC",    
    delete: "DEL",
};


// TO-DO:
// Add switch case for handling specific inputed types ...
export default function calculator ( {type, value, state}:
    {type: string, value: any, state: any} ): void {    

    console.log(`+Calculator() -> type: "${type}" and value : "${value}"`);

    switch (type) {
        case inputedTypes.delete: {
            const updatedExpression = state.wholeExpression.slice(0, -1);
            state.setWholeExpression(updatedExpression);
            break;
        }
        case inputedTypes.clear: {            
            state.setWholeExpression("");
            state.setPreviousResult("")
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
        }
        default: {
            // Just printing all values.    
            const updatedExpression = state.wholeExpression.concat(value);        
            state.setWholeExpression(updatedExpression);
        }
    }                    
};