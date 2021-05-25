import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Carteira from '../src/Pages/Carteira'
import Perfil from '../src/Pages/Perfil'
import PerfilUser from '../src/Pages/PerfilUser'
import PerfilEditName from '../src/Pages/PerfilEditName'
import GenerateVoucher from '../src/Pages/GenerateVoucher'
import ViewVoucher from '../src/Pages/ViewVoucher'
import List from '../src/Pages/List'
import ListAdm from '../src/Pages/ListAdm'

const Stack = createStackNavigator();

export default function Routes() {
  function RootStack() {
    return (
      <Stack.Navigator initialRouteName={"Carteira"} screenOptions={{ headerShown: true, animationEnabled: false }}>
        <Stack.Screen name="Carteira" component={Carteira} options={{ title: '', headerShown: false, }} />
        <Stack.Screen name="Perfil" component={Perfil} options={{ title: '', headerShown: false, }} />
        <Stack.Screen name="PerfilUser" component={PerfilUser} options={{ title: '', headerShown: false, }} />
        <Stack.Screen name="PerfilEditName" component={PerfilEditName} options={{ title: '', headerShown: false, }} />
        <Stack.Screen name="GenerateVoucher" component={GenerateVoucher} options={{ title: '', headerShown: false, }} />
        <Stack.Screen name="ViewVoucher" component={ViewVoucher} options={{ title: '', headerShown: false, }} />
        <Stack.Screen name="List" component={List} options={{ title: '', headerShown: false, }} />
        <Stack.Screen name="ListAdm" component={ListAdm} options={{ title: '', headerShown: false, }} />
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











