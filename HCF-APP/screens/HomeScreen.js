import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { Button, StyledText, StyledView } from '../styles/globalStyle';
import * as Google from 'expo-google-app-auth';
import { ANDROID_CLIENT_ID, IOS_CLIENT_ID } from '../ApiKeys';

const config = {
    iosClientId: IOS_CLIENT_ID,
    androidClientId: ANDROID_CLIENT_ID,
    // iosStandaloneAppClientId: `<YOUR_IOS_CLIENT_ID>`,
    // androidStandaloneAppClientId: `<YOUR_ANDROID_CLIENT_ID>`,
};

export default function HomeScreen({ route, navigation }) {

    const googleSignout = async () => {
        const { type, accessToken } = await Google.logInAsync(config);

        if (type === 'success') {
            /* Log-Out */
            await Google.logOutAsync({ accessToken, ...config });
            /* `accessToken` is now invalid and cannot be used to get data from the Google API with HTTP requests */
            navigation.navigate("Login Screen")
        }
    }

    // Define what props.theme will look like
    // const theme = {
    //     fg: "mediumseagreen",
    //     bg: "white"
    // };

    // // We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
    // const invertedTheme = ({ fg, bg }) => ({
    //     fg: bg,
    //     bg: fg
    // })

    const { username } = route.params;

    return (
        <StyledView>
            <StyledText>Welcome {username}</StyledText>
            <StyledText>Nothing to show yet. Check back later</StyledText>
            <Button onPress={googleSignout} >
                <StyledText>Sign out</StyledText>
            </Button>
        </StyledView>
    )
}
