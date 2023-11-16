import {View, Text, SafeAreaView, TouchableWithoutFeedback} from 'react-native';
import React, {useState} from 'react';

const SettingScreen = () => {
  const [commObj, setCommObj] = useState();
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          paddingHorizontal: 15,
        }}>
        <View>
          <Text>Settings</Text>
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <View
            style={{
              paddingTop: 20,
              flexDirection: 'column',
              gap: 20,
            }}>
            <TouchableWithoutFeedback>
              <View
                style={{
                  paddingVertical: 5,
                }}>
                <Text>Light</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <View
                style={{
                  paddingVertical: 5,
                }}>
                <Text>Dark</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <View
                style={{
                  paddingVertical: 5,
                }}>
                <Text>System</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingScreen;
