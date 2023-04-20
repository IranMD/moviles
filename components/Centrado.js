import React from "react";
import {VStack, Heading, Stack, Center, Divider, ScrollView, Button} from "native-base";

export default function Centrado(){
    return <Center  w="100%" h="100%" bg="primary.400" p="20">
        <VStack  space={2} _alignItems={{base: "center", md: "text-start" }} >
        <Button
            colorScheme="primary"
            onPress={()=>{
                console.log('HOLA')
            }}
        
        >
            Primary
        </Button>
        
          
            
        </VStack>
        
    </Center>
    

}