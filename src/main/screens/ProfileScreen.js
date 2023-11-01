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
          paddingHorizontal: 15,
          backgroundColor: '#EFF1FE',
        }}>
        <View>
          <View
            style={{
              alignItems: 'center',
              paddingVertical: 30,
            }}>
            <Text
              style={{
                color: '#000',
                fontSize: 16,
              }}>
              ProfileScreen
            </Text>
          </View>
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
                paddingBottom: 10,
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
                    fontSize: 18,
                    lineHeight: 25,
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
                paddingHorizontal: 5,
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
                              ? '#E4E4FF'
                              : '#ffffff',
                          borderRadius: 10,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{
                            color: '#777777',
                            fontSize: 12,
                          }}>
                          {moment(item.date).format('ddd')}
                        </Text>
                        <Text
                          style={{
                            color: '#000',
                            fontSize: 16,
                            fontWeight: '500',
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
