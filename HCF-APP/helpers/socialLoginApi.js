import * as Google from "expo-google-app-auth";
import * as Facebook from 'expo-facebook';
import { ANDROID_CLIENT_ID, FACEBOOK_APP_ID, IOS_CLIENT_ID } from "../ApiKeys";
import { Alert } from "react-native";

export const signInWithGoogle = async () => {
    try {
        // First- obtain access token from Expo's Google API
        const { type, accessToken, user } = await Google.logInAsync({
            iosClientId: IOS_CLIENT_ID,
            androidClientId: ANDROID_CLIENT_ID,
            // iosStandaloneAppClientId: `<YOUR_IOS_CLIENT_ID>`,
            // androidStandaloneAppClientId: `<YOUR_ANDROID_CLIENT_ID>`,
            scopes: ['profile', 'email'],
        });

        if (type === 'success') {
            // console.log(user)
            // console.log(accessToken)
            return { user, accessToken };
        } else {
            return { cancelled: true };
        }
    } catch (e) {
        console.log('LoginScreen.js.js 30 | Error with login', e);
        return { error: true };
    }
};

// Facebook login
export const signinWithFacebook = async () => {
    try {
        await Facebook.initializeAsync({
            appId: FACEBOOK_APP_ID,
        });
        const {
            type,
            token,
            expirationDate,
            permissions,
            declinedPermissions,
        } = await Facebook.logInWithReadPermissionsAsync({
            permissions: ['public_profile', 'email'],
        });
        if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            const response = await fetch(`https://graph.facebook.com/me?fields=id,name,email&access_token=${token}`);
            const result = (await response.json());
            // console.log("exp:", expirationDate)
            // console.log("permissions:", permissions)
            // console.log("declind:", declinedPermissions)
            const { name, email, id } = result;
            return { "token": token, "name": name, "email": email }
            // Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
        } else {
            // type === 'cancel'
        }
    } catch ({ message }) {
        Alert.alert(`Facebook Login Error: ${message}`);
        console.log(message)
    }
}