import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';

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
        <View
          style={{
            backgroundColor: '#fff',
            paddingVertical: 15,
            borderRadius: 15,
            borderLeftColor: 'red',
            borderLeftWidth: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View>
                <Icon name="calendar" size={30} color={'#000'} />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    lineHeight: 23,
                    color: '#000',
                    fontWeight: '500',
                  }}>
                  January 26, 2023
                </Text>
              </View>
            </View>
            <View>
              <Text>Thursday</Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontSize: 18,
                lineHeight: 25,
                color: '#000',
                fontWeight: 'bold',
                letterSpacing: 1,
              }}>
              Republic Day
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HolidaysListScreen;
