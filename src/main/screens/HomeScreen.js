import {
  View,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Calendar} from 'react-native-calendars';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment/moment';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const customNavigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [commObj, setCommObj] = useState({
    todayDate: null,
    months: moment.months(),
    selectadDate: null,
    changedMonth: null,
    changedYear: null,
    dataInfo: null,
    markedDates: {},
    arrays: {
      fromDate: '2023-11-06',
      toDate: '2023-11-10',
      reason: 'I am taking 5 days of leave.',
    },
  });

  // initially select today's date
  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = moment(currentDate).format('YYYY-MM-DD');
    setCommObj(prev => ({
      ...prev,
      todayDate: formattedDate,
      selectadDate: formattedDate,
      changedMonth: moment(formattedDate).format('MMMM YYYY'),
      changedYear: moment(formattedDate).format('YYYY'),
    }));
    leaveDataHanlder();
  }, []);

  const leaveDataHanlder = async () => {
    let leaveData = await AsyncStorage.getItem('apply-leave');
    let data = JSON.parse(leaveData);
    setCommObj(prev => ({
      ...prev,
      dataInfo: data,
    }));
  };

  const leaveApplyHandler = date => {
    console.log('date---->', date);
    customNavigation.navigate('toptab', {
      date: date.dateString,
    });
  };

  // const updateHandler = () => {
  //   if (
  //     moment(commObj.date).format('MM') <
  //       moment(commObj.todayDate).format('MM') ||
  //     commObj.selectedYear < moment(commObj.todayDate).format('YYYY')
  //   ) {
  //     setCommObj(prev => ({
  //       ...prev,
  //       disableMonthChange: true,
  //     }));
  //   } else {
  //     setCommObj(prev => ({
  //       ...prev,
  //       disableMonthChange: false,
  //     }));
  //   }
  // };

  // const leaveApplyHandler = (day, data) => {
  //   const selectedMonth = moment().month(commObj.selectedMonth).format('MM');
  //   const selectadDate = day;
  //   const endMonth = moment().month('March').format('MM');
  //   const selectedYear = commObj.selectedYear;
  //   const currentYear = moment(commObj.todayDate).format('YYYY');
  //   if (
  //     (selectedMonth == endMonth && selectadDate > 31) ||
  //     (currentYear == selectedYear && selectedMonth > endMonth) ||
  //     (currentYear == selectedYear - 1 && selectedMonth <= endMonth)
  //   ) {
  //     console.log('yes');
  // customNavigation.navigate('toptab', {
  //   date: data,
  // });
  //   } else {
  //     console.log('No');
  //     Alert.alert('This is not current financial year....');
  //   }
  // };

  useEffect(() => {
    console.log('Home-commObj------->', commObj);
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
        <View
          style={{
            paddingTop: 30,
          }}>
          <Calendar
            initialDate={commObj.selectadDate}
            minDate="2023-04-01"
            maxDate="2024-03-31"
            dayComponent={({date, state}) => {
              let marked = false;
              let start = false;
              let end = false;
              if (commObj.dataInfo) {
                commObj.dataInfo.forEach(item => {
                  if (
                    item.fromDate <= date.dateString &&
                    date.dateString <= item.toDate
                  ) {
                    marked = true;
                  }
                  if (item.fromDate === date.dateString) {
                    start = true;
                  }
                  if (item.toDate === date.dateString) {
                    end = true;
                  }
                });
              }
              return (
                <TouchableWithoutFeedback
                  onPress={() => {
                    setCommObj(prev => ({
                      ...prev,
                      selectadDate: date.dateString,
                    }));
                    leaveApplyHandler(date);
                  }}>
                  <View
                    style={{
                      width: '100%',
                      height: 30,
                      backgroundColor: marked ? 'lightblue' : '',
                      borderTopLeftRadius: start ? 50 : 0,
                      borderBottomLeftRadius: start ? 50 : 0,
                      borderTopRightRadius: end ? 50 : 0,
                      borderBottomRightRadius: end ? 50 : 0,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    {moment(date.dateString).format('ddd') === 'Sun' ||
                    moment(date.dateString).format('ddd') === 'Sat' ? (
                      <Text
                        style={{
                          textAlign: 'center',
                          color: state === 'disabled' ? 'lightgray' : 'red',
                        }}>
                        {date.day}
                      </Text>
                    ) : (
                      <Text
                        style={{
                          textAlign: 'center',
                          color: state === 'disabled' ? 'lightgray' : 'black',
                        }}>
                        {date.day}
                      </Text>
                    )}
                  </View>
                </TouchableWithoutFeedback>
              );
            }}
            style={{}}
            theme={{}}
            renderArrow={direction =>
              direction === 'left' ? (
                <Icon
                  name="angle-left"
                  size={30}
                  color={'gray'}
                  style={{
                    paddingHorizontal: 10,
                    marginLeft: -10,
                  }}
                />
              ) : (
                <Icon
                  name="angle-right"
                  size={30}
                  color={'gray'}
                  style={{
                    paddingHorizontal: 10,
                    marginRight: -10,
                  }}
                />
              )
            }
            enableSwipeMonths={true}
            onMonthChange={month => {
              setCommObj(prev => ({
                ...prev,
                selectadDate: month.dateString,
                changedMonth: moment(month.dateString).format('MMMM YYYY'),
                changedYear: moment(month.dateString).format('YYYY'),
              }));
            }}
            renderHeader={() => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <TouchableWithoutFeedback
                    onPress={() => {
                      setModalVisible(true);
                    }}>
                    <View
                      style={{
                        padding: 5,
                      }}>
                      <Text
                        style={{
                          fontSize: 16,
                          color: '#000000',
                          lineHeight: 23,
                          fontWeight: 'bold',
                        }}>
                        {commObj.changedMonth}
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              );
            }}
          />
        </View>
        <View
          style={{
            paddingTop: 50,
          }}>
          {commObj.dataInfo &&
            commObj.dataInfo.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    paddingVertical: 10,
                  }}>
                  <Text
                    style={{
                      color: '#000000',
                    }}>
                    {item.reason}
                  </Text>
                  <Text
                    style={{
                      color: '#000000',
                    }}>
                    {item.fromDate} to {item.toDate}
                  </Text>
                </View>
              );
            })}
        </View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}>
          <TouchableWithoutFeedback
            onPress={() => {
              setModalVisible(!modalVisible);
              setCommObj(prev => ({
                ...prev,
                changedYear: moment(commObj.selectadDate).format('YYYY'),
              }));
            }}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 20,
                backgroundColor: 'rgba(0,0,0,0.7)',
              }}>
              <TouchableWithoutFeedback
                onPress={() => {
                  setModalVisible(true);
                }}>
                <View
                  style={{
                    paddingVertical: 25,
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    backgroundColor: '#fff',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingBottom: 15,
                      borderBottomWidth: 1,
                      borderBottomColor: 'lightgray',
                      gap: 20,
                    }}>
                    <TouchableWithoutFeedback
                      onPress={() => {
                        setCommObj(prev => ({
                          ...prev,
                          changedYear: prev.changedYear - 1,
                        }));
                      }}>
                      <View>
                        <Icon
                          name="angle-left"
                          size={20}
                          color={'gray'}
                          style={{
                            paddingHorizontal: 10,
                          }}
                        />
                      </View>
                    </TouchableWithoutFeedback>
                    <View>
                      <Text
                        style={{
                          fontSize: 18,
                          lineHeight: 25,
                          color: '#000',
                        }}>
                        {commObj.changedYear}
                      </Text>
                    </View>
                    <TouchableWithoutFeedback
                      onPress={() => {
                        setCommObj(prev => ({
                          ...prev,
                          changedYear: Number(prev.changedYear) + 1,
                        }));
                      }}>
                      <View>
                        <Icon
                          name="angle-right"
                          size={20}
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
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      rowGap: 20,
                      paddingTop: 15,
                    }}>
                    {commObj.months.map((item, index) => {
                      return (
                        <TouchableWithoutFeedback
                          key={index}
                          onPress={() => {
                            let date = `${commObj.changedYear}-${moment()
                              .month(item)
                              .format('MM')}-01`;
                            setCommObj(prev => ({
                              ...prev,
                              changedMonth: `${item} ${commObj.changedYear}`,
                              selectadDate: date,
                            }));
                            setModalVisible(false);
                          }}>
                          <View
                            style={{
                              width: '22%',
                              alignItems: 'center',
                              paddingVertical: 10,
                              backgroundColor:
                                commObj.changedMonth &&
                                commObj.changedMonth.split(' ')[0] === item
                                  ? 'lightblue'
                                  : '#fff',
                              borderRadius: 4,
                            }}>
                            <Text
                              style={{
                                color: '#000000',
                                fontSize: 14,
                              }}>
                              {item}
                            </Text>
                          </View>
                        </TouchableWithoutFeedback>
                      );
                    })}
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
