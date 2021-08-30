import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import { UserContext } from '../helpers/userContext';
import SingleEngagement from '../screens/SingleEngagement';
import CreateEngagement from '../screens/CreateEngagement';

const Stack = createStackNavigator();

const StackNavigator = () => {
    const { userData } = React.useContext(UserContext)

    return (
        <Stack.Navigator
            initialRouteName={userData === null ? "Login Screen" : "Home Screen"}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Login Screen" component={LoginScreen} />
            <Stack.Screen name="Home Screen" component={HomeScreen} />
            <Stack.Screen name="Create Engagement" component={CreateEngagement} />
            <Stack.Screen name="Single Engagement" component={SingleEngagement} />
        </Stack.Navigator>
    )
}

export default StackNavigator;