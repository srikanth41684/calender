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

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [commObj, setCommObj] = useState({
    date: null,
    months: moment.months(),
    selectedMonth: null,
    selectedYear: null,
    selectadDate: null,
    dataInfo: [
      {
        id: 1,
        titile: 'Today date',
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
  }, [commObj.selectedMonth]);

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
              console.log('selected dated-------->', day);
              // let date = `${day.year}-${
              //   day.month.toString().length === 1 ? '0' + day.month : day.month
              // }-${day.day.toString().length === 1 ? '0' + day.day : day.day}`;
              setCommObj(prev => ({
                ...prev,
                date: day.dateString,
                data: day,
              }));
            }}
            markedDates={{
              [commObj.date]: {
                selected: true,
                selectedColor: 'blue',
              },
            }}
            renderArrow={direction =>
              direction === 'left' ? (
                <Icon
                  name="angle-left"
                  size={30}
                  style={{
                    paddingHorizontal: 10,
                    marginLeft: -10,
                  }}
                />
              ) : (
                <Icon
                  name="angle-right"
                  size={30}
                  style={{
                    paddingHorizontal: 10,
                    marginRight: -10,
                  }}
                />
              )
            }
            enableSwipeMonths={true}
            onMonthChange={month => {
              console.log('month change---->', month);
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
                        {commObj.selectedMonth}
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback>
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
                        {commObj.selectedYear}
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              );
            }}
          />
        </View>
        {commObj.dataInfo &&
          commObj.dataInfo.map((item, index) => {
            return (
              <View key={index} style={{}}>
                <Text style={{}}>{item.titile}</Text>
                <Text style={{}}>{commObj.date}</Text>
              </View>
            );
          })}
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
                      alignItems: 'center',
                      paddingBottom: 15,
                      borderBottomWidth: 1,
                      borderBottomColor: 'lightgray',
                    }}>
                    <Text
                      style={{
                        fontSize: 18,
                        lineHeight: 25,
                        color: '#000',
                      }}>
                      {moment(commObj.date).format('YYYY')}
                    </Text>
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
                            setCommObj(prev => ({
                              ...prev,
                              selectedMonth: item,
                            }));
                            setModalVisible(false);
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
                                color: '#000',
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
