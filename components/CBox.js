import COLORS from '../components/colors';import React from "react";
import {AspectRatio, Box, Image, View, HStack, Center, Stack, Heading, Text, VStack} from "native-base";
import { SafeAreaView } from 'react-native-web';


export default function CBox(){
    return <Box alignItems="center" marginTop={10}>
        <Heading color={COLORS.PRIMARY_TEXT}>PET ADOPTION</Heading>
    <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
  }} _web={{
    shadow: 2,
    borderWidth: 0
  }} _light={{
    backgroundColor: "gray.50"
  }} marginTop={1}>
      <Box>
        <HStack>
            <AspectRatio w="32%" ratio={3 / 4}>
                <Image resizeMode='contain' source={require("../assets/Lucas.png")} alt="image"  size={"lg"}/>
            </AspectRatio>
            <VStack>
              
                <Heading size="md" ml="-1" color={COLORS.TEXT_ICONS} bg={COLORS.ARK_PRIMARY}>
                    Lucas
                </Heading>
                <Text fontSize="xs" 
                    color={COLORS.SECONDARY_TEXT}
                    fontWeight="500" ml="-0.5" mt="-1">
                        American Shorthair Cat
                </Text>
                <Text fontWeight="400" color={COLORS.SECONDARY_TEXT} textAlign={"justify"} width={"35%"} >
                My job requires moving to another country. I am looking for good people
                who will shelter my Lucas.
                </Text> 
                <Text color={COLORS.ACCENT} fontWeight="300" fontSize={"2xs"} marginLeft={12}>
                    5 Bulvarna-Kudriavska Street, Kyiv
                </Text> 
            </VStack>
            <Center bg={COLORS.ACCENT}
             _text={{
                color: COLORS.TEXT_ICONS,
                fontWeight: "700",
                fontSize: "xs"
            }} position="absolute" bottom="1" px="3" py="1">
          2 years old
        </Center>
            </HStack>
      </Box>
    </Box>
  </Box>
}