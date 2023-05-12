import { StatusBar } from 'expo-status-bar';
import { Center, HStack } from 'native-base';

import React from "react";
import { Text, View, StyleSheet } from "react-native";

import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import theme from './theme';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
export default function VericalGradientButtonIcon(props) {
    return (
        <LinearGradient
            // Button Linear Gradient
            colors={[theme.primary_color, theme.secondary_color]}
            style={[props.style]}

        >
            <HStack justifyContent={'center'}>
                <MaterialCommunityIcons >{props.icon}</MaterialCommunityIcons>
                <Text style={[props.style, { backgroundColor: 'transparent' }, { alignItems: 'center' }]}>{props.text}</Text>
            </HStack>
        </LinearGradient>
    );
}