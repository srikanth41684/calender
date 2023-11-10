import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Animated,
  useWindowDimensions,
} from 'react-native';
import React, {useRef} from 'react';

const images = [1, 2, 3];

const WellcomeScreen = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const {width: windowWidth} = useWindowDimensions();
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
        }}>
        <ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ],
            {useNativeDriver: false},
          )}
          scrollEventThrottle={1}>
          {images.map((image, imageIndex) => {
            return (
              <View
                style={{
                  width: windowWidth,
                  height: 250,
                }}
                key={imageIndex}>
                <Text>{image}</Text>
              </View>
            );
          })}
        </ScrollView>
        <View
          style={{
            // flexDirection: 'row',
            // alignItems: 'center',
            // justifyContent: 'center',
          }}>
          {images.map((image, imageIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1),
              ],
              outputRange: [8, 16, 8],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={imageIndex}
                style={[
                  {
                    width: 100,
                    height: 100,
                    borderRadius: 100 / 2,
                    borderWidth: 1,
                    // height: 8,
                    // width: 8,
                    // borderRadius: 4,
                    // backgroundColor: 'silver',
                    // marginHorizontal: 4,
                  },
                  {width},
                ]}
              />
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WellcomeScreen;
