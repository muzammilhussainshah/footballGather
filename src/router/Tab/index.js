import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,CardStyleInterpolators } from '@react-navigation/stack';
import * as React from 'react';  
import EditPlayer from '../../pages/EditPlayer/EditPlayer';
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
      // screenOptions={{ headerShown: false }} 
      screenOptions={{
        headerShown: false ,
      }}
    > 
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="EditPlayer" component={EditPlayer} />
       
    </Stack.Navigator>
  );
}
