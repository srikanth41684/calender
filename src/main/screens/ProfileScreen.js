import {View, Text, SafeAreaView, TouchableWithoutFeedback} from 'react-native';
import React, {useEffect, useState} from 'react';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';

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
          backgroundColor: '#F4F7FE',
        }}>
        <View>
          <Text
            style={{
              color: '#000',
            }}>
            ProfileScreen
          </Text>
          <View
            style={{
              backgroundColor: '#ffffff',
              paddingBottom: 20,
              paddingTop: 10,
              borderRadius: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <TouchableWithoutFeedback
                onPress={() => {
                  leftHandler();
                }}>
                <View
                  style={{
                    padding: 10,
                  }}>
                  <Icon
                    name="angle-left"
                    size={30}
                    color={'gray'}
                    style={{
                      paddingHorizontal: 10,
                      marginLeft: -10,
                    }}
                  />
                </View>
              </TouchableWithoutFeedback>
              <View
                style={{
                  alignItems: 'center',
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
              <TouchableWithoutFeedback
                onPress={() => {
                  rightHandler();
                }}>
                <View
                  style={{
                    padding: 10,
                  }}>
                  <Icon
                    name="angle-right"
                    size={30}
                    color={'gray'}
                    style={{
                      paddingHorizontal: 10,
                    }}
                  />
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
                          width: 45,
                          height: 50,
                          backgroundColor:
                            item.date === commObj.selectedDate
                              ? 'lightgreen'
                              : '#ffffff',
                          borderRadius: 10,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{
                            color: '#000',
                            fontSize: 12,
                          }}>
                          {moment(item.date).format('ddd')}
                        </Text>
                        <Text
                          style={{
                            color: '#000',
                            fontSize: 16,
                            fontWeight: 'bold',
                          }}>
                          {moment(item.date).format('DD')}
                        </Text>
                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                );
              })}
            </View>
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
    </SafeAreaView>
  );
};

export default ProfileScreen;
