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
import {useIsFocused, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const customNavigation = useNavigation();
  const isFocused = useIsFocused();
  const [modalVisible, setModalVisible] = useState(false);
  const [commObj, setCommObj] = useState({
    todayDate: null,
    months: moment.months(),
    selectadDate: null,
    changedMonth: null,
    changedYear: null,
    dataInfo: null,
    markedDates: null,
    minDate: null,
    maxDate: null,
    holidaysList: [
      {
        date: '2023-11-14',
        title: 'Holiday1',
      },
      {
        date: '2023-11-27',
        title: 'Holiday2',
      },
      {
        date: '2023-12-06',
        title: 'Holiday3',
      },
      {
        date: '2024-01-01',
        title: 'New Year',
      },
    ],
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
  }, []);

  useEffect(() => {
    isFocused && leaveDataHanlder();
  }, [isFocused]);

  const leaveDataHanlder = async () => {
    let leaveData = await AsyncStorage.getItem('apply-leave');
    let data = JSON.parse(leaveData);
    let arr = [];
    if (data) {
      setCommObj(prev => ({
        ...prev,
        markedDates: data,
      }));
      data.filter(item => {
        if (
          moment(item.fromDate).month() + 1 ===
            moment(commObj.selectadDate).month() + 1 &&
          moment(item.fromDate).year() === moment(commObj.selectadDate).year()
        ) {
          arr.push(item);
        }
      });
    }
    // console.log('month arr ------>', arr);
    setCommObj(prev => ({
      ...prev,
      dataInfo: arr,
    }));
  };

  const leaveApplyHandler = date => {
    customNavigation.navigate('toptab', {
      date: date.dateString,
      holidaysList: commObj.holidaysList,
    });
  };

  const customHeader = () => (
    <TouchableWithoutFeedback
      onPress={() => {
        setModalVisible(true);
      }}>
      <View>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 23,
            fontWeight: 'bold',
            color: '#000',
          }}>
          {moment(commObj.selectadDate).format('MMMM YYYY')}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );

  const handleMonthChange = useCallback(month => {
    if (commObj.selectadDate !== month.dateString) {
      setCommObj(prev => ({
        ...prev,
        selectadDate: month.dateString,
      }));
    }
  }, []);

  // const updateHandler = () => {
  //   if (
  //    moment(commObj.date).format('MM') <
  //      moment(commObj.todayDate).format('MM') ||
  //    commObj.selectedYear < moment(commObj.todayDate).format('YYYY')
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
  //    (selectedMonth == endMonth && selectadDate > 31) ||
  //    (currentYear == selectedYear && selectedMonth > endMonth) ||
  //    (currentYear == selectedYear - 1 && selectedMonth <= endMonth)
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
    let todayDate = moment(new Date()).format('YYYY-MM-DD');
    const endMonth = moment().month('March').format('MM');

    if (moment(todayDate).format('MM') <= endMonth) {
      // console.log('yes');
      let minDate = `${moment(commObj.todayDate).format('YYYY')}-04-01`;
      let year = Number(moment(commObj.todayDate).format('YYYY')) + 1;
      let maxDate = `${year}-03-31`;
      // console.log('minDate====>', minDate, 'maxDate====>', maxDate);
      // setCommObj(prev => ({
      //   ...prev,
      //   minDate: minDate,
      //   maxDate: maxDate,
      // }));
    } else {
      // console.log('no');
      let minDate = `${moment(commObj.todayDate).format('YYYY')}-04-01`;
      let year = Number(moment(commObj.todayDate).format('YYYY')) + 1;
      let maxDate = `${year}-03-31`;
      // console.log('minDate====>', minDate, 'maxDate====>', maxDate);
      // setCommObj(prev => ({
      //   ...prev,
      //   minDate: minDate,
      //   maxDate: maxDate,
      // }));
    }
  }, []);

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
            // minDate={commObj.minDate ? commObj.minDate : null}
            // maxDate={commObj.maxDate ? commObj.maxDate : null}
            minDate={'2023-04-01'}
            maxDate={'2024-03-31'}
            dayComponent={({date, state}) => {
              let marked = false;
              let start = false;
              let end = false;
              let dd = moment(date.dateString).format('ddd');
              let holiday = false;
              if (commObj.markedDates) {
                commObj.markedDates.forEach(item => {
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
              if (commObj.holidaysList) {
                commObj.holidaysList.forEach(item => {
                  if (item.date === date.dateString) {
                    holiday = true;
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
                    console.log('date---->', date);
                    if (
                      !holiday &&
                      dd !== 'Sun' &&
                      dd !== 'Sat' &&
                      !marked &&
                      state !== 'disabled'
                      // && commObj.todayDate <= date.dateString
                    ) {
                      leaveApplyHandler(date);
                    }
                  }}>
                  <View
                    style={{
                      width: '100%',
                      height: 40,
                      backgroundColor: marked
                        ? state === 'disabled'
                          ? ''
                          : 'lightblue'
                        : state === 'today'
                        ? 'lightgreen'
                        : '',
                      borderTopLeftRadius: start
                        ? 40 / 2
                        : state === 'today'
                        ? 40 / 2
                        : 0,
                      borderBottomLeftRadius: start
                        ? 40 / 2
                        : state === 'today'
                        ? 40 / 2
                        : 0,
                      borderTopRightRadius: end
                        ? 40 / 2
                        : state === 'today'
                        ? 40 / 2
                        : 0,
                      borderBottomRightRadius: end
                        ? 40 / 2
                        : state === 'today'
                        ? 40 / 2
                        : 0,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    {dd === 'Sun' || dd === 'Sat' ? (
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
                          color:
                            state === 'disabled'
                              ? 'lightgray'
                              : holiday
                              ? 'red'
                              : 'black',
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
            renderHeader={customHeader}
            enableSwipeMonths={true}
            onMonthChange={handleMonthChange()}
            // onMonthChange={month => {
            //   if (commObj.selectadDate !== month.dateString) {
            //     setCommObj(prev => ({
            //       ...prev,
            //       selectadDate: month.dateString,
            //     }));
            //   }
            // }}
          />
        </View>
        <TouchableWithoutFeedback
          onPress={() => {
            setCommObj(prev => ({
              ...prev,
              selectadDate: commObj.todayDate,
            }));
          }}>
          <View
            style={{
              paddingVertical: 20,
            }}>
            <Text
              style={{
                fontSize: 16,
                lineHeight: 23,
                color: '#000',
              }}>
              {commObj.todayDate}
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <View
          style={{
            paddingTop: 10,
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
                  <Text
                    style={{
                      color: '#000000',
                    }}>
                    Number of Days: {item.numberOfDays}
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
