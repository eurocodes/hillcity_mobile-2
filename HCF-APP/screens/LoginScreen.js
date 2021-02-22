import React, { useState } from "react";
import { View, TouchableOpacity, Alert } from "react-native";
import { StatusBar } from 'expo-status-bar';
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import SocialButton from "../components/SocialButton";
import * as Google from "expo-google-app-auth";
import * as Facebook from 'expo-facebook';
import { ANDROID_CLIENT_ID, FACEBOOK_APP_ID, IOS_CLIENT_ID } from "../ApiKeys";
import { SafeAreaView, Text, Image, ForgotPasswordText, SocialText } from "../styles/login.elements";


export default function LoginScreen({ navigation }) {

    const [input, setInput] = useState({
        email: '',
        password: '',
        check_textInputChange: false,
        isValidEmail: true,
        isValidPassword: true,
    });


    const emailInputChange = (val) => {
        if (/^[\S]+\.?[\d]?@{1}[\w]+\.\w{2,}$/gi.test(val)) {
            setInput({
                ...input,
                email: val,
                check_textInputChange: true,
            })
        } else {
            setInput({
                ...input,
                email: val,
                check_textInputChange: false,
                isValidEmail: false,
            })
        }
    };

    const handlePasswordChange = (val) => {
        if (val.trim().length >= 6) {
            setInput({
                ...input,
                password: val,
                isValidPassword: true,
            });
        } else {
            setInput({
                ...input,
                password: val,
                isValidPassword: false,
            })
        }
    };

    const signInWithGoogle = async () => {
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
                console.log(user)
                // return result.accessToken;

                navigation.navigate("Home Screen", {
                    username: user.name
                }); //after Google login redirect to Profile
            } else {
                return { cancelled: true };
            }
        } catch (e) {
            console.log('LoginScreen.js.js 30 | Error with login', e);
            return { error: true };
        }
    };

    // Facebook login
    async function signinWithFacebook() {
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
                permissions: ['public_profile'],
            });
            if (type === 'success') {
                // Get the user's name using Facebook's Graph API
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
                Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
            } else {
                // type === 'cancel'
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
    }

    const handleValidEmail = (val) => {
        if (/^[\S]+\.?[\d]?@{1}[\w]+\.\w{2,}$/gi.test(val)) {
            setInput({
                ...input,
                isValidEmail: true,
            })
        } else {
            setInput({
                ...input,
                isValidEmail: false,
            })
        }
    };

    const handleValidPassword = (val) => {
        if (val.trim().length >= 6) {
            setInput({
                ...input,
                isValidPassword: true,
            })
        } else {
            setInput({
                ...input,
                isValidPassword: false,
            })
        }
    };

    const handleEmailSignin = () => {
        handleValidEmail(input.email);
        handleValidPassword(input.password);
    }



    return (
        <SafeAreaView>
            <StatusBar style='auto' />
            <Image
                imageStyle={{ resizeMode: 'cover' }}
                source={require("../assets/logo.png")}
            />

            <Text>HillCity Mentorship</Text>

            <FormInput
                onChangeText={(val) => emailInputChange(val)}
                onEndEditing={(e) => handleValidEmail(e.nativeEvent.text)}
                labelValue={input.email}
                placeholderText="Email"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                display="none"
                danger={input.isValidEmail ? "#ccc" : "#ff0000"}
                autoCorrect={false}
            />

            <FormInput
                onChangeText={(val) => handlePasswordChange(val)}
                onEndEditing={(e) => handleValidPassword(e.nativeEvent.text)}
                labelValue={input.password}
                placeholderText="Password"
                iconType="lock"
                hideSecure="eye-off-outline"
                showSecure="eye-outline"
                display="flex"
                danger={input.isValidPassword ? "#ccc" : "#ff0000"}
            />

            <View style={{ width: "100%", alignItems: "flex-end" }}>
                <TouchableOpacity
                    onPress={() => { }}
                    style={{ marginBottom: 25 }}>
                    <ForgotPasswordText>Forgot Password?</ForgotPasswordText>
                </TouchableOpacity>
            </View>

            <FormButton
                buttonTitle="Sign In with Email"
                onPress={handleEmailSignin}
            />
            <SocialText>Or</SocialText>

            <SocialButton
                buttonTitle="Sign In with Facebook"
                btnType="facebook"
                color="#4867aa"
                backgroundColor="#e6eaf4"
                onPress={signinWithFacebook}
            />

            <SocialButton
                buttonTitle="Sign In with Google"
                btnType="google"
                color="#de4d41"
                backgroundColor="#f5e7ea"
                onPress={signInWithGoogle}
            />

        </SafeAreaView>
    );
}
