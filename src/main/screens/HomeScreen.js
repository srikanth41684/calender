import {View, Text, SafeAreaView, TouchableWithoutFeedback} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Calendar} from 'react-native-calendars';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  const [commObj, setCommObj] = useState({
    date: null,
  });

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = formatDateToYYYYMMDD(currentDate);
    console.log(formattedDate);
    setCommObj(prev => ({
      ...prev,
      date: formattedDate,
    }));
  }, []);

  function formatDateToYYYYMMDD(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  useEffect(() => {
    console.log('Home commObj------->', commObj);
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
            onDayPress={day => {
              console.log('selected dated-------->', day.day.toString().length);
              let date = `${day.year}-${
                day.month.toString().length === 1 ? '0' + day.month : day.month
              }-${day.day.toString().length === 1 ? '0' + day.day : day.day}`;
              setCommObj(prev => ({
                ...prev,
                date: date,
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
            renderHeader={date => {
              let newDate = new Date(date);
              let month = newDate.toLocaleString('en-US', {month: 'long'});
              let year = date.getFullYear();
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
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
                        {month}
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
                        {year}
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              );
              console.log('date---->', date);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
