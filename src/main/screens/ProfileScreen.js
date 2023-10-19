import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
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
          <FlatList
            data={commObj.dateWeeks}
            keyExtractor={item => item.date}
            renderItem={({item}) => {
              return (
                <TouchableWithoutFeedback>
                  <View>
                    <Text>{item.dayName}</Text>
                    <Text>{}</Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
