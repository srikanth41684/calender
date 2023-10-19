import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const TopTab = createMaterialTopTabNavigator();

const TopTabNav = props => {
  useEffect(() => {
    console.log('TopTabNav props-------->', props);
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 16,
            color: '#000',
          }}>
          DetailsScreen: {props.route.params.date.dateString}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default TopTabNav;
