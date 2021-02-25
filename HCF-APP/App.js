import React, { useMemo, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigators/StackNavigator';
import { UserContext } from './helpers/userContext';

function App() {

  const [userData, setUserData] = useState(null);
  const value = useMemo(() => ({ userData, setUserData }), [userData, setUserData])
  return (
    <NavigationContainer>
      <UserContext.Provider value={value}>
        <StackNavigator />
      </UserContext.Provider>
    </NavigationContainer>
  );
}

export default App;
