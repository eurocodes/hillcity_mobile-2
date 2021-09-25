import styled from "styled-components/native";
import { colors } from "./colors";

export const SettingsContainer = styled.SafeAreaView`
flex: 1;
background-color: ${colors.settingsBackground};
`;

export const PageTopView = styled.View`
  padding: 25px 20px;
  flex-direction: row;
  justify-content: space-between;
  `;

export const SettingsContent = styled.View`
padding: 0 20px;
`;

export const SettingsTouch = styled.TouchableOpacity`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 10px 0;
`;

export const SettingsSwitch = styled.View`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 10px 0;
`;

export const Switch = styled.Switch`
display: flex;
align-items: center;
justify-content: center;
`;

export const UnderLine = styled.View`
border: 1px ${props => props.colors} solid;
align-self: center;
margin: 15px 0;
width: 100%;
`;

export const SettingsText = styled.Text`
color: ${colors.settingsText};
font-size: 15px;
`;

export const SettingsHeader = styled.Text`
font-size: 30px;
font-weight: bold;
margin-bottom: 40px;
color: ${colors.settingsText};
`;

export const SettingsHeaderText = styled.Text`
font-size: 30px;
font-weight: bold;
margin-bottom: 40px;
color: ${colors.settingsText};
`;