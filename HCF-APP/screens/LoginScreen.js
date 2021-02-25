import React, { useContext, useState } from "react";
import { View, TouchableOpacity, Alert } from "react-native";
import { StatusBar } from 'expo-status-bar';
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import SocialButton from "../components/SocialButton";
import { SafeAreaView, Text, Image, ForgotPasswordText, SocialText } from "../styles/login.elements";
import { signinWithFacebook, signInWithGoogle } from "../helpers/socialLoginApi";
import { UserContext } from "../helpers/userContext";


export default function LoginScreen({ navigation }) {

    const { setUserData } = useContext(UserContext);

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
                isValidEmail: true,
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

    const handleValidEmail = (val) => {
        if (/^[\S]+\.?[\d]?@{1}[\w]+\.\w{2,}$/gi.test(val)) {
            setInput({
                ...input,
                isValidEmail: true,
            })
            return input.isValidEmail;
        } else {
            setInput({
                ...input,
                isValidEmail: false,
            })
            return input.isValidEmail;
        }
    };

    const handleValidPassword = (val) => {
        if (val.trim().length >= 6) {
            setInput({
                ...input,
                isValidPassword: true,
            })
            return input.isValidPassword;
        } else {
            setInput({
                ...input,
                isValidPassword: false,
            })
            return input.isValidPassword;
        }
    };

    const handleEmailSignin = (email, password) => {
        if (email === "") {
            setInput({
                isValidEmail: false,
            })
        }
        if (password === "") {
            setInput({
                isValidPassword: false,
            })
        }
        console.log(input.isValidEmail, input.isValidPassword)
        if (input.isValidEmail && input.isValidPassword) {
            // do something good
            Alert.alert("Accepted Inputs", email + ", " + password)
        } else if (!input.isValidEmail && !input.isValidPassword) {
            Alert.alert("Invalid Fields", "Please review email and password fields")
        } else if (!input.isValidPassword) {
            Alert.alert("Password not accepted")
        } else {
            Alert.alert("Email invalid")
        }
    }

    const googleSignin = async () => {
        const result = await signInWithGoogle();
        if (result.accessToken) {
            const { user, accessToken } = result;
            setUserData({
                name: user.name,
                email: user.email,
                token: accessToken,
            })
            navigation.navigate("Home Screen"); //after Google login redirect to Profile
        }
    }

    const facebookSignin = async () => {
        const result = await signinWithFacebook();
        if (result.token) {
            const { name, token } = result;
            setUserData({
                name: name,
                token: token,
            })
            navigation.navigate("Home Screen"); //after Facebook login redirect to Profile
        }
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
                onPress={() => handleEmailSignin(input.email, input.password)}
            />
            <SocialText>Or</SocialText>

            <SocialButton
                buttonTitle="Sign In with Facebook"
                btnType="facebook"
                color="#4867aa"
                backgroundColor="#e6eaf4"
                onPress={facebookSignin}
            />

            <SocialButton
                buttonTitle="Sign In with Google"
                btnType="google"
                color="#de4d41"
                backgroundColor="#f5e7ea"
                onPress={googleSignin}
            />

        </SafeAreaView>
    );
}
