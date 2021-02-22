import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { StatusBar } from 'expo-status-bar';
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import SocialButton from "../components/SocialButton";

import * as Google from "expo-google-app-auth";
import { ANDROID_CLIENT_ID, IOS_CLIENT_ID } from "../ApiKeys";
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



    return (
        <SafeAreaView>
            <StatusBar backgroundColor='#2e64e5' style='light' />
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
                onPress={() => { }}
            />
            <SocialText>Or</SocialText>

            <SocialButton
                buttonTitle="Sign In with Facebook"
                btnType="facebook"
                color="#4867aa"
                backgroundColor="#e6eaf4"
                onPress={() => { }}
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
