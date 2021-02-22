import React from 'react';
import { Dimensions } from 'react-native';
import { ButtonText, FormButtonTouchable } from './component.element';

const { height } = Dimensions.get('window');

const FormButton = ({ buttonTitle, ...rest }) => {
    return (
        <FormButtonTouchable height={`${height / 15}px`} {...rest}>
            <ButtonText color="#fff">{buttonTitle}</ButtonText>
        </FormButtonTouchable>
    )
}

export default FormButton;