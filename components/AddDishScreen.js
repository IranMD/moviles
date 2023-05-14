import { Center, HStack, Box, Select, AlertDialog, Text, Button} from 'native-base';
import React from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import VerticalGradientText from './VerticalGradientText';
import VerticalGradientButton from './VerticalGradientButton';
import theme from './theme';
import GradientIcon from './GradientIcon';
import SelectDropdown from 'react-native-select-dropdown';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import DeleteGradientButton from './DeleteGradientButton';


export default function AddDishScreen() {

    const category = ["Pasta", "Pizza", "Drinks"];
    
    const [isOpenSave, setIsOpenSave] = React.useState(false);
    const onCloseSave = () => setIsOpenSave(false);
    const cancelRef = React.useRef(null);

    return (
        <>
            <View style={styles.container}>
                <HStack alignItems={'center'} width={'100%'} marginBottom={25}>
                    <TouchableOpacity>
                        <GradientIcon name="arrow-left" size={30} />
                    </TouchableOpacity>
                    <VerticalGradientText text="Add Dish to Menu" style={styles.titleScreen} />
                </HStack>

                <TextInput
                    placeholder='Dish Name'
                    placeholderTextColor={theme.text_icons}
                    style={styles.textInput} />

                <TextInput
                    placeholder='Preparation Time'
                    placeholderTextColor={theme.text_icons}
                    style={styles.textInput} />


                <HStack justifyContent={'space-between'} width={'100%'}>
                    <TextInput
                        placeholder='Price'
                        placeholderTextColor={theme.text_icons}
                        style={styles.priceInput}
                    />

                    <SelectDropdown
                        data={category}
                        // defaultValueByIndex={1}
                        // defaultValue={'Egypt'}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index);
                        }}
                        defaultButtonText={'Category'}
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


                <TextInput
                    placeholder='Dish Description...'
                    placeholderTextColor={theme.text_icons}
                    style={styles.descriptionTextInput} />


                <Center style={styles.imageContainer}>
                    <TouchableOpacity>
                        <GradientIcon name='file-image-plus-outline' size={45} />
                    </TouchableOpacity>
                </Center>




            </View >

            <TouchableOpacity onPress={() => setIsOpenSave(!isOpenSave)}>
                <VerticalGradientButton text="Save" style={styles.saveButton} />
            </TouchableOpacity>


            <Center>
                <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpenSave} onClose={onCloseSave}>
                    <AlertDialog.Content borderColor={theme.gray_borderColor} borderWidth={1}>
                        <AlertDialog.CloseButton />
                        <AlertDialog.Header style={styles.colorAlertDialog}>
                            <VerticalGradientText text="Save" style={styles.headerAlerDialog} />
                        </AlertDialog.Header>
                        <AlertDialog.Body style={styles.colorAlertDialog}>
                            <Text style={styles.bodyAlerDialog}>
                                Save Dish?
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
        paddingLeft: '22%'
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
        marginBottom: 15
    },
    selectButtonContainer: {
        borderRadius: 30,
        borderColor: theme.gray_borderColor,
        borderWidth: 1,
        width: '47%',
        marginBottom: 10,
        height: 30,
    },
    priceInput: {
        width: '50%',
        height: 30,
        backgroundColor: 'transparent',
        color: theme.text_icons,
        borderColor: theme.gray_borderColor,
        borderWidth: 1,
        borderRadius: 30,
        paddingLeft: 10,
        marginBottom: 15

    },
    selectButton: {
        width: '100%',
        color: theme.text_icons,
        paddingTop: 0,
        paddingBottom: 0,
        alignContent: 'center'
    },
    descriptionTextInput: {
        width: '100%',
        height: 200,
        backgroundColor: 'transparent',
        color: theme.text_icons,
        borderColor: theme.gray_borderColor,
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        paddingTop: 10,
        marginBottom: 15,
        textAlignVertical: 'top'
    },
    imageContainer: {
        width: '100%',
        height: 200,
        backgroundColor: 'transparent',
        color: theme.text_icons,
        borderColor: theme.gray_borderColor,
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom: 15,
    },
    saveButton: {
        color: theme.text_icons,
        width: '90%',
        height: 30,
        borderRadius: 25,
        marginLeft: 20,
        marginBottom: 15,
        textAlign: 'center',
        paddingTop: 2,
    },
    dropdown1BtnStyle: {
        width: '47%',
        height: 30,
        backgroundColor: theme.background_color,
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