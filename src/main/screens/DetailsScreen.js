import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

const DetailsScreen = props => {
  useEffect(() => {
    console.log('DetailsScreen props-------->', props);
  }, []);
  return (
    <View>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 16,
          color: '#000',
        }}>
        DetailsScreen: {props.route.params.date.dateString}
      </Text>
    </View>
  );
};

export default DetailsScreen;
