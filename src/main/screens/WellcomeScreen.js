import {View, Text, SafeAreaView, ScrollView, Animated} from 'react-native';
import React from 'react';

const WellcomeScreen = () => {
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
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  // x: scrollX,
                },
              },
            },
          ])}
          scrollEventThrottle={1}>
          {/* {images.map((image, imageIndex) => {
            return (
              <View style={{width: windowWidth, height: 250}} key={imageIndex}>
                <ImageBackground source={{uri: image}} style={styles.card}>
                  <View style={styles.textContainer}>
                    <Text style={styles.infoText}>
                      {'Image - ' + imageIndex}
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            );
          })} */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default WellcomeScreen;
