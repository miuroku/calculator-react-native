import React from "react";
import { View, StyleSheet } from "react-native";

export default function KeyColumn ({ children, flex_1, specialBackground }
    : {children: any, flex_1: number|undefined, specialBackground?: any} ) {

    return (
        <View style={[styles.keyColumnWrapper, { flex: flex_1, backgroundColor: specialBackground }]}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    keyColumnWrapper: {
        flexDirection: 'column',   
        backgroundColor: '#000000'     
    }
});