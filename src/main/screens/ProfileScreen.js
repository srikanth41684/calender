import {View, Text, SafeAreaView, TouchableWithoutFeedback} from 'react-native';
import React, {useEffect, useState} from 'react';
import moment from 'moment';

const ProfileScreen = () => {
  const [commObj, setCommObj] = useState({
    dateWeeks: [],
    selectedDate: moment().format('YYYY-MM-DD'),
  });

  useEffect(() => {
    getWeeksDatesHandler();
  }, []);

  function getWeeksDatesHandler() {
    let currentDate = moment();
    let weekArr = [];
    for (let i = 0; i < 7; i++) {
      let day = currentDate.clone().day(i);
      weekArr.push({
        date: day.format('YYYY-MM-DD'),
      });
    }
    setCommObj(prev => ({
      ...prev,
      dateWeeks: weekArr,
    }));
  }

  const leftHandler = () => {
    let currentDate = moment(commObj.dateWeeks[0].date);
    let convertedDate = currentDate.subtract(1, 'days');
    let weekData = [];
    for (let i = 0; i < 7; i++) {
      let day = convertedDate.clone().subtract(i, 'days');
      weekData.push({
        date: day.format('YYYY-MM-DD'),
      });
    }

    setCommObj(prev => ({
      ...prev,
      dateWeeks: weekData.reverse(),
    }));
  };

  const rightHandler = () => {
    let currentDate = moment(commObj.dateWeeks[6].date);
    let convertedDate = currentDate.add(1, 'days');
    let weekData = [];
    for (let i = 0; i < 7; i++) {
      let day = convertedDate.clone().add(i, 'days');
      weekData.push({
        date: day.format('YYYY-MM-DD'),
      });
    }

    setCommObj(prev => ({
      ...prev,
      dateWeeks: weekData,
    }));
  };

  useEffect(() => {
    console.log('Profile-commObj----->', commObj);
  }, [commObj]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
        }}>
        <View>
          <Text
            style={{
              color: '#000',
            }}>
            ProfileScreen
          </Text>
          <View>
            <View
              style={{
                alignItems: 'center',
                paddingTop: 20,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  lineHeight: 27,
                  fontWeight: 'bold',
                  color: '#000000',
                }}>
                {moment(commObj.selectedDate).format('MMMM')}{' '}
                {moment(commObj.selectedDate).year()}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
              }}>
              <TouchableWithoutFeedback
                onPress={() => {
                  leftHandler();
                }}>
                <View
                  style={{
                    padding: 10,
                  }}>
                  <Text
                    style={{
                      color: '#000',
                    }}>
                    left
                  </Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() => {
                  rightHandler();
                }}>
                <View
                  style={{
                    padding: 10,
                  }}>
                  <Text
                    style={{
                      color: '#000',
                    }}>
                    right
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              {commObj.dateWeeks.map((item, index) => {
                return (
                  <View key={index}>
                    <TouchableWithoutFeedback
                      onPress={() => {
                        setCommObj(prev => ({
                          ...prev,
                          selectedDate: item.date,
                        }));
                      }}>
                      <View
                        style={{
                          backgroundColor:
                            item.date === commObj.selectedDate
                              ? 'lightgreen'
                              : '#ffffff',
                          paddingHorizontal: 10,
                          paddingVertical: 10,
                          borderRadius: 10,
                        }}>
                        <Text
                          style={{
                            color: '#000',
                          }}>
                          {moment(item.date).format('ddd')}
                        </Text>
                        <Text
                          style={{
                            color: '#000',
                          }}>
                          {moment(item.date).format('DD')}
                        </Text>
                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                );
              })}
            </View>
            <View
              style={{
                paddingTop: 20,
                paddingLeft: 10,
              }}>
              <Text
                style={{
                  color: '#000',
                  fontSize: 18,
                }}>
                {commObj.selectedDate}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
