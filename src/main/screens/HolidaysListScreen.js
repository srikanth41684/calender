import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';

const HolidaysListScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 15,
          backgroundColor: '#EFF1FE',
        }}>
        <View
          style={{
            paddingVertical: 20,
          }}>
          <Text
            style={{
              fontSize: 18,
              lineHeight: 25,
              color: '#000',
              fontWeight: 'bold',
            }}>
            Holidays List
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HolidaysListScreen;
