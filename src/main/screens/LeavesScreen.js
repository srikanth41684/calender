import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';

const LeavesScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 15,
        }}>
        <View>
          <Text
            style={{
              fontSize: 16,
              lineHeight: 23,
              fontWeight: 'bold',
              color: '#000',
            }}>
            All Leaves
          </Text>
        </View>
        <View
          style={{
            gap: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              gap: 15,
            }}>
            <View
              style={{
                flex: 1,
                borderColor: '#4fa3f7',
                borderWidth: 0.5,
                backgroundColor: '#dcebfa',
                padding: 15,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 23,
                  color: '#000',
                  fontWeight: 'bold',
                  paddingBottom: 15,
                }}>
                Leave Balance
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  lineHeight: 25,
                  color: 'blue',
                  fontWeight: 'bold',
                }}>
                18
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                borderColor: '#4fa3f7',
                borderWidth: 0.5,
                backgroundColor: '#dcebfa',
                padding: 15,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 23,
                  color: '#000',
                  fontWeight: 'bold',
                  paddingBottom: 15,
                }}>
                Leave Approved
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  lineHeight: 25,
                  color: 'blue',
                  fontWeight: 'bold',
                }}>
                02
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 15,
            }}>
            <View
              style={{
                flex: 1,
                borderColor: '#4fa3f7',
                borderWidth: 0.5,
                backgroundColor: '#dcebfa',
                padding: 15,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 23,
                  color: '#000',
                  fontWeight: 'bold',
                  paddingBottom: 15,
                }}>
                Leave Pending
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  lineHeight: 25,
                  color: 'blue',
                  fontWeight: 'bold',
                }}>
                01
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                borderColor: '#4fa3f7',
                borderWidth: 0.5,
                backgroundColor: '#dcebfa',
                padding: 15,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 23,
                  color: '#000',
                  fontWeight: 'bold',
                  paddingBottom: 15,
                }}>
                Leave Cancled
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  lineHeight: 25,
                  color: 'blue',
                  fontWeight: 'bold',
                }}>
                03
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LeavesScreen;
