import { StatusBar } from 'expo-status-bar';
import { Center, HStack, Avatar, VStack, Progress, Box, AspectRatio, Image, AlertDialog, Text, Button} from 'native-base';
import React from "react";
import {View, StyleSheet, TextInput, ScrollView, TouchableOpacity, Pressable } from "react-native";
import VerticalGradientText from './VerticalGradientText';
import VerticalGradientButton from './VerticalGradientButton';
import GradientDashboard from './GradientDashboard';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import theme from './theme';
import GradientButton from './GradientButton';
import DisableGradientButton from './DisableGradientButton';
import GradientIcon from './GradientIcon';
import DeleteGradientButton from './DeleteGradientButton';
import GradientBorder2 from './GradientBorder2';
import GradientBorder from './GradientBorder';

export default function MealDetail() {
    const [isOpenAdd, setIsOpenAdd] = React.useState(false);
    const onCloseAdd = () => setIsOpenAdd(false);
    const cancelRef = React.useRef(null);
    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    <HStack alignItems={'center'} width={'100%'}>
                        <TouchableOpacity>
                            <GradientIcon name="arrow-left" size={30} />
                        </TouchableOpacity>
                        <VerticalGradientText text="Meal Detail" style={styles.titleScreen} />
                    </HStack>

                    <VStack style={styles.sectionContainer}>
                        <Image resizeMode="cover" source={{ uri: "https://th.bing.com/th/id/R.5cb6132dc72fab1d1aabcbbc8dd9d21f?rik=nIlC7fv1F89I8Q&riu=http%3a%2f%2fmysticislandscasino.com%2fwp-content%2fuploads%2fClassic-Italian-Meatballs.jpg&ehk=%2b%2b52DpK%2blJoCVwj2uJe8GxVY8oq5hj38qyxWKWX0qfE%3d&risl=&pid=ImgRaw&r=0" }}
                            alt="Icon of Menu" size={85} borderTopRadius={10} borderBottomRadius={10} width={'100%'} height={300} />

                        <HStack alignItems={'center'} justifyContent={'space-between'} marginTop={2}>
                            <Text style={styles.nameDish}>Chakalaka Boerewors Meatball and Spaghetti</Text>

                            <GradientBorder2 text="S150.00" style={styles.priceCont} />
                        </HStack>

                        <HStack alignItems={'center'} marginTop={1}>
                            <VerticalGradientText style={styles.dishTime} text='20 min' />
                            <GradientIcon name="clock-time-five-outline" size={25} />
                        </HStack>


                        <Text style={styles.textDescription}>The perfect hearty spaghetti bake with boerewors meatballs and a burst of flavour from the chakalaka.</Text>

                    </VStack>

                </View>
            </ScrollView >


            <HStack height={9} justifyContent={'space-between'} marginBottom={7} marginLeft={7} marginRight={7} style={styles.buttonsContainer}>
                <GradientBorder2 style={styles.quantityContainer} />
                <TouchableOpacity onPress={() => setIsOpenAdd(!isOpenAdd)}>
                    <VerticalGradientButton text='Add' style={styles.addButton}/>
                </TouchableOpacity>
            </HStack>

            <HStack width={'41%'} justifyContent={'space-between'} alignItems={'center'} style={styles.buttonContainer}>

            <TouchableOpacity>
                <GradientIcon name='minus' size={30} style={styles.plusIcon} />
            </TouchableOpacity>
            <Text style={styles.textQuantity}>1</Text>
            <TouchableOpacity>
                <GradientIcon name='plus' size={30} style={styles.minusIcon} />
            </TouchableOpacity>
            </HStack>

            <Center>
                <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpenAdd} onClose={onCloseAdd}>
                    <AlertDialog.Content borderColor={theme.gray_borderColor} borderWidth={1}>
                        <AlertDialog.CloseButton />
                        <AlertDialog.Header style={styles.colorAlertDialog}>
                            <VerticalGradientText text="Add" style={styles.headerAlerDialog} />
                        </AlertDialog.Header>
                        <AlertDialog.Body style={styles.colorAlertDialog}>
                            <Text style={styles.bodyAlerDialog}>
                                Add to order?
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
        textAlign: 'center',
        width: '100%',
        paddingLeft: '30%'
    },
    nameDish: {
        color: theme.text_icons,
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'left',
        width: '65%'
    },
    sectionView: {
        color: theme.text_icons,
        fontSize: 15,
        fontWeight: '900'

    },
    sectionContainer: {
        width: '100%',
        padding: 10,
    },
    dishContainer: {
        width: 180,
        height: 170,
        marginTop: 10,
        backgroundColor: theme.cards_background,
        borderRadius: 10,
        alignItems: 'flex-start',
        marginRight: 20
    },
    dishTitle: {
        color: theme.text_icons,
        fontSize: 15,
        fontWeight: '900',
        paddingLeft: 5
    },
    dishAdditionalInfo: {
        paddingLeft: 5,
        paddingRight: 5,
        marginTop: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    dishTime: {
        color: theme.text_icons,
        fontSize: 15,
        fontWeight: '500',
        marginLeft: 2,
        marginRight: 7
    },
    textDescription: {
        color: theme.text_icons,
        fontSize: 18,
        fontWeight: '200',
        textAlign: 'justify'
    },
    addButton: {
        color: theme.text_icons,
        width: 130,
        height: 34,
        borderRadius: 25,
        marginBottom: 15,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: '700',
        fontSize: 17
    }, 
    priceCont: {
        margin: 5,
        paddingHorizontal: 3,
        textAlign: "center",
        backgroundColor: theme.cards_background,
        color: theme.text_icons,
        fontSize: 20,
        fontWeight: '900',
        paddingTop: 0,
    }, 
    quantityContainer: {
        margin: 4,
        paddingHorizontal: 1,
        textAlign: "center",
        backgroundColor: theme.cards_background,
        color: theme.text_icons,
        fontSize: 15,
        fontWeight: '500',
        paddingTop: 0,
        width: 145, 
    },
    buttonContainer: {
        zIndex: 2, 
        position: 'absolute', 
        marginTop: 679, 
        marginLeft: 35
    },
    textQuantity: {
        color: theme.text_icons,
        fontSize: 20, 
        fontWeight: '700'
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