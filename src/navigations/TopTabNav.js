import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import DetailsTeam from '../main/screens/DetailsTeam';
import YourDetails from '../main/screens/YourDetails';

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
      <View
        style={{
          flex: 1,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 16,
            color: '#000',
          }}>
          DetailsScreen: {props.route.params.date.dateString}
        </Text>
        {/* <View
          style={{
            flex: 1,
          }}>
          <TopTab.Navigator>
            <TopTab.Screen name="details" component={YourDetails} />
            <TopTab.Screen name="detailsteam" component={DetailsTeam} />
          </TopTab.Navigator>
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export default TopTabNav;
