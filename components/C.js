import COLORS from '../components/colors';import React from "react";
import {AspectRatio, Box, Image, View, HStack} from "native-base";


export default function C(){
    return <View>
      <HStack>
        <AspectRatio ratio={{
          base:  4 / 4,
          md: 7 /10
        }} height={{
          base: 80
        }}>
            <Image resizeMode="contain" source={require('../assets/cat1.png')} alt="Picture of a Cat"  size={"12"}/>
          </AspectRatio>
          <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>

      
    </Box>
      </HStack>
      <HStack>
      <Image resizeMode="contain" source={require('../assets/cat1.png')} alt="Picture of a Cat"  size={"100"}/>
      </HStack>
      <HStack>
      <Image resizeMode="contain" source={require('../assets/cat1.png')} alt="Picture of a Cat"  size={"100"}/>
      <Box bg={COLORS.ACCENT}>Hola</Box>
      </HStack>
      </View>
}