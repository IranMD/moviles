import { StatusBar } from 'expo-status-bar';
import { Center, HStack, Link } from 'native-base';
import React from "react";
import { Text, View, Button, StyleSheet, TextInput, ScrollView, TouchableOpacity, Box } from "react-native";
import GradientText from './GradientText';
import GradientButton from './GradientButton';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import theme from './theme';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default function Signin() {
    const countries = ["Egypt", "Canada", "Australia", "Ireland"]
    return (
        <View style={styles.container}>
            <GradientText text="FoodApp" style={[styles.title]} />
            <HStack width={'70%'} marginTop={7} marginBottom={7}>
                <Text style={styles.subTitle}>Sign in</Text>
            </HStack>


            <HStack style={styles.textInputContainer}>
                <MaterialCommunityIcons name='email' color={theme.text_icons} size={20} />
                <TextInput
                    placeholder='Email'
                    placeholderTextColor={theme.text_icons}
                    style={styles.textInput} />
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

            <HStack style={styles.textInputContainer}>
                <MaterialCommunityIcons name='key-star' color={theme.text_icons} size={20} />
                <TextInput
                    placeholder='Confirm Password'
                    placeholderTextColor={theme.text_icons}
                    secureTextEntry={true}
                    style={styles.textInput}
                />
            </HStack>


            <SelectDropdown
                data={countries}
                // defaultValueByIndex={1}
                // defaultValue={'Egypt'}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                }}
                defaultButtonText={'Select country'}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                    return item;
                }}
                buttonStyle={styles.dropdown1BtnStyle}
                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                renderDropdownIcon={isOpened => {
                    return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={theme.text_icons} size={18} />;
                }}
                dropdownIconPosition={'right'}
                dropdownStyle={styles.dropdown1DropdownStyle}
                rowStyle={styles.dropdown1RowStyle}
                rowTextStyle={styles.dropdown1RowTxtStyle}
            />





            <TouchableOpacity style={styles.containerButton}>
                <GradientButton text="Sign in" style={styles.button} />
            </TouchableOpacity>

            <TouchableOpacity >
                <GradientText text="Log in" style={styles.link} />
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
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: theme.gray_borderColor,
        borderWidth: 1,
        borderRadius: 30,
        marginTop: 20,
        paddingLeft: 10,
        height: 30,
    },
    link: {
        marginTop: 15,
        fontSize: 14,
        textDecorationLine: 'underline'
    },
    dropdown1BtnStyle: {
        width: '80%',
        height: 50,
        backgroundColor: theme.background_color,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: theme.gray_borderColor,
    },
    dropdown1BtnTxtStyle: {
        color: theme.text_icons,
        textAlign: 'left'
    },
    dropdown1DropdownStyle: { 
        backgroundColor: theme.background_color 
    },
    dropdown1RowStyle: { 
        backgroundColor: theme.cards_background, 
        borderBottomColor: theme.gray_borderColor 
    },
    dropdown1RowTxtStyle: { 
        color: theme.text_icons, 
        textAlign: 'left' },
})