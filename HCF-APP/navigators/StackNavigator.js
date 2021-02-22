import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Login Screen"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Login Screen" component={LoginScreen} />
            <Stack.Screen name="Home Screen" component={HomeScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigator;