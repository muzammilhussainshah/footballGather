import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Players from '../../pages/Players/Players';
import PastGathers from '../../pages/PastGathers/PastGathers';
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
      screenOptions={{ headerShown: false }}
      // initialRouteName='PastGathers'
    > 
      <Stack.Screen name="MyTabs" component={MyTabs} />
    </Stack.Navigator>
  );
}
