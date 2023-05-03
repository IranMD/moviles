import { StatusBar } from 'expo-status-bar';
import { Center, HStack, Avatar, VStack, Progress, Box, AspectRatio, Image, Actionsheet, FormControl, Select, useDisclose, Hidden, CheckIcon, Input } from 'native-base';
import React from "react";
import { Text, View, Button, StyleSheet, TextInput, ScrollView, TouchableOpacity, Pressable } from "react-native";
import VerticalGradientText from './VerticalGradientText';
import VerticalGradientButton from './VerticalGradientButton';
import GradientDashboard from './GradientDashboard';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import theme from './theme';
import GradientButton from './GradientButton';
import DisableGradientButton from './DIsableGradientButton';
import GradientIcon from './GradientIcon';

export default function UsersScreen() {

    const { isOpen, onOpen, onClose } = useDisclose();
    const users = [
        { id: '1', name: 'Luis Fernando Jasso Frausto', job: 'Head Waiter', contact: 'luis.jasso@gmail.com', picture: 'https://firebasestorage.googleapis.com/v0/b/foodapp-f2cbb.appspot.com/o/assets%2Fmenu.png?alt=media&token=' },
        { id: '2', name: 'Iran Mendoza De La Torre', job: 'Waitress', contact: 'iranmendoza@gmail.com', picture: 'https://firebasestorage.googleapis.com/v0/b/foodapp-f2cbb.appspot.com/o/assets%2Fmenu.png?alt=media&token=' },
        { id: '3', name: 'Luis Fernando Jasso Frausto', job: 'Head Waiter', contact: 'luis.jasso@gmail.com', picture: 'https://firebasestorage.googleapis.com/v0/b/foodapp-f2cbb.appspot.com/o/assets%2Fmenu.png?alt=media&token=' },
    ];

    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    <VerticalGradientText text="Users" style={styles.titleScreen} />

                    <HStack style={styles.categoriesRow}>
                        <Center style={styles.categoriesContainer}>
                            <HStack alignItems={'center'}>
                                <Text style={styles.categoriesName}> Waiters </Text>
                            </HStack>
                        </Center>

                        <Center style={styles.categoriesContainer}>
                            <HStack alignItems={'center'}>
                                <Text style={styles.categoriesName}> Chefs </Text>
                            </HStack>
                        </Center>



                    </HStack>

                    <VStack style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Waiters Accounts</Text>

                        {users.map((item) => (

                            <Center style={styles.userContainer}>
                                <HStack alignItems={'center'}>
                                    <Avatar source={{
                                        uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                    }} size={50} />
                                    <VStack flex={1} marginLeft={2}>
                                        <VerticalGradientText style={styles.waiterName} numberOfLines={1} text={item.name} flex={1} />
                                        <Text style={styles.infoJob}>{item.job}</Text>
                                    </VStack>
                                </HStack>
                                <HStack alignItems={'center'}>
                                    <Text style={styles.contactSubtitle}>Contact: </Text>
                                    <Text style={styles.infoContact}>{item.contact}</Text>
                                    <HStack justifyContent={'flex-end'} width={'100%'} flex={1}>
                                        <VerticalGradientText text="More..." style={styles.moreText} />
                                    </HStack>
                                </HStack>

                            </Center>
                        ))}

                    </VStack>


                </View>


            </ScrollView>
            <Pressable onPress={(onOpen)}>
                <VerticalGradientButton text="Add new user" style={styles.addButton} />
            </Pressable>

            <Actionsheet isOpen={isOpen} onClose={onClose} hideDragIndicator>
                <Actionsheet.Content style={styles.actionSheet}>

                    <VerticalGradientText text={'Add User'} style={styles.actionSheetTitle} />

                    <Box style={styles.boxImage}>
                        <GradientIcon name='file-image-plus-outline' size={45} />
                    </Box>

                    <TextInput
                        placeholder='Name'
                        placeholderTextColor={theme.text_icons}
                        style={styles.textInput} />

                    <TextInput
                        placeholder='Email'
                        placeholderTextColor={theme.text_icons}
                        style={styles.textInput} />

                    <TextInput
                        placeholder='Password'
                        placeholderTextColor={theme.text_icons}
                        style={styles.textInput}
                        secureTextEntry={true} />

                    <HStack justifyContent={'space-between'} width={'100%'}>
                        <Box style={styles.selectButtonContainer} >
                            <Select placeholder="Area" style={styles.selectButton} borderColor={'transparent'} placeholderTextColor={theme.text_icons}>
                                <Select.Item label="1" value="1" />
                                <Select.Item label="2" value="2" />
                            </Select>
                        </Box>
                        <Box style={styles.selectButtonContainer}>
                            <Select placeholder="Role" style={styles.selectButton} borderColor={'transparent'} placeholderTextColor={theme.text_icons}>
                                <Select.Item label="Waiter" value="1" />
                                <Select.Item label="Chef" value="2" />
                            </Select>
                        </Box>
                    </HStack>

                    <VerticalGradientButton text={'Save User'} style={styles.saveButton} />

                </Actionsheet.Content>
            </Actionsheet>



        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 40,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: theme.background_color,
    },
    titleScreen: {
        fontSize: 23,
        fontWeight: '700',
    },
    categoriesContainer: {
        backgroundColor: theme.cards_background,
        width: 150,
        height: 35,
        borderRadius: 30,
    },
    categoriesRow: {
        marginTop: 20,
        justifyContent: 'space-evenly',
        width: '100%',
        marginBottom: 10,
    },
    categoriesName: {
        color: theme.text_icons,
        fontSize: 15,
        fontWeight: 'bold'
    },
    sectionTitle: {
        color: theme.text_icons,
        fontSize: 21,
        fontWeight: '500',
        textAlign: 'left',
        marginBottom: 10
    },
    sectionContainer: {
        width: '100%',
        padding: 10,
    },
    userContainer: {
        width: '100%',
        paddingRight: 7,
        marginTop: 10,
        backgroundColor: theme.cards_background,
        borderRadius: 10,
        alignItems: 'flex-start',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 7,
    },
    waiterName: {
        color: theme.text_icons,
        fontSize: 18,
        fontWeight: '300',
        width: '100%',
    },
    infoJob: {
        color: theme.text_icons,
        fontSize: 15,
        fontWeight: '400',
        paddingLeft: 4,
        paddingRight: 10,
    },
    addButton: {
        color: theme.text_icons,
        width: '90%',
        height: 30,
        borderRadius: 25,
        marginLeft: 20,
        marginBottom: 15,
        textAlign: 'center',
        paddingTop: 2,
    },
    contactSubtitle: {
        color: theme.text_icons,
        fontSize: 12,
        fontWeight: '500'

    },
    infoContact: {
        color: theme.text_icons,
        fontSize: 12,
        fontWeight: '300'

    },
    moreText: {
        fontSize: 12,
        fontWeight: '300'
    },
    actionSheet: {
        borderTopRadius: 20,
        backgroundColor: theme.cards_background,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 20,
        width: '100%'
    },
    actionSheetTitle: {
        fontSize: 26,
        fontWeight: '500',
        paddingLeft: 20, 
        marginBottom: 7, 
    },
    boxImage: {
        backgroundColor: theme.background_color, 
        borderRadius: 50, 
        width: 70,  
        height: 70,  
        justifyContent: 'center',  
        alignItems: 'center',
        marginBottom: 10,
    }, 
    textInput: {
        width: '100%',
        height: 30,
        backgroundColor: 'transparent',
        color: theme.text_icons,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: theme.gray_borderColor,
        borderWidth: 1,
        borderRadius: 30,
        paddingLeft: 10,
        marginBottom: 10
    },
    selectButtonContainer: {
        borderRadius: 30,
        borderColor: theme.gray_borderColor,
        borderWidth: 1,
        width: '47%',
        marginBottom: 10,
        height: 30,
    },
    saveButton: {
        color: theme.text_icons,
        width: '100%',
        height: 30,
        borderRadius: 25,
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 7
    },
    selectButton: {
        width: '100%',
        color: theme.text_icons,
        paddingTop: 0,
        paddingBottom: 0,
        alignContent: 'center'
    }


})