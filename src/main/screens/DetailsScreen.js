import {View, Text} from 'react-native';
import React from 'react';

const DetailsScreen = props => {
  return (
    <View>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 16,
          color: '#000',
        }}>
        DetailsScreen: {props.route.params.date}
      </Text>
    </View>
  );
};

export default DetailsScreen;
