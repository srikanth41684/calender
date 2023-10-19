import {View, Text, SafeAreaView} from 'react-native';
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
    for (let i = 0; i < 17; i++) {
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
        }}>
        <View>
          <Text>ProfileScreen</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
