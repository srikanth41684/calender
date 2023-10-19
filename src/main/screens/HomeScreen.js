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

const HomeScreen = () => {
  const customNavigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [commObj, setCommObj] = useState({
    todayDate: null,
    date: null,
    months: moment.months(),
    selectedMonth: null,
    selectedYear: null,
    selectadDate: null,
    disableMonthChange: false,
    disableMonthSelect: false,
    dataInfo: [
      {
        id: 1,
        titile: 'Selected date',
      },
    ],
  });

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = moment(currentDate).format('YYYY-MM-DD');
    let month = moment(currentDate).format('MMMM');
    let year = moment(currentDate).format('YYYY');
    let date = moment(currentDate).format('DD');
    setCommObj(prev => ({
      ...prev,
      todayDate: formattedDate,
      date: formattedDate,
      selectedMonth: month,
      selectedYear: year,
      selectadDate: date,
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
    console.log(moment(commObj.todayDate).format('YYYY'));

    if (
      commObj.selectedYear < moment(commObj.todayDate).format('YYYY') ||
      moment(commObj.date).format('MM') < moment(commObj.todayDate).format('MM')
    ) {
      setCommObj(prev => ({
        ...prev,
        disableMonthChange: true,
      }));
    } else {
      setCommObj(prev => ({
        ...prev,
        disableMonthChange: false,
      }));
    }

    if (commObj.selectedYear < moment(commObj.todayDate).format('YYYY')) {
      setCommObj(prev => ({
        ...prev,
        disableMonthSelect: true,
      }));
    } else {
      setCommObj(prev => ({
        ...prev,
        disableMonthSelect: false,
      }));
    }
  }, [commObj.selectedMonth, commObj.selectedYear]);

  useEffect(() => {
    console.log('commObj------->', commObj);
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
            initialDate={commObj.date}
            onDayPress={day => {
              setCommObj(prev => ({
                ...prev,
                date: day.dateString,
                data: day,
              }));
              customNavigation.navigate('details', {
                date: commObj.date,
              });
            }}
            maxDate={commObj.todayDate}
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
                  color={commObj.disableMonthChange ? 'gray' : 'lightgray'}
                  style={{
                    paddingHorizontal: 10,
                    marginRight: -10,
                  }}
                />
              )
            }
            disableArrowRight={commObj.disableMonthChange ? false : true}
            enableSwipeMonths={commObj.disableMonthChange ? true : false}
            onMonthChange={month => {
              setCommObj(prev => ({
                ...prev,
                date: month.dateString,
                selectadDate: month.day,
                selectedYear: month.year,
                selectedMonth: moment()
                  .month(month.month - 1)
                  .format('MMMM'),
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
                        {commObj.selectedMonth} {commObj.selectedYear}
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
                    {commObj.date}
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
                          selectedYear: prev.selectedYear - 1,
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
                        {commObj.selectedYear}
                      </Text>
                    </View>
                    <TouchableWithoutFeedback
                      onPress={() => {
                        if (commObj.disableMonthChange) {
                          setCommObj(prev => ({
                            ...prev,
                            selectedYear: prev.selectedYear + 1,
                          }));
                        }
                      }}>
                      <View>
                        <Icon
                          name="angle-right"
                          size={20}
                          color={
                            new Date().getFullYear() > commObj.selectedYear
                              ? 'gray'
                              : 'lightgray'
                          }
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
                            if (
                              commObj.disableMonthSelect ||
                              index < moment(commObj.todayDate).format('MM')
                            ) {
                              setCommObj(prev => ({
                                ...prev,
                                selectedMonth: item,
                              }));
                              setModalVisible(false);
                            }
                          }}>
                          <View
                            style={{
                              width: '22%',
                              alignItems: 'center',
                              paddingVertical: 10,
                              backgroundColor:
                                commObj.selectedMonth === item
                                  ? 'lightblue'
                                  : '#fff',
                              borderRadius: 4,
                            }}>
                            <Text
                              style={{
                                color:
                                  commObj.disableMonthSelect ||
                                  index < moment(commObj.todayDate).format('MM')
                                    ? '#000000'
                                    : 'lightgray',
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
