import { StatusBar } from 'expo-status-bar';
import { Center, HStack, Avatar, VStack, Progress, Box, AspectRatio, Image, Actionsheet, FormControl, Select, useDisclose, Hidden } from 'native-base';
import React from "react";
import { Text, View, Button, StyleSheet, TextInput, ScrollView, TouchableOpacity, Pressable } from "react-native";
import VerticalGradientText from './VerticalGradientText';
import VerticalGradientButton from './VerticalGradientButton';
import GradientDashboard from './GradientDashboard';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import theme from './theme';
import GradientButton from './GradientButton';
import DisableGradientButton from './DisableGradientButton';
import GradientText from './GradientText';

export default function BackordersScreen() {

    const { isOpen, onOpen, onClose } = useDisclose();

    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    <HStack justifyContent={'space-between'} alignItems={'center'} marginBottom={2} width={'100%'}>
                        <HStack alignItems={'center'}>
                            <Image resizeMode="contain" source={{ uri: "https://firebasestorage.googleapis.com/v0/b/foodapp-f2cbb.appspot.com/o/assets%2Fpedidos.png?alt=media&token=" }} alt="Icon of Pending Orders" size={'12'} />
                            <VerticalGradientText text='Pending Orders' style={styles.titleScreen} />
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

                    <HStack style={styles.categoriesRow}>
                        <TouchableOpacity>
                            <Center style={styles.categoriesContainer}>
                                <HStack alignItems={'center'}>
                                    <Image resizeMode="contain" source={{ uri: "https://firebasestorage.googleapis.com/v0/b/foodapp-f2cbb.appspot.com/o/assets%2Fmenu.png?alt=media&token=" }} alt="Icon of Menu" size={"7"} />
                                    <Text style={styles.categoriesName}> Drinks </Text>
                                </HStack>
                            </Center>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Center style={styles.categoriesContainer}>
                                <HStack alignItems={'center'}>
                                    <Image resizeMode="contain" source={{ uri: "https://firebasestorage.googleapis.com/v0/b/foodapp-f2cbb.appspot.com/o/assets%2Fmenu.png?alt=media&token=" }} alt="Icon of Menu" size={"7"} />
                                    <Text style={styles.categoriesName}> Pasta </Text>
                                </HStack>
                            </Center>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Center style={styles.categoriesContainer}>
                                <HStack alignItems={'center'}>
                                    <Image resizeMode="contain" source={{ uri: "https://firebasestorage.googleapis.com/v0/b/foodapp-f2cbb.appspot.com/o/assets%2Fmenu.png?alt=media&token=" }} alt="Icon of Menu" size={"7"} />
                                    <Text style={styles.categoriesName}> Pizza </Text>
                                </HStack>
                            </Center>
                        </TouchableOpacity>
                        
                    </HStack>

                    <VStack style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Pending Orders</Text>

                        <Center style={styles.orderContainer}>
                            <HStack>
                                <Image resizeMode="contain" source={{ uri: "https://th.bing.com/th/id/R.5cb6132dc72fab1d1aabcbbc8dd9d21f?rik=nIlC7fv1F89I8Q&riu=http%3a%2f%2fmysticislandscasino.com%2fwp-content%2fuploads%2fClassic-Italian-Meatballs.jpg&ehk=%2b%2b52DpK%2blJoCVwj2uJe8GxVY8oq5hj38qyxWKWX0qfE%3d&risl=&pid=ImgRaw&r=0" }}
                                    alt="Icon of Menu" size={85} borderLeftRadius={10} marginRight={2} />

                                <VStack flex={1} justifyContent={'flex-end'} paddingBottom={2}>
                                    <Text style={styles.dishName} numberOfLines={1}>Meatball and Spaghetti hbhaebhdbeh jeu</Text>
                                    <HStack alignItems={'center'}>
                                        <MaterialCommunityIcons name='table-furniture' color={theme.text_icons} size={20} />
                                        <Text style={styles.infoOrder}>Table: 1</Text>
                                    </HStack>

                                    <HStack alignItems={'center'}>
                                        <MaterialCommunityIcons name='account' color={theme.text_icons} size={20} />
                                        <Text style={styles.infoOrder}>Waiter: Don Wicho</Text>
                                        <VerticalGradientButton text="Deliver" style={styles.deliverButton} />
                                    </HStack>
                                </VStack>
                            </HStack>
                        </Center>

                        <Center style={styles.orderContainer}>
                            <HStack>
                                <Image resizeMode="contain" source={{ uri: "https://th.bing.com/th/id/R.5cb6132dc72fab1d1aabcbbc8dd9d21f?rik=nIlC7fv1F89I8Q&riu=http%3a%2f%2fmysticislandscasino.com%2fwp-content%2fuploads%2fClassic-Italian-Meatballs.jpg&ehk=%2b%2b52DpK%2blJoCVwj2uJe8GxVY8oq5hj38qyxWKWX0qfE%3d&risl=&pid=ImgRaw&r=0" }}
                                    alt="Icon of Menu" size={85} borderLeftRadius={10} marginRight={2} />

                                <VStack flex={1} justifyContent={'flex-end'} paddingBottom={2}>
                                    <Text style={styles.dishName} numberOfLines={1}>Meatball and Spaghetti hbhaebhdbeh jeu</Text>
                                    <HStack alignItems={'center'}>
                                        <MaterialCommunityIcons name='table-furniture' color={theme.text_icons} size={20} />
                                        <Text style={styles.infoOrder}>Table: 1</Text>
                                    </HStack>

                                    <HStack alignItems={'center'}>
                                        <MaterialCommunityIcons name='account' color={theme.text_icons} size={20} />
                                        <Text style={styles.infoOrder}>Waiter: Don Wicho</Text>
                                        <VerticalGradientButton text="Deliver" style={styles.deliverButton} />
                                    </HStack>
                                </VStack>
                            </HStack>
                        </Center>
                    </VStack>


                    <VStack style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Delivered Orders</Text>

                        <Center style={styles.orderContainer}>
                            <HStack>
                                <Image resizeMode="contain" source={{ uri: "https://th.bing.com/th/id/R.5cb6132dc72fab1d1aabcbbc8dd9d21f?rik=nIlC7fv1F89I8Q&riu=http%3a%2f%2fmysticislandscasino.com%2fwp-content%2fuploads%2fClassic-Italian-Meatballs.jpg&ehk=%2b%2b52DpK%2blJoCVwj2uJe8GxVY8oq5hj38qyxWKWX0qfE%3d&risl=&pid=ImgRaw&r=0" }}
                                    alt="Icon of Menu" size={85} borderLeftRadius={10} marginRight={2} />

                                <VStack flex={1} justifyContent={'flex-end'} paddingBottom={2}>
                                    <Text style={styles.dishName} numberOfLines={1}>Meatball and Spaghetti hbhaebhdbeh jeu</Text>
                                    <HStack alignItems={'center'}>
                                        <MaterialCommunityIcons name='table-furniture' color={theme.text_icons} size={20} />
                                        <Text style={styles.infoOrder}>Table: 1</Text>
                                    </HStack>

                                    <HStack alignItems={'center'}>
                                        <MaterialCommunityIcons name='account' color={theme.text_icons} size={20} />
                                        <Text style={styles.infoOrder}>Waiter: Don Wicho</Text>
                                        <DisableGradientButton text="Delivered" style={styles.deliverButton} />
                                    </HStack>
                                </VStack>
                            </HStack>
                        </Center>
                        <Center style={styles.orderContainer}>
                            <HStack>
                                <Image resizeMode="contain" source={{ uri: "https://th.bing.com/th/id/R.5cb6132dc72fab1d1aabcbbc8dd9d21f?rik=nIlC7fv1F89I8Q&riu=http%3a%2f%2fmysticislandscasino.com%2fwp-content%2fuploads%2fClassic-Italian-Meatballs.jpg&ehk=%2b%2b52DpK%2blJoCVwj2uJe8GxVY8oq5hj38qyxWKWX0qfE%3d&risl=&pid=ImgRaw&r=0" }}
                                    alt="Icon of Menu" size={85} borderLeftRadius={10} marginRight={2} />

                                <VStack flex={1} justifyContent={'flex-end'} paddingBottom={2}>
                                    <Text style={styles.dishName} numberOfLines={1}>Meatball and Spaghetti hbhaebhdbeh jeu</Text>
                                    <HStack alignItems={'center'}>
                                        <MaterialCommunityIcons name='table-furniture' color={theme.text_icons} size={20} />
                                        <Text style={styles.infoOrder}>Table: 1</Text>
                                    </HStack>

                                    <HStack alignItems={'center'}>
                                        <MaterialCommunityIcons name='account' color={theme.text_icons} size={20} />
                                        <Text style={styles.infoOrder}>Waiter: Don Wicho</Text>
                                        <DisableGradientButton text="Delivered" style={styles.deliverButton} />
                                    </HStack>
                                </VStack>
                            </HStack>
                        </Center>
                        <Center style={styles.orderContainer}>
                            <HStack>
                                <Image resizeMode="contain" source={{ uri: "https://th.bing.com/th/id/R.5cb6132dc72fab1d1aabcbbc8dd9d21f?rik=nIlC7fv1F89I8Q&riu=http%3a%2f%2fmysticislandscasino.com%2fwp-content%2fuploads%2fClassic-Italian-Meatballs.jpg&ehk=%2b%2b52DpK%2blJoCVwj2uJe8GxVY8oq5hj38qyxWKWX0qfE%3d&risl=&pid=ImgRaw&r=0" }}
                                    alt="Icon of Menu" size={85} borderLeftRadius={10} marginRight={2} />

                                <VStack flex={1} justifyContent={'flex-end'} paddingBottom={2}>
                                    <Text style={styles.dishName} numberOfLines={1}>Meatball and Spaghetti hbhaebhdbeh jeu</Text>
                                    <HStack alignItems={'center'}>
                                        <MaterialCommunityIcons name='table-furniture' color={theme.text_icons} size={20} />
                                        <Text style={styles.infoOrder}>Table: 1</Text>
                                    </HStack>

                                    <HStack alignItems={'center'}>
                                        <MaterialCommunityIcons name='account' color={theme.text_icons} size={20} />
                                        <Text style={styles.infoOrder}>Waiter: Don Wicho</Text>
                                        <DisableGradientButton text="Delivered" style={styles.deliverButton} />
                                    </HStack>
                                </VStack>
                            </HStack>
                        </Center>



                    </VStack>



                </View>
            </ScrollView>
            <VerticalGradientButton text="Total pending orders: 5" style={styles.totalButton} />

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
    }, titleScreen: {
        fontSize: 23,
        fontWeight: '700',
        paddingLeft: 10,
    }, categoriesContainer: {
        backgroundColor: theme.cards_background,
        width: 100,
        height: 40,
        borderRadius: 30,
    }, categoriesRow: {
        marginTop: 20,
        justifyContent: 'space-evenly',
        width: '100%'
    }, categoriesName: {
        color: theme.text_icons,
        fontSize: 15,
        fontWeight: 'bold'
    }, sectionTitle: {
        color: theme.text_icons,
        fontSize: 21,
        fontWeight: '500',
        textAlign: 'left',
    }, sectionContainer: {
        width: '100%',
        padding: 10,
    }, orderContainer: {
        width: '100%',
        paddingRight: 7,
        marginTop: 10,
        backgroundColor: theme.cards_background,
        borderRadius: 10,
        alignItems: 'flex-start',
    }, dishName: {
        color: theme.text_icons,
        fontSize: 15,
        fontWeight: '500',
        width: '100%',
        paddingBottom: 10
    }, infoOrder: {
        color: theme.text_icons,
        fontSize: 12,
        paddingLeft: 4,
        paddingRight: 10,
    }, deliverButton: {
        color: theme.text_icons,
        fontSize: 14,
        fontWeight: '400',
        height: 20,
        borderRadius: 25,
        alignItems: 'center',
        flex: 1
    }, actionSheet: {
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
    totalButton: {
        color: theme.text_icons,
        width: '90%',
        height: 30,
        borderRadius: 25,
        marginLeft: 20,
        marginBottom: 15,
        textAlign: 'center',
        paddingTop: 2
    }
})