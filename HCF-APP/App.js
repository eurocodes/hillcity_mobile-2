import 'react-native-gesture-handler';
import React, { useMemo, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './navigators/StackNavigator';
import { UserContext } from './helpers/userContext';
import DrawerNavigator from './navigators/DrawerBarContent';
import AuthNavigator from './navigators/AuthNavigator';

const Drawer = createDrawerNavigator();

function App() {

  const [userData, setUserData] = useState(null);
  const value = useMemo(() => ({ userData, setUserData }), [userData, setUserData]);

  return (
      <UserContext.Provider value={value}>
        <NavigationContainer>
          {
            userData !== null?
            <DrawerNavigator />:
            <AuthNavigator />
          }
        </NavigationContainer>
      </UserContext.Provider>
  );
}

export default App;
