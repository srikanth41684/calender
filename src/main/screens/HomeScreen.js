import {
  View,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  Modal,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Calendar} from 'react-native-calendars';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment/moment';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const customNavigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [commObj, setCommObj] = useState({
    todayDate: null,
    // date: null,
    months: moment.months(),
    selectadDate: null,
    changedMonth: null,
    changedYear: null,
    // selectedMonth: null,
    // selectedYear: null,
    // selectadDate: null,
    // disableMonthChange: false,
    // disableMonthSelect: false,
    dataInfo: [
      {
        id: 1,
        titile: 'Selected date',
      },
    ],
  });

  // initially select today's date
  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = moment(currentDate).format('YYYY-MM-DD');
    // console.log('formattedDate------>', formattedDate);
    // let month = moment(currentDate).format('MMMM');
    // let year = moment(currentDate).format('YYYY');
    // let date = moment(currentDate).format('DD');
    setCommObj(prev => ({
      ...prev,
      todayDate: formattedDate,
      // date: formattedDate,
      // selectedMonth: month,
      // selectedYear: year,
      selectadDate: formattedDate,
      changedMonth: moment(formattedDate).format('MMMM YYYY'),
      changedYear: moment(formattedDate).format('YYYY'),
    }));
  }, []);

  useEffect(() => {
    if (commObj.selectedMonth) {
      setCommObj(prev => ({
        ...prev,
        date: `${commObj.selectedYear}-${moment()
          .month(commObj.selectedMonth)
          .format('MM')}-${commObj.selectadDate}`,
      }));
    }

    // if (commObj.selectedYear < moment(commObj.todayDate).format('YYYY')) {
    //   setCommObj(prev => ({
    //     ...prev,
    //     disableMonthSelect: true,
    //   }));
    // } else {
    //   setCommObj(prev => ({
    //     ...prev,
    //     disableMonthSelect: false,
    //   }));
    // }
  }, [commObj.selectedMonth]);

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

  const leaveApplyHandler = (day, data) => {
    const selectedMonth = moment().month(commObj.selectedMonth).format('MM');
    const selectadDate = day;
    const endMonth = moment().month('March').format('MM');
    const selectedYear = commObj.selectedYear;
    const currentYear = moment(commObj.todayDate).format('YYYY');
    if (
      (selectedMonth == endMonth && selectadDate > 31) ||
      (currentYear == selectedYear && selectedMonth > endMonth) ||
      (currentYear == selectedYear - 1 && selectedMonth <= endMonth)
    ) {
      console.log('yes');
      customNavigation.navigate('toptab', {
        date: data,
      });
    } else {
      console.log('No');
      Alert.alert('This is not current financial year....');
    }
  };

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
            markingType="period"
            markedDates={{}}
            dayComponent={({date, state}) => {
              return (
                <TouchableWithoutFeedback
                  onPress={() => {
                    setCommObj(prev => ({
                      ...prev,
                      selectadDate: date.dateString,
                    }));
                    // leaveApplyHandler(date.day, date);
                  }}>
                  <View
                    style={{
                      padding: 5,
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
              console.log(month);
              setCommObj(prev => ({
                ...prev,
                selectadDate: month.dateString,
                changedMonth: moment(month.dateString).format('MMMM YYYY'),
                changedYear: moment(month.dateString).format('YYYY'),
                // date: month.dateString,
                // selectedYear: month.year,
                // selectadDate: month.day,
                // selectedMonth: moment()
                //   .month(month.month - 1)
                //   .format('MMMM'),
              }));
              // updateHandler();
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
                <View key={index} style={{}}>
                  <Text
                    style={{
                      color: '#000000',
                    }}>
                    {item.titile}
                  </Text>
                  <Text
                    style={{
                      color: '#000000',
                    }}>
                    {commObj.selectadDate}
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
                        // if (commObj.disableMonthChange) {
                        // setCommObj(prev => ({
                        //   ...prev,
                        //   selectedYear: prev.selectedYear + 1,
                        // }));
                        // }
                        setCommObj(prev => ({
                          ...prev,
                          changedYear: Number(prev.changedYear) + 1,
                        }));
                      }}>
                      <View>
                        <Icon
                          name="angle-right"
                          size={20}
                          // color={
                          //   new Date().getFullYear() > commObj.selectedYear
                          //     ? 'gray'
                          //     : 'lightgray'
                          // }
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
                            console.log(typeof date);
                            setCommObj(prev => ({
                              ...prev,
                              changedMonth: `${item} ${commObj.changedYear}`,
                              selectadDate: date,
                            }));
                            setModalVisible(false);
                            // updateHandler();
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
