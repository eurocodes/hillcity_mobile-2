import React, { useContext, useState } from 'react'
import { View, Text } from 'react-native'
import Feather from '@expo/vector-icons/Feather';
import { colors } from '../styles/colors';
import { PageTopView, SettingsSwitch, Switch } from '../styles/setting.element';
import { SettingsContainer, SettingsContent, SettingsHeaderText, SettingsText, SettingsTouch, UnderLine } from '../styles/setting.element';
import { StatusBar } from 'expo-status-bar';
import { UserContext } from '../helpers/userContext';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

const SettingTouch = ({label}) => {
    return(
        <SettingsTouch>
            <SettingsText>{label}</SettingsText>
            <Icon name="exit-to-app" color='#767577' size={25} />
        </SettingsTouch>
    )
}

const SettingSwitch = ({label}) => {
    const { userData, setUserData } = useContext(UserContext);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return(
        <SettingsSwitch>
            <SettingsText>{label}</SettingsText>
            <Switch 
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
             />
        </SettingsSwitch>
    )
}
export const SettingsScreen = ({navigation}) => {
    return (
        <SettingsContainer>
            <StatusBar style="dark" />
            <PageTopView>
                    <Feather 
                    onPress={() => navigation.goBack()} 
                    name="arrow-left" size={25} style={{ color: "#1c1c1c", }} 
                    />
                </PageTopView>
            <SettingsContent>
                <SettingsHeaderText>Settings</SettingsHeaderText>
                <UnderLine color={colors.settings_underline} />
                <SettingSwitch label={"Turn On Notification"} />
                <UnderLine color={colors.settings_underline} />
                <SettingTouch label={"Sign Out"}/>
                <UnderLine color={colors.settings_underline} />
            </SettingsContent>
        </SettingsContainer>
    )
}
