import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Alert, Platform } from 'react-native'
import Feather from '@expo/vector-icons/Feather';
import { colors } from '../styles/colors';
import { PageTopView, SettingsSwitch, Switch } from '../styles/setting.element';
import { SettingsContainer, SettingsContent, SettingsHeaderText, SettingsText, SettingsTouch, UnderLine } from '../styles/setting.element';
import { StatusBar } from 'expo-status-bar';
import { UserContext } from '../helpers/userContext';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import Constants from 'expo-constants'
import * as Notifications from 'expo-notifications'
// import { db } from '../helpers/firebaseConfig';

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

    useEffect(() => {
        const getToken = async () => {
            if(isEnabled){
                await registerForPushNotificationsAsync();
            }
        }
        getToken();
        return () => {
            // cleanup
        }
    }, [isEnabled])

    registerForPushNotificationsAsync = async () => {
        let token;
        if (Constants.isDevice) {
            // Check if there is permission, 
          const { status: existingStatus } = await Notifications.getPermissionsAsync();
          let finalStatus = existingStatus;
            // If no Permission ask user for permission
          if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
          }
        //   If no permission exit function
          if (finalStatus !== 'granted') {
            Alert.alert('Failed to get permission for notification!');
            return;
          }
          token = (await Notifications.getExpoPushTokenAsync()).data;
          console.log(token);
          let uid = firebase.auth().currentUser.uid();
          firebase.database().ref("users").child(uid).update({
              expoPushToken: token,
          })
        } else {
          alert('Must use physical device for Push Notifications');
        }
      
        if (Platform.OS === 'android') {
          Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
          });
        }
      
        return token;
      }

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
