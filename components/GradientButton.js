import { StatusBar } from 'expo-status-bar';
import { Center } from 'native-base';

import React from "react";
import { Text, View, StyleSheet } from "react-native";

import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';



export default function GradientButton(props) {
    return (
        <LinearGradient
            // Button Linear Gradient
            colors={['#FFC200', '#E43F04', '#FD7200']}
            star={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.button}
        >
        <Text style={[props.style, { backgroundColor: 'transparent' }]}>{props.text}</Text>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    button: {
        width: '80%',
        height: 30,
        borderRadius: 25,
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center'

    }
})

