import { StatusBar } from 'expo-status-bar';
import { Center, HStack, Avatar, VStack, Progress, Box, AspectRatio, Image, Actionsheet, FormControl, Select, useDisclose, Hidden, CheckIcon, Input, useState, FlatList } from 'native-base';
import React from "react";
import { Text, View, Button, StyleSheet, TextInput, ScrollView, TouchableOpacity, Pressable } from "react-native";
import VerticalGradientText from './VerticalGradientText';
import VerticalGradientButton from './VerticalGradientButton';
import GradientDashboard from './GradientDashboard';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import theme from './theme';
import GradientButton from './GradientButton';
import GradientText from './GradientText';
import DisableGradientButton from './DisableGradientButton';
import GradientIcon from './GradientIcon';
import DeleteGradientButton from './DeleteGradientButton';
import VerticalGradientButtonIcon from './VerticalGradientButtonIcon';

export default function HomePageWaiter() {

    const { isOpen, onOpen, onClose } = useDisclose();

    const tables = [
        { id: 1, number: 1, status: 'On hold', waiter: 'Don Wicho' },
        { id: 2, number: 2, status: 'On hold', waiter: 'Don Wicho' },
        { id: 3, number: 3, status: 'On hold', waiter: 'Don Wicho' },
        { id: 4, number: 4, status: 'On hold', waiter: 'Don Wicho' },
        { id: 5, number: 5, status: 'On hold', waiter: 'Don Wicho' },
        { id: 6, number: 6, status: 'On hold', waiter: 'Don Wicho' },

    ];

    return (
        <>
            <View style={styles.container}>

                <HStack justifyContent={'space-between'} alignItems={'center'} marginTop={7} marginBottom={2} width={'100%'}>
                    <HStack alignItems={'center'}>
                        <Image resizeMode="contain" source={{ uri: "https://firebasestorage.googleapis.com/v0/b/foodapp-f2cbb.appspot.com/o/assets%2Fmesas.png?alt=media&token=" }} alt="Icon of Tables" size={'16'} />
                        <VerticalGradientText text='Tables' style={styles.titleScreen} />
                    </HStack>
                    <TouchableOpacity onPress={(onOpen)}>
                        <Avatar source={{
                            uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        }} onPress={(onOpen)}></Avatar>
                    </TouchableOpacity>
                </HStack>

                <Actionsheet isOpen={isOpen} onClose={onClose} hideDragIndicator>
                    <Actionsheet.Content style={styles.actionSheet}>
                        <HStack style={styles.rowActionSheet}>
                            <Avatar source={{
                                uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            }} size={100} />
                            <VStack>
                                <GradientText text={'Iran Mendoza De La Torre'} style={styles.nameText} />
                                <Text style={styles.jobText}>Manager</Text>
                            </VStack>
                        </HStack>

                        <Text style={styles.dateText}>Date of hire: 04/03/2023</Text>

                        <TouchableOpacity>
                            <GradientButton text={'Log Out'} style={styles.logOutButton} />
                        </TouchableOpacity>

                    </Actionsheet.Content>
                </Actionsheet>

                <FlatList numColumns={2} data={tables} renderItem={({ item }) => {
                    return <TouchableOpacity onPress={(onOpen)}>
                        <Center style={styles.tableContainer} justifyContent={'flex-start'}>
                            <HStack alignItems={'center'} width={'100%'}>
                                <VerticalGradientText text={item.number} style={styles.numberTable} />
                                <VStack>
                                    <Text style={styles.textStatus}>{item.status}</Text>
                                    <HStack width={120} justifyContent={'flex-end'} alignItems={'center'} >
                                        <Text style={styles.textWaiter}>{item.waiter}</Text>
                                        <Image resizeMode="contain" source={{ uri: "https://firebasestorage.googleapis.com/v0/b/foodapp-f2cbb.appspot.com/o/assets%2Fmenu.png?alt=media&token=" }} alt="Icon of Menu" size={"7"} />
                                    </HStack>
                                </VStack>
                            </HStack>
                        </Center>
                    </TouchableOpacity>
                }} />
            </View>

            <TouchableOpacity>
                <MaterialCommunityIcons name='silverware' size={19} style={styles.menuIcon} />
                <VerticalGradientButton text="Menu" style={styles.addButton} />
            </TouchableOpacity>



        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: theme.background_color,
    },
    titleScreen: {
        fontSize: 30,
        fontWeight: '400',
        paddingLeft: 10
    },
    tableContainer: {
        backgroundColor: theme.cards_background,
        width: 161,
        height: 80,
        marginTop: 10,
        marginRight: 12,
        borderRadius: 10,
        paddingLeft: 7,
    },
    numberTable: {
        fontSize: 50,
        fontWeight: '700',
        textAlignVertical: 'center',
        marginRight: 5,
    },
    textStatus: {
        color: theme.text_icons,
        textAlign: 'right',
        paddingRight: 5,
        fontSize: 17,
        fontWeight: '700',
        paddingBottom: 10,
        paddingTop: 10
    },
    textWaiter: {
        color: theme.text_icons,
        fontSize: 17,
        fontWeight: '300',
        paddingRight: 3
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
    actionSheet: {
        borderTopRadius: 20,
        backgroundColor: theme.cards_background,
        paddingLeft: 60,
        paddingRight: 60,
        paddingTop: 20,
        paddingBottom: 20,
      },
      nameText: {
        fontSize: 30,
        fontWeight: '700',
        paddingLeft: 20
      },
      rowActionSheet: {
        paddingBottom: 10
      },
      jobText: {
        color: theme.text_icons,
        fontSize: 20,
        fontWeight: '300',
        paddingLeft: 20
      },
      dateText: {
        color: theme.text_icons,
        textAlign: 'left',
        fontSize: 17,
        fontWeight: '200',
        width: '130%',
        paddingBottom: 17
      },
      logOutButton: {
        color: theme.text_icons,
        width: 300,
        height: 30,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        textAlignVertical: 'center'
      }, 
      menuIcon: {
        color: theme.text_icons,
        zIndex: 2,
        position: 'absolute',
        marginLeft: 147,
        marginTop: 4
    }, 

})