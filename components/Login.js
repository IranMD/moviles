import { StatusBar } from 'expo-status-bar';
import { Center, HStack } from 'native-base';
import React from "react";
import { Text, View, Button, StyleSheet, TextInput, ScrollView, TouchableOpacity, Box } from "react-native";
import GradientText from './GradientText';
import GradientButton from './GradientButton';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import theme from './theme';


export default function Login() {

    return (
            <View style={styles.container}>
                <GradientText text="FoodApp" style={[styles.title]} />
                <HStack width={'70%'} marginTop={7} marginBottom={7}>
                    <Text style={styles.subTitle}>Log in</Text>
                </HStack>

                
                <HStack style={styles.textInputContainer}>
                    <MaterialCommunityIcons name='email' color={theme.text_icons} size={20}/>
                    <TextInput
                        placeholder='Email'
                        placeholderTextColor={theme.text_icons}
                        style={styles.textInput}/>
                </HStack>

                <HStack style={styles.textInputContainer}>
                    <MaterialCommunityIcons name='key' color={theme.text_icons} size={20} />
                    <TextInput
                    placeholder='Password'
                    placeholderTextColor={theme.text_icons}
                    secureTextEntry={true} 
                    style={styles.textInput}
                />
                </HStack>

                
                <TouchableOpacity style={styles.containerButton}>
                    <GradientButton text="Log in" style={styles.button} />
                </TouchableOpacity>
            </View>
        
    );
}

const styles = StyleSheet.create({
container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }, containerButton: {
        alignItems: 'center',
        width: 300,
        marginTop: 60,
    }, title: {
        marginTop: 70,
        fontSize: 40,
        fontWeight: '900'
    },
    button: {
        fontSize: 14,
        color: theme.text_icons,
        height: 30,
        borderRadius: 25,
        justifyContent: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        width: 230
    },
    subTitle: {
        fontSize: 25,
        color: theme.text_icons,
        textAlign: 'left',
        fontWeight: '500'
    },
    textInput: {
        width: '70%',
        padding: 10,
        paddingStart: 10,
        height: 50,
        backgroundColor: 'transparent',
        color: theme.text_icons
    },
    textInputContainer: {
        alignItems:'center',
        justifyContent:'center',
        borderColor: theme.gray_borderColor,
        borderWidth:1,
        borderRadius:30,
        marginTop: 20,
        paddingLeft: 10,
        height: 30,
    }


})