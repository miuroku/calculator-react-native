import React, { useState } from 'react'
import { StyleSheet, Switch, View } from 'react-native'


export default function UpperButtonsPanel ( { isPortrait } 
    : { isPortrait: ()=>boolean } 
    ) {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


    return (
        <View style={styles.body}>
            {isPortrait() &&   
                <Switch
                    style={styles.switcher}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            }
        </View>
    )
}


const styles = StyleSheet.create({
    body: {
        flex: 2.3,
        flexDirection: 'row',
        backgroundColor: '#638fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    switcher: {
        marginTop: 27,
        marginLeft: 18,
    }
});