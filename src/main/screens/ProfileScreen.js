import {
  View,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import moment from 'moment';

const ProfileScreen = () => {
  const [commObj, setCommObj] = useState({
    dateWeeks: [],
    todayDate: new Date(),
    monthName: moment().format('MMMM'),
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
        dayName: day.format('ddd'),
        monthName: day.format('MMMM'),
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
    console.log(currentDate);
    let convertedDate = currentDate.subtract(1, 'days');
    console.log(convertedDate);
    let currDate = convertedDate.format('YYYY-MM-DD');
    console.log(currDate);
    let weekData = [];
    for (let i = 0; i < 7; i++) {
      let day = convertedDate.clone().subtract(i, 'days');
      weekData.push({
        dayName: day.format('ddd'),
        monthName: day.format('MMMM'),
        date: day.format('YYYY-MM-DD'),
      });
    }

    console.log('weekData---->', weekData);

    setCommObj(prev => ({
      ...prev,
      dateWeeks: weekData.reverse(),
    }));
  };

  const rightHandler = () => {
    const currentMonth = moment();
    const firstDay = currentMonth.clone().startOf('month');
    const lastDay = currentMonth.clone().endOf('month');

    const allDays = [];

    let currentDay = firstDay.clone();

    while (currentDay.isSameOrBefore(lastDay)) {
      allDays.push({
        date: currentDay.format('YYYY-MM-DD'),
      });
      currentDay.add(1, 'day');
    }

    setCommObj(prev => ({
      ...prev,
      dateWeeks: allDays,
    }));
  };

  useEffect(() => {
    console.log('commObj----->', commObj);
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
          <Text>ProfileScreen</Text>
          <View>
            <View
              style={{
                alignItems: 'center',
                paddingVertical: 20,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  lineHeight: 27,
                  fontWeight: 'bold',
                  color: '#000000',
                }}>
                {commObj.monthName}
              </Text>
            </View>
            <ScrollView>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                {commObj.dateWeeks.map((item, index) => {
                  return (
                    <View key={index}>
                      <TouchableWithoutFeedback>
                        <View
                          style={{
                            backgroundColor: '#ffffff',
                            paddingHorizontal: 10,
                            paddingVertical: 10,
                            borderRadius: 10,
                          }}>
                          <Text>{item.dayName}</Text>
                          <Text>{moment(item.date).format('DD')}</Text>
                        </View>
                      </TouchableWithoutFeedback>
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </View>
          <TouchableWithoutFeedback
            onPress={() => {
              leftHandler();
            }}>
            <View>
              <Text>left</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              rightHandler();
            }}>
            <View>
              <Text>right</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
