import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNav from './BottomTabNav';
import TopTabNav from './TopTabNav';

const GlobalStack = createNativeStackNavigator();

const GlobalStackNav = () => {
  return (
    <>
      <GlobalStack.Navigator>
        <GlobalStack.Screen
          name="bottomTab"
          component={BottomTabNav}
          options={{headerShown: false}}
        />
        <GlobalStack.Screen
          name="toptab"
          component={TopTabNav}
          options={{headerShown: false}}
        />
      </GlobalStack.Navigator>
    </>
  );
};

export default GlobalStackNav;
