import React from "react";
import { View, StyleSheet } from "react-native";

export default function KeyColumn ({ children, flex_1 }
    : {children: any, flex_1: number|undefined} ) {

    return (
        <View style={[styles.keyColumnWrapper, { flex: flex_1 }]}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    keyColumnWrapper: {
        flexDirection: 'column',        
    }
});