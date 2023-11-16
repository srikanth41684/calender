import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../main/screens/HomeScreen';
import ProfileScreen from '../main/screens/ProfileScreen';
import LeavesScreen from '../main/screens/LeavesScreen';
import HolidaysListScreen from '../main/screens/HolidaysListScreen';

const BottomTab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <BottomTab.Screen
        name="profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      {/* <BottomTab.Screen
        name="leaves"
        component={LeavesScreen}
        options={{headerShown: false}}
      /> */}
      {/* <BottomTab.Screen
        name="holiday"
        component={HolidaysListScreen}
        options={{headerShown: false}}
      /> */}
    </BottomTab.Navigator>
  );
};

export default BottomTabNav;
