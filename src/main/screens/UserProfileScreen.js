import {View, Text, SafeAreaView, TouchableWithoutFeedback} from 'react-native';
import React from 'react';

const UserProfileScreen = () => {
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
            paddingTop: 30,
            gap: 15,
          }}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                backgroundColor: 'lightgray',
              }}></View>
          </View>
          <View
            style={{
              alignItems: 'center',
              gap: 5,
            }}>
            <Text
              style={{
                fontSize: 18,
                lineHeight: 25,
                color: '#000',
                fontWeight: 'bold',
              }}>
              Srikanth Usnagiri
            </Text>
            <Text
              style={{
                fontSize: 16,
                lineHeight: 23,
                color: '#000',
              }}>
              Junior Frontend Engineer
            </Text>
          </View>
          <TouchableWithoutFeedback>
            <View
              style={{
                backgroundColor: '#3085FE',
                paddingVertical: 10,
                alignItems: 'center',
                borderRadius: 8,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 23,
                  color: '#fff',
                  fontWeight: 'bold',
                }}>
                Edit Profile
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View
          style={{
            flex: 1,
          }}></View>
      </View>
    </SafeAreaView>
  );
};

export default UserProfileScreen;
