import { StatusBar } from 'expo-status-bar';
import { Center, HStack } from 'native-base';
import React from "react";
import { Text, View, Button, StyleSheet, TextInput, ScrollView, TouchableOpacity, Box } from "react-native";
import GradientText from './GradientText';
import GradientButton from './GradientButton';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


export default function Login() {


    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <GradientText text="FoodApp" style={[styles.title]} />
                <HStack width={'70%'} marginTop={7} marginBottom={7}>
                    <Text style={styles.subTitle}>Log in</Text>
                </HStack>

                
                <HStack style={styles.textInputContainer}>
                    <MaterialCommunityIcons name='email' color={'#FFFFFF'} size={20}/>
                    <TextInput
                        placeholder='Email'
                        placeholderTextColor={'#FFFFFF'}
                        style={styles.textInput}/>
                </HStack>

                <HStack style={styles.textInputContainer}>
                    <MaterialCommunityIcons name='key' color={'#FFFFFF'} size={20} />
                    <TextInput
                    placeholder='Password'
                    placeholderTextColor={'#FFFFFF'}
                    style={styles.textInput}
                />
                </HStack>

                <StatusBar style='auto'></StatusBar>
                <TouchableOpacity style={styles.containerButton}>
                    <GradientButton text="Log In" style={styles.text} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#f1f1f1',
    }, container: {
        flex: 1,
        backgroundColor: '#1A1A24',
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
    text: {
        fontSize: 14,
        color: '#ffffff'
    },
    subTitle: {
        fontSize: 25,
        color: '#FFFFFF',
        textAlign: 'left',
        fontWeight: '500'
    },
    textInput: {

        width: '70%',
        padding: 10,
        paddingStart: 10,
        height: 50,
        backgroundColor: 'transparent',
        color: '#FFFFFF'
    },
    textInputContainer: {
        alignItems:'center',
        justifyContent:'center',
        borderColor:'#5D5C62',
        borderWidth:1,
        borderRadius:30,
        marginTop: 20,
        paddingLeft: 10,
        height: 30,
    }


})