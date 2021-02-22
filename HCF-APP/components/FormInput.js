import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { IconStyle, InputContainer, SecureTextIcon, TextInput } from './component.element';

const { width, height } = Dimensions.get('window');

const FormInput = ({ labelValue, placeholderText, iconType, display, hideSecure, showSecure, danger, ...rest }) => {

    const [show, setShow] = useState(false);

    const handleIconPress = () => {
        setShow(!show)
    }

    return (
        <InputContainer border={danger} height={`${height / 15}px`}>
            <IconStyle>
                <AntDesign name={iconType} size={25} color="#666" />
            </IconStyle>
            <TextInput
                numberOfLines={1}
                value={labelValue}
                placeholder={placeholderText}
                placeholderTextColor="#666"
                secureTextEntry={!show}
                {...rest}
            />
            <SecureTextIcon display={display} onPress={handleIconPress}>
                {!show ? <Ionicons name={hideSecure} size={25} color="#666" /> :
                    <Ionicons name={showSecure} size={25} color="#666" />}
            </SecureTextIcon>
        </InputContainer>
    )
}

export default FormInput
