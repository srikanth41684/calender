import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import moment from 'moment';
import DatePicker from 'react-native-date-picker';

const TopTabNav = props => {
  const [commObj, setCommObj] = useState({
    fromDate: new Date(props.route.params.date),
    toDate: moment(new Date()).format('YYYY-MM-DD'),
    reason: null,
  });
  useEffect(() => {
    console.log('TopTabNav commObj-------->', commObj);
  }, [commObj]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 15,
          paddingBottom: 20,
        }}>
        <View
          style={{
            flex: 1,
            paddingTop: 30,
            gap: 15,
          }}>
          <View
            style={{
              alignItems: 'center',
              paddingVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#000',
                fontWeight: 'bold',
              }}>
              Apply Leave
            </Text>
          </View>
          <View
            style={{
              borderWidth: 0.5,
              borderColor: 'blue',
              borderRadius: 8,
              paddingLeft: 10,
              paddingVertical: 5,
            }}>
            <Text
              style={{
                fontSize: 12,
                color: '#777777',
              }}>
              Start Date :
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: '#000000',
              }}>
              {moment(commObj.fromDate).format('MMMM DD, YYYY')}
            </Text>
          </View>
          <View
            style={{
              borderWidth: 0.5,
              borderColor: 'blue',
              borderRadius: 8,
              paddingLeft: 10,
              paddingVertical: 5,
            }}>
            <Text
              style={{
                fontSize: 12,
                color: '#777777',
              }}>
              End Date :
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: '#000000',
              }}>
              {moment(commObj.toDate).format('MMMM DD, YYYY')}
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 12,
                color: '#777777',
                paddingBottom: 5,
              }}>
              Reason for a leave
            </Text>
            <TextInput
              value={commObj.reason}
              multiline={true}
              numberOfLines={10}
              style={{
                height: 90,
                textAlignVertical: 'top',
                borderWidth: 0.5,
                borderColor: 'blue',
                borderRadius: 8,
                paddingLeft: 10,
              }}
              placeholder="Enter reason for a Leave"
              onChangeText={text => {
                setCommObj(prev => ({
                  ...prev,
                  reason: text,
                }));
              }}
            />
          </View>
        </View>
        <TouchableWithoutFeedback>
          <View
            style={{
              paddingVertical: 10,
              alignItems: 'center',
              backgroundColor: 'blue',
              borderRadius: 8,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#fff',
                fontWeight: 'bold',
              }}>
              Apply Leave
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

export default TopTabNav;
