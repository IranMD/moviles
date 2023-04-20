import React from "react";
import {VStack, FormControl, Input, Button} from "native-base";
import { useState } from "react";

export default function LoginMoviles(){
    const [formData, setData] = React.useState({})
    const [errors, setErrors] = useState({})

    const validate = () => {
        if (formData.nickname == undefined || formData.password==undefined){
            setErrors({...errors, nickname : 'Nickname is required'})
            if(formData.password== undefined){
                setErrors({...errors, password : 'Password is required'})
            }
            return false
        }else if (formData.nickname.length < 6 || formData.password.length < 8){
            setErrors({...errors, nickname : 'Nickname is too short'})
            if(formData.password.length < 8){
                setErrors({...errors, password : 'Password is too short'})
            }return false
        }return true
        

    }

    const submit = () => {validate() ? console.log ('OK', formData) : console.log('bad', errors)} 
    
    return <VStack>
        <FormControl isRequired isInvalid={'nickname' in errors} >
            <FormControl.Label>Nickname</FormControl.Label>
            <Input p={2} placeholder="Type your nickname"  onChangeText={value=>setData({...formData, nickname:value})} color={'black'}/>
            {'nickname' in errors ?   <FormControl.ErrorMessage>{errors.nickname}
            </FormControl.ErrorMessage>
            :
            <FormControl.HelperText>  
                Nickname should contain atleast 6 character
            </FormControl.HelperText>
            }
        </FormControl>

        <FormControl isRequired isInvalid={'password' in errors}>
        <FormControl.Label>Password</FormControl.Label>
        <Input p={2} placeholder="Type your password"  onChangeText={value=>setData({...formData, password:value})} color ={'black'} type={'password'}/>
            {'password' in errors ?   <FormControl.ErrorMessage>{errors.password}
            </FormControl.ErrorMessage>
            :
            <FormControl.HelperText>  
                Password should contain atleast 8 character
            </FormControl.HelperText>
            }

        </FormControl>
        <Button
            colorScheme="primary"
            onPress={submit}
        >
            Login
        </Button>    
    </VStack>
    

}