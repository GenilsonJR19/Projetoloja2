import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {css} from './assets/css/Css'
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Home,Login,Cadastro} from './Views';

export default function App() {
 
  const Stack = createStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Home}
        options={{
          title: "Bem vindo",
          headerStyle: {backgroundColor:"#F4D7D7FF"},
          headerTintColor: "#333",
          headerTitleStyle:{fontWeight:'bold', alignSelf:'center'}


        }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        {/*<Stack.Screen name="AreaRestrita" component={AreaRestrita} />
        */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

