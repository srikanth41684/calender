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
    let convertedDate = currentDate.subtract(1, 'days');
    let weekData = [];
    for (let i = 0; i < 7; i++) {
      let day = convertedDate.clone().subtract(i, 'days');
      weekData.push({
        date: day.format('YYYY-MM-DD'),
      });
    }

    setCommObj(prev => ({
      ...prev,
      dateWeeks: weekData.reverse(),
    }));
  };

  const rightHandler = () => {
    let currentDate = moment(commObj.dateWeeks[6].date);
    let convertedDate = currentDate.add(1, 'days');
    let weekData = [];
    for (let i = 0; i < 7; i++) {
      let day = convertedDate.clone().add(i, 'days');
      weekData.push({
        date: day.format('YYYY-MM-DD'),
      });
    }

    setCommObj(prev => ({
      ...prev,
      dateWeeks: weekData,
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
                          <Text>{moment(item.date).format('ddd')}</Text>
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
