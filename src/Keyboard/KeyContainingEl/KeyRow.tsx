import React from "react";
import { View } from "react-native";

export default function KeyRow ({children}
    :{children: any}) {
    return (
        <View style={{ flexDirection:'row', flex:1, }}>
            {children}
        </View>
    );
};