import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Perfil from './screens/Perfil';
import Inicial from './screens/Inicial';
import Ajuda from './screens/Ajuda';
import Treino from './screens/Treino';
import Login from './screens/Login';


const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
        name="Inicial" 
        component={Inicial}
        options={{
          title: 'Inicio'
        }}
        />
        <Stack.Screen name="Perfil" component={Perfil}/>
        <Stack.Screen name="Ajuda" component={Ajuda}/>
        <Stack.Screen 
        name="Treino" 
        component={Treino}
        options={{
          title: 'Vamos começar'
        }}
        />
        <Stack.Screen 
        name="Login" 
        component={Login}
        options={{
          title: 'Guppi'
        }}
        />
      </Stack.Navigator>
    );
  }


  export default function App() {
    return (
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
    );
  }