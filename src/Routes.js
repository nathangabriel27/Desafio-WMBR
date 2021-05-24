import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Carteira from '../src/Pages/Carteira'
import Perfil from '../src/Pages/Perfil'

const Stack = createStackNavigator();

export default function Routes() {
  function RootStack() {
    return (
      <Stack.Navigator initialRouteName={"Carteira"} screenOptions={{ headerShown: true, animationEnabled: false }}>
        <Stack.Screen name="Carteira" component={Carteira} options={{ title: '', headerShown: false, }} />
        <Stack.Screen name="Perfil" component={Perfil} options={{ title: '', headerShown: false, }} />
      </Stack.Navigator >
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true, animationEnabled: false }}>
        <Stack.Screen
          name="RootStack"
          component={RootStack}
          options={{ headerShown: false, }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}











