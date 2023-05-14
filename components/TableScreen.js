import { StatusBar } from 'expo-status-bar';
import { Center, HStack, Avatar, VStack, Progress, Box, AspectRatio, Image, FormControl, Select, useDisclose, Hidden, CheckIcon, Input, useState, FlatList, AlertDialog, Text, Button } from 'native-base';
import React from "react";
import { View, StyleSheet, TextInput, ScrollView, TouchableOpacity, Pressable } from "react-native";
import VerticalGradientText from './VerticalGradientText';
import VerticalGradientButton from './VerticalGradientButton';
import GradientDashboard from './GradientDashboard';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import theme from './theme';
import GradientButton from './GradientButton';
import DisableGradientButton from './DisableGradientButton';
import GradientIcon from './GradientIcon';
import DeleteGradientButton from './DeleteGradientButton';

export default function TableScreen() {

    const { isOpen, onOpen, onClose } = useDisclose();

    const tables = [
        { id: 1, number: 1, status: 'On hold', waiter: 'Don Wicho' },
        { id: 2, number: 2, status: 'On hold', waiter: 'Don Wicho' },
        { id: 3, number: 3, status: 'On hold', waiter: 'Don Wicho' },
        { id: 4, number: 4, status: 'On hold', waiter: 'Don Wicho' },
        { id: 5, number: 5, status: 'On hold', waiter: 'Don Wicho' },
        { id: 6, number: 6, status: 'On hold', waiter: 'Don Wicho' },

    ];

    const [isOpenAdd, setIsOpenAdd] = React.useState(false);
    const onCloseAdd = () => setIsOpenAdd(false);

    const [isOpenDelete, setIsOpenDelete] = React.useState(false);
    const onCloseDelete = () => setIsOpenDelete(false);

    const cancelRef = React.useRef(null);

    return (
        <>
            <View style={styles.container}>
                <HStack alignItems={'center'} width={'100%'} marginBottom={5}>
                    <TouchableOpacity>
                        <GradientIcon name="arrow-left" size={30} />
                    </TouchableOpacity>
                    <VerticalGradientText text="Tables" style={styles.titleScreen} />
                </HStack>

                <FlatList numColumns={2} data={tables} renderItem={({ item }) => {
                    return <TouchableOpacity onPress={() => setIsOpenDelete(!isOpenDelete)}>
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

            <TouchableOpacity onPress={() => setIsOpenAdd(!isOpenAdd)}>
                <VerticalGradientButton text="Add Table" style={styles.addButton} />
            </TouchableOpacity>

            <Center>
                <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpenAdd} onClose={onCloseAdd}>
                    <AlertDialog.Content borderColor={theme.gray_borderColor} borderWidth={1}>
                        <AlertDialog.CloseButton />
                        <AlertDialog.Header style={styles.colorAlertDialog}>
                            <VerticalGradientText text="New Table" style={styles.headerAlerDialog} />
                        </AlertDialog.Header>
                        <AlertDialog.Body style={styles.colorAlertDialog}>
                            <Text style={styles.bodyAlerDialog}>
                                Add New Table?
                            </Text>
                        </AlertDialog.Body>
                        <AlertDialog.Footer style={styles.colorAlertDialog}>
                            <Button.Group space={2}>
                                <TouchableOpacity onPress={onCloseAdd}>
                                    <DeleteGradientButton text="Cancel" style={styles.alertButtons} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <VerticalGradientButton text="Yes, Add" style={styles.alertButtons} />
                                </TouchableOpacity>
                            </Button.Group>
                        </AlertDialog.Footer>
                    </AlertDialog.Content>
                </AlertDialog>
            </Center>

            <Center>
                <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpenDelete} onClose={onCloseDelete}>
                    <AlertDialog.Content borderColor={theme.gray_borderColor} borderWidth={1}>
                        <AlertDialog.CloseButton />
                        <AlertDialog.Header style={styles.colorAlertDialog}>
                            <VerticalGradientText text="Delete Table" style={styles.headerAlerDialog} />
                        </AlertDialog.Header>
                        <AlertDialog.Body style={styles.colorAlertDialog}>
                            <Text style={styles.bodyAlerDialog}>
                                Delete Table 1?
                            </Text>
                        </AlertDialog.Body>
                        <AlertDialog.Footer style={styles.colorAlertDialog}>
                            <Button.Group space={2}>
                                <TouchableOpacity onPress={onCloseDelete}>
                                    <DeleteGradientButton text="Cancel" style={styles.alertButtons} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <VerticalGradientButton text="Yes, Delete" style={styles.alertButtons} />
                                </TouchableOpacity>
                            </Button.Group>
                        </AlertDialog.Footer>
                    </AlertDialog.Content>
                </AlertDialog>
            </Center>

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
        paddingLeft: '47%'
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
    colorAlertDialog: {
        backgroundColor: theme.cards_background,
        borderColor: 'transparent'
    },
    headerAlerDialog: {
        fontSize: 25,
        fontWeight: '700',
    },
    bodyAlerDialog: {
        color: theme.text_icons,
        fontSize: 22,
        fontWeight: '300', 
    },    
    alertButtons: {
        color: theme.text_icons,
        height: 30,
        borderRadius: 25,
        textAlign: 'center',
        textAlignVertical: 'center', 
        width: 80
    },

})