import { StatusBar } from 'expo-status-bar';
import { Center, HStack, Avatar, VStack, Progress, Box, AspectRatio, Image, Actionsheet, FormControl, Select, useDisclose, Button, AlertDialog, Text } from 'native-base';
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
import SelectDropdown from 'react-native-select-dropdown';
import AddUserButton from './AddUserButton';
export default function UsersScreen() {
    const { isOpen, onOpen, onClose } = useDisclose();
    const role = ["Waiter", "Chef"];
    const area = ["Kitchen", "Tables", "Bar"];
    const users = [
        { id: '1', name: 'Luis Fernando Jasso Frausto', job: 'Head Waiter', contact: 'luis.jasso@gmail.com', picture: 'https://firebasestorage.googleapis.com/v0/b/foodapp-f2cbb.appspot.com/o/assets%2Fmenu.png?alt=media&token=' },
        { id: '2', name: 'Iran Mendoza De La Torre', job: 'Waitress', contact: 'iranmendoza@gmail.com', picture: 'https://firebasestorage.googleapis.com/v0/b/foodapp-f2cbb.appspot.com/o/assets%2Fmenu.png?alt=media&token=' },
        { id: '3', name: 'Luis Fernando Jasso Frausto', job: 'Head Waiter', contact: 'luis.jasso@gmail.com', picture: 'https://firebasestorage.googleapis.com/v0/b/foodapp-f2cbb.appspot.com/o/assets%2Fmenu.png?alt=media&token=' },
    ];

    const [isOpenSave, setIsOpenSave] = React.useState(false);
    const onCloseSave = () => setIsOpenSave(false);

    const [isOpenDelete, setIsOpenDelete] = React.useState(false);
    const onCloseDelete = () => setIsOpenDelete(false);

    const cancelRef = React.useRef(null);

    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    <HStack alignItems={'center'} width={'100%'}>
                        <TouchableOpacity>
                            <GradientIcon name="arrow-left" size={30} />
                        </TouchableOpacity>
                        <VerticalGradientText text="Users" style={styles.titleScreen} />
                    </HStack>

                    <HStack style={styles.categoriesRow}>
                        <TouchableOpacity>
                            <Center style={styles.categoriesContainer}>
                                <HStack alignItems={'center'}>
                                    <Text style={styles.categoriesName}> Waiters </Text>
                                </HStack>
                            </Center>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Center style={styles.categoriesContainer}>
                                <HStack alignItems={'center'}>
                                    <Text style={styles.categoriesName}> Chefs </Text>
                                </HStack>
                            </Center>
                        </TouchableOpacity>


                    </HStack>
                    <VStack style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Waiters Accounts</Text>
                        {users.map((item) => (
                            <TouchableOpacity onPress={(onOpen)} >
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
                            </TouchableOpacity>
                        ))}
                    </VStack>

                </View>

            </ScrollView>
            <AddUserButton />

            <Actionsheet isOpen={isOpen} onClose={onClose} hideDragIndicator>
                <Actionsheet.Content style={styles.actionSheet}>
                    <VerticalGradientText text={'Modify User'} style={styles.actionSheetTitle} />
                    <TouchableOpacity>
                        <Avatar source={{
                            uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        }} size={70} style={styles.avatarImage} />

                    </TouchableOpacity>
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
                    <HStack justifyContent={'space-between'} width={'100%'} marginBottom={4}>
                        <SelectDropdown
                            data={area}
                            // defaultValueByIndex={1}
                            // defaultValue={'Egypt'}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index);
                            }}
                            defaultButtonText={'Area'}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem;
                            }}
                            rowTextForSelection={(item, index) => {
                                return item;
                            }}
                            buttonStyle={styles.dropdown1BtnStyle}
                            buttonTextStyle={styles.dropdown1BtnTxtStyle}
                            renderDropdownIcon={isOpened => {
                                return <MaterialCommunityIcons name={isOpened ? 'chevron-up' : 'chevron-down'} color={theme.text_icons} size={18} />;
                            }}
                            dropdownIconPosition={'right'}
                            dropdownStyle={styles.dropdown1DropdownStyle}
                            rowStyle={styles.dropdown1RowStyle}
                            rowTextStyle={styles.dropdown1RowTxtStyle}
                        />
                        <SelectDropdown
                            data={role}
                            // defaultValueByIndex={1}
                            // defaultValue={'Egypt'}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index);
                            }}
                            defaultButtonText={'Role'}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem;
                            }}
                            rowTextForSelection={(item, index) => {
                                return item;
                            }}
                            buttonStyle={styles.dropdown1BtnStyle}
                            buttonTextStyle={styles.dropdown1BtnTxtStyle}
                            renderDropdownIcon={isOpened => {
                                return <MaterialCommunityIcons name={isOpened ? 'chevron-up' : 'chevron-down'} color={theme.text_icons} size={18} />;
                            }}
                            dropdownIconPosition={'right'}
                            dropdownStyle={styles.dropdown1DropdownStyle}
                            rowStyle={styles.dropdown1RowStyle}
                            rowTextStyle={styles.dropdown1RowTxtStyle}
                        />
                    </HStack>
                    <TouchableOpacity onPress={() => setIsOpenSave(!isOpenSave)}>
                        <VerticalGradientButton text={'Save Changes'} style={styles.saveButton} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setIsOpenDelete(!isOpenDelete)}>
                        <DeleteGradientButton text={'Delete User'} style={styles.saveButton} />
                    </TouchableOpacity>
                </Actionsheet.Content>
            </Actionsheet>


            <Center>
                <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpenSave} onClose={onCloseSave}>
                    <AlertDialog.Content borderColor={theme.gray_borderColor} borderWidth={1}>
                        <AlertDialog.CloseButton />
                        <AlertDialog.Header style={styles.colorAlertDialog}>
                            <VerticalGradientText text="Save" style={styles.headerAlerDialog} />
                        </AlertDialog.Header>
                        <AlertDialog.Body style={styles.colorAlertDialog}>
                            <Text style={styles.bodyAlerDialog}>
                                Save Changes?
                            </Text>
                        </AlertDialog.Body>
                        <AlertDialog.Footer style={styles.colorAlertDialog}>
                            <Button.Group space={2}>
                                <TouchableOpacity onPress={onCloseSave}>
                                    <DeleteGradientButton text="Cancel" style={styles.alertButtons} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <VerticalGradientButton text="Yes, Save" style={styles.alertButtons} />
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
                            <VerticalGradientText text="Delete" style={styles.headerAlerDialog} />
                        </AlertDialog.Header>
                        <AlertDialog.Body style={styles.colorAlertDialog}>
                            <Text style={styles.bodyAlerDialog}>
                                Delete User?
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
        paddingLeft: '50%',
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
    avatarImage: {
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
        marginBottom: 10,
        fontSize: 14
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
        width: 320,
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
    },
    dropdown1BtnStyle: {
        width: '47%',
        height: 30,
        backgroundColor: theme.cards_background,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: theme.gray_borderColor,
    },
    dropdown1BtnTxtStyle: {
        color: theme.text_icons,
        textAlign: 'left',
        fontSize: 14
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
        textAlign: 'left',
        fontSize: 14
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