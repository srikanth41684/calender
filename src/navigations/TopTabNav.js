import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import moment from 'moment';
import DatePicker from 'react-native-date-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const TopTabNav = props => {
  const customNavigation = useNavigation();
  const [commObj, setCommObj] = useState({
    fromDate: new Date(props.route.params.date),
    toDate: new Date(props.route.params.date),
    reason: '',
    formDatePicker: false,
    toDatePicker: false,
    numberOfDays: 0,
    leaveStartDates: null,
    holidaysList: props.route.params.holidaysList,
    maxDate: null,
  });

  useEffect(() => {
    getLeaveDataHandler();
  }, []);

  const getLeaveDataHandler = async () => {
    let tempArr = [];
    let leaveData = await AsyncStorage.getItem('apply-leave');
    let data = JSON.parse(leaveData);
    if (data) {
      data.filter(item => {
        tempArr.push(item.fromDate);
      });
    }

    setCommObj(prev => ({
      ...prev,
      leaveStartDates: tempArr,
    }));
  };

  const applyLeaveHandler = async () => {
    let array = [
      {
        fromDate: moment(commObj.fromDate).format('YYYY-MM-DD'),
        toDate: moment(commObj.toDate).format('YYYY-MM-DD'),
        reason: commObj.reason,
        numberOfDays: commObj.numberOfDays,
      },
    ];
    let leaveData = await AsyncStorage.getItem('apply-leave');
    let data = JSON.parse(leaveData);
    console.log('data---->', data);
    if (data) {
      data.forEach(item => {
        array.push(item);
      });
    }
    await AsyncStorage.setItem('apply-leave', JSON.stringify(array));
    setCommObj(prev => ({
      ...prev,
      reason: '',
    }));
    customNavigation.goBack();
  };

  useEffect(() => {
    let startDateStr = moment(commObj.fromDate).format('YYYY-MM-DD');
    let endDateStr = moment(commObj.toDate).format('YYYY-MM-DD');

    const startDate = moment(startDateStr);
    const endDate = moment(endDateStr);

    let allDates = [];
    let currentDate = startDate.clone();
    while (currentDate.isSameOrBefore(endDate, 'day')) {
      allDates.push(currentDate.format('YYYY-MM-DD'));
      currentDate.add(1, 'day');
    }

    // for (
    //   let currentDate = startDate.clone();
    //   currentDate.isSameOrBefore(endDate, 'day');
    //   currentDate.add(1, 'day')
    // ) {
    //   allDates.push(currentDate.format('YYYY-MM-DD'));
    // }

    let newArr = [];
    if (allDates) {
      allDates.forEach(item => {
        if (
          moment(item).format('ddd') !== 'Sun' &&
          moment(item).format('ddd') !== 'Sat'
        ) {
          newArr.push(item);
        }
      });
    }

    let tempArr = [];
    let dates = [];
    commObj.holidaysList.forEach(res => {
      dates.push(res.date);
    });

    if (newArr) {
      tempArr = newArr.filter(item => {
        return !dates.includes(item);
      });
    }

    setCommObj(prev => ({
      ...prev,
      numberOfDays: tempArr.length,
    }));
  }, [commObj.fromDate, commObj.toDate]);

  useEffect(() => {
    if (commObj.leaveStartDates) {
      let myDate = moment(commObj.fromDate).format('YYYY-MM-DD');
      let leaveDates = commObj.leaveStartDates;

      let closestDate = null;

      for (const dateString of leaveDates) {
        const currentDate = moment(dateString);
        if (
          currentDate.isAfter(myDate) &&
          (!closestDate || currentDate.isBefore(closestDate))
        ) {
          closestDate = currentDate;
        }
      }
      setCommObj(prev => ({
        ...prev,
        maxDate: closestDate ? closestDate.format('YYYY-MM-DD') : null,
      }));
    }
  }, [commObj.fromDate, commObj.leaveStartDates]);
  useEffect(() => {
    console.log('TopTabNav commObj-------->', commObj);
  }, [commObj]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
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
            <TouchableWithoutFeedback
              onPress={() => {
                customNavigation.goBack();
              }}>
              <View
                style={{
                  padding: 5,
                }}>
                <Text
                  style={{
                    color: '#000',
                  }}>
                  back
                </Text>
              </View>
            </TouchableWithoutFeedback>
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
            <TouchableWithoutFeedback
              onPress={() => {
                setCommObj(prev => ({
                  ...prev,
                  formDatePicker: true,
                }));
              }}>
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
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => {
                setCommObj(prev => ({
                  ...prev,
                  toDatePicker: true,
                }));
              }}>
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
            </TouchableWithoutFeedback>
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
                  color: '#000',
                  paddingLeft: 10,
                }}
                placeholder="Enter reason for a Leave"
                placeholderTextColor="#777777"
                onChangeText={text => {
                  setCommObj(prev => ({
                    ...prev,
                    reason: text,
                  }));
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 5,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#777777',
                }}>
                Number of Days:{' '}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#000',
                }}>
                {commObj.numberOfDays}
              </Text>
            </View>
          </View>
          <TouchableWithoutFeedback
            onPress={() => {
              if (commObj.reason !== '' && commObj.numberOfDays > 0) {
                applyLeaveHandler();
              }
            }}>
            <View
              style={{
                paddingVertical: 10,
                alignItems: 'center',
                backgroundColor:
                  commObj.reason !== '' && commObj.numberOfDays > 0
                    ? 'blue'
                    : 'lightblue',
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
          <DatePicker
            modal
            mode="date"
            date={commObj.fromDate}
            minimumDate={new Date('2023-04-01')}
            maximumDate={new Date('2024-03-31')}
            open={commObj.formDatePicker}
            title="Select Start Date"
            onConfirm={date => {
              setCommObj(prev => ({
                ...prev,
                fromDate: date,
                formDatePicker: false,
              }));
              if (date >= commObj.toDate) {
                setCommObj(prev => ({
                  ...prev,
                  toDate: date,
                }));
              }
            }}
            onCancel={() => {
              setCommObj(prev => ({
                ...prev,
                formDatePicker: false,
              }));
            }}
          />
          <DatePicker
            modal
            mode="date"
            maximumDate={
              commObj.maxDate
                ? new Date(
                    moment(commObj.maxDate)
                      .subtract(1, 'days')
                      .format('YYYY-MM-DD'),
                  )
                : new Date('2024-03-31')
            }
            minimumDate={
              commObj.fromDate <= commObj.toDate ? commObj.fromDate : null
            }
            title="Select End Date"
            date={commObj.toDate}
            open={commObj.toDatePicker}
            onConfirm={date => {
              setCommObj(prev => ({
                ...prev,
                toDate: date,
                toDatePicker: false,
              }));
            }}
            onCancel={() => {
              setCommObj(prev => ({
                ...prev,
                toDatePicker: false,
              }));
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default TopTabNav;
