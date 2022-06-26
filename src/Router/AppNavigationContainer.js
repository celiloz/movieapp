import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator, CreateStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Index from '../Screens/index';
import View from '../Screens/view';

import { faHome } from '@fortawesome/free-solid-svg-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='index'>
        <Stack.Screen 
        options={{
          headerShown:false
        }}
        name='index' component={Index} />
        <Stack.Screen 
        options={{
          headerShown:false
        }}
        name='view' component={View} />
    </Stack.Navigator>
  );
};

const AppTabs = () => {
  return(
    <Tab.Navigator initialRouteName='index'>
      <Tab.Screen name='Home'
      component={HomeStack}
      options={{
        headerShown: false,
        tabBarIcon: ({color,size}) => (
          <FontAwesomeIcon icon={faHome} color={color} size={size} />
        ),
      }}
      />
    </Tab.Navigator>
  )
}

const AppNavigationContainer = () => {
    return(
        <AppTabs />
    )
}

export default AppNavigationContainer