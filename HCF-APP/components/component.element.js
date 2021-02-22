import styled from 'styled-components/native';

export const FormButtonTouchable = styled.TouchableOpacity`
margin-top: 10px;
width: 100%;
height: ${props => props.height};
background-color: #2e64e5;
padding: 10px;
align-items: center;
justify-content: center;
border-radius: 3px;
`;

export const SocialButtonTouchable = styled.TouchableOpacity`
flex-direction: row;
margin-top: 10px;
width: 100%;
height: ${props => props.height};
background-color: ${props => props.bgColor};
padding: 10px;
align-items: center;
justify-content: center;
border-radius: 3px;
`;

export const ButtonText = styled.Text`
font-size: 18px;
font-weight: bold;
color: ${props => props.color};
`;

export const IconWrapper = styled.View`
width: 30px;
justify-content: center;
align-items: center;
`;

export const BtnTxtWrapper = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`;

export const InputContainer = styled.View`
margin-top: 5px;
margin-bottom: 10px;
width: 100%;
height:  ${props => props.height};
border-color: ${props => props.border};
border-radius: 3px;
border-width: 1px;
flex-direction: row;
align-items: center;
background-color: #fff;
`;

export const IconStyle = styled.View`
padding: 10px;
height: 100%;
justify-content: center;
align-items: center;
border-right-color: #ccc;
border-right-width: 1px;
width: 50px;
`;

export const SecureTextIcon = styled.TouchableOpacity`
display: ${props => props.display};
padding: 10px;
height: 100%;
justify-content: center;
align-items: center;
border-right-color: #ccc;
border-right-width: 1px;
width: 50px;
`;

export const TextInput = styled.TextInput`
padding: 10px;
flex: 1;
font-size: 16px;
/* font-family: Sans-serif; */
color: #333;
justify-content: center;
align-items: center;
`;