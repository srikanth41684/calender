import {
  View,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  Modal,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Feather';
import {Calendar} from 'react-native-calendars';

const ProfileScreen = ({navigation}) => {
  const [commObj, setCommObj] = useState({
    dateWeeks: [],
    selectedDate: moment().format('YYYY-MM-DD'),
    openCalender: false,
    initialDate: null,
  });

  useEffect(() => {
    getWeeksDatesHandler();
  }, []);

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = moment(currentDate).format('YYYY-MM-DD');
    setCommObj(prev => ({
      ...prev,
      selectedDate: formattedDate,
    }));
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
      console.log(day);
      weekData.push({
        date: day.format('YYYY-MM-DD'),
      });
    }

    setCommObj(prev => ({
      ...prev,
      dateWeeks: weekData,
    }));
  };

  const dateChangeHandler = date => {
    let currentDate = moment(date);
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
      openCalender: false,
      selectedDate: date,
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
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('welcome');
          }}>
          <View>
            <Text>Wellcome</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('setting');
          }}>
          <View>
            <Text>Setting</Text>
          </View>
        </TouchableWithoutFeedback>
        {/* <View
          style={{
            flex: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
              }}>
              <View
                style={{
                  width: 55,
                  height: 55,
                  borderRadius: 55 / 2,
                  backgroundColor: 'lightgray',
                }}></View>
              <View>
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#000',
                      lineHeight: 23,
                    }}>
                    Srikanth Usnagiri
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#777777',
                      lineHeight: 21,
                    }}>
                    Junior Frontend Engineer
                  </Text>
                </View>
              </View>
            </View>
            <TouchableWithoutFeedback>
              <View
                style={{
                  backgroundColor: '#fff',
                  width: 40,
                  height: 40,
                  borderRadius: 40 / 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon
                  name="bell"
                  size={20}
                  color={'#000'}
                  style={{
                    paddingHorizontal: 10,
                  }}
                />
              </View>
            </TouchableWithoutFeedback>
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
                    name="arrow-left"
                    size={30}
                    color={'gray'}
                    style={{
                      paddingHorizontal: 10,
                    }}
                  />
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() => {
                  setCommObj(prev => ({
                    ...prev,
                    openCalender: true,
                  }));
                }}>
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
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() => {
                  rightHandler();
                }}>
                <View
                  style={{
                    padding: 10,
                  }}>
                  <Icon
                    name="arrow-right"
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
              paddingTop: 15,
            }}>
            <View
              style={{
                paddingVertical: 10,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 23,
                  color: '#000',
                  fontWeight: 'bold',
                }}>
                Today Attendence
              </Text>
            </View>
            <View
              style={{
                gap: 20,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: '#ffffff',
                  borderRadius: 8,
                  padding: 15,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                  }}>
                  <View
                    style={{
                      backgroundColor: 'lightblue',
                      paddingVertical: 10,
                      borderRadius: 10,
                    }}>
                    <Icon
                      name="log-in"
                      size={15}
                      color={'blue'}
                      style={{
                        paddingHorizontal: 10,
                      }}
                    />
                  </View>
                  <View style={{}}>
                    <Text
                      style={{
                        fontSize: 16,
                        lineHeight: 23,
                        fontWeight: 'bold',
                        color: '#000',
                      }}>
                      Check In
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        lineHeight: 21,
                        color: '#777777',
                      }}>
                      Nov 06, 2023
                    </Text>
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      lineHeight: 23,
                      fontWeight: 'bold',
                      color: '#000',
                    }}>
                    9:24 AM
                  </Text>
                  <View>
                    <Text
                      style={{
                        fontSize: 14,
                        lineHeight: 21,
                        color: '#777777',
                      }}>
                      On Time
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: '#ffffff',
                  borderRadius: 8,
                  padding: 15,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                  }}>
                  <View
                    style={{
                      backgroundColor: 'lightblue',
                      paddingVertical: 10,
                      borderRadius: 10,
                    }}>
                    <Icon
                      name="log-out"
                      size={15}
                      color={'blue'}
                      style={{
                        paddingHorizontal: 10,
                      }}
                    />
                  </View>
                  <View style={{}}>
                    <Text
                      style={{
                        fontSize: 16,
                        lineHeight: 23,
                        fontWeight: 'bold',
                        color: '#000',
                      }}>
                      Check Out
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        lineHeight: 21,
                        color: '#777777',
                      }}>
                      Nov 06, 2023
                    </Text>
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      lineHeight: 23,
                      fontWeight: 'bold',
                      color: '#000',
                    }}>
                    6:46 PM
                  </Text>
                  <View>
                    <Text
                      style={{
                        fontSize: 14,
                        lineHeight: 21,
                        color: '#777777',
                      }}>
                      Go Home
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: '#ffffff',
                  borderRadius: 8,
                  padding: 15,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                  }}>
                  <View
                    style={{
                      backgroundColor: 'lightblue',
                      paddingVertical: 10,
                      borderRadius: 10,
                    }}>
                    <Icon
                      name="calendar"
                      size={15}
                      color={'blue'}
                      style={{
                        paddingHorizontal: 10,
                      }}
                    />
                  </View>
                  <View style={{}}>
                    <Text
                      style={{
                        fontSize: 16,
                        lineHeight: 23,
                        fontWeight: 'bold',
                        color: '#000',
                      }}>
                      Total Days
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        lineHeight: 21,
                        color: '#777777',
                      }}>
                      Nov 2023
                    </Text>
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      lineHeight: 23,
                      fontWeight: 'bold',
                      color: '#000',
                    }}>
                    20
                  </Text>
                  <View>
                    <Text
                      style={{
                        fontSize: 14,
                        lineHeight: 21,
                        color: '#777777',
                      }}>
                      Working Days
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            paddingBottom: 10,
          }}>
          <TouchableWithoutFeedback>
            <View
              style={{
                backgroundColor: '#314ce8',
                alignItems: 'center',
                paddingVertical: 10,
                borderRadius: 8,
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 'bold',
                  lineHeight: 23,
                }}>
                Check In
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={commObj.openCalender}
          onRequestClose={() => {
            setModalVisible(false);
          }}>
          <TouchableWithoutFeedback
            onPress={() => {
              setCommObj(prev => ({
                ...prev,
                openCalender: false,
              }));
            }}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 20,
                backgroundColor: 'rgba(0,0,0,0.4)',
              }}>
              <TouchableWithoutFeedback
                onPress={() => {
                  setCommObj(prev => ({
                    ...prev,
                    openCalender: true,
                  }));
                }}>
                <View
                  style={{
                    width: '100%',
                    height: 'auto',
                    padding: 5,
                    borderRadius: 10,
                    backgroundColor: '#fff',
                  }}>
                  <Calendar
                    initialDate={commObj.selectedDate}
                    enableSwipeMonths={true}
                    onDayPress={date => {
                      dateChangeHandler(date.dateString);
                    }}
                  />
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal> */}
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
