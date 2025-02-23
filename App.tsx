import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {createNativeStackNavigator}
 from '@react-navigation/native-stack';

 import {NavigationContainer, useNavigation} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

const Stack= createNativeStackNavigator
();

const App = () => {
return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen name='HOME' component={HomeScreen}/>
        <Stack.Screen name='LOGIN' component={LoginScreen}/>
        <Stack.Screen name='SIGNUP' component={SignupScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
}

export default App;

