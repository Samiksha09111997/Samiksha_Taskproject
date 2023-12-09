import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Import Screens

import LoginBlock from './screen/src/LoginPage'
import Myprofile from './screen/src/MyProfile'
const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginBlock">
        {/* SplashScreen which will come once for 5 Seconds */}
        
         <Stack.Screen
          name="LoginBlock"
          component={LoginBlock}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Myprofile"
          component={Myprofile}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        />
         
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;