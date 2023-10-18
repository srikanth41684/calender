import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNav from './BottomTabNav';

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
      </GlobalStack.Navigator>
    </>
  );
};

export default GlobalStackNav;
