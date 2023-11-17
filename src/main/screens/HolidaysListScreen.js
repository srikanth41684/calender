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
            borderLeftColor: '#3085FE',
            borderLeftWidth: 15,
            paddingLeft: 10,
            paddingRight: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                paddingBottom: 10,
                alignItems: 'center',
              }}>
              <Icon name="calendar" size={30} color={'#000'} />
              <View
                style={{
                  paddingTop: 5,
                }}>
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
              <Text
                style={{
                  fontSize: 14,
                  lineHeight: 21,
                  color: '#777777',
                }}>
                Thursday
              </Text>
            </View>
          </View>
          <View
            style={{
              paddingLeft: 5,
            }}>
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
