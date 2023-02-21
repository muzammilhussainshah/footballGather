import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import * as React from 'react';
import ConfirmPlayers from '../../pages/ConfirmPlayers/ConfirmPlayers';
import EditPlayer from '../../pages/EditPlayer/EditPlayer';
import GetherInProgress from '../../pages/GetherInProgress/GetherInProgress';
import MyTabs from './SCBottomTabNavigator';
export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="EditPlayer" component={EditPlayer} />
      <Stack.Screen name="ConfirmPlayers" component={ConfirmPlayers} />
      <Stack.Screen name="GetherInProgress" component={GetherInProgress} />

    </Stack.Navigator>
  );
}
