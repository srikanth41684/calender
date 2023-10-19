import {View, Text, SafeAreaView, TouchableWithoutFeedback} from 'react-native';
import React, {useEffect, useState} from 'react';
import moment from 'moment';

const ProfileScreen = () => {
  const [commObj, setCommObj] = useState({
    dateWeeks: [],
    todayDate: new Date(),
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
        date: day.format('YYYY-MM-DD'),
      });
    }

    setCommObj(prev => ({
      ...prev,
      dateWeeks: weekArr,
    }));
  }

  const leftHandler = () => {
    var currentDate = moment(commObj.dateWeeks[0].date);
    var weekData = [];
    for (var i = 0; i < 7; i++) {
      var day = currentDate.clone().subtract(i, 'days');
      weekData.push({
        dayName: day.format('ddd'),
        date: day.format('YYYY-MM-DD'),
      });
    }

    console.log('weekData---->', weekData);

    setCommObj(prev => ({
      ...prev,
      dateWeeks: weekData.reverse(),
    }));
  };

  const rightHandler = () => {};

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
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            {commObj.dateWeeks.map((item, index) => {
              return (
                <TouchableWithoutFeedback key={index}>
                  <View>
                    <Text>{item.dayName}</Text>
                    <Text>{moment(item.date).format('DD')}</Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
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
