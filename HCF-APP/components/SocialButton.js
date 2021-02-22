import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { BtnTxtWrapper, ButtonText, IconWrapper, SocialButtonTouchable } from './component.element';

const { height, width } = Dimensions.get('window');

const SocialButton = ({ buttonTitle, btnType, color, backgroundColor, ...rest }) => {
    let bgColor = backgroundColor;
    return (
        <SocialButtonTouchable
            height={`${height / 15}px`}
            bgColor={bgColor}
            {...rest}>
            <IconWrapper>
                <FontAwesome name={btnType} size={22} color={color} style={{ fontWeight: 'bold' }} />
            </IconWrapper>
            <BtnTxtWrapper>
                <ButtonText color={color}>{buttonTitle}</ButtonText>
            </BtnTxtWrapper>
        </SocialButtonTouchable>
    )
}

export default SocialButton;
