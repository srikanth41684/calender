import {View, Text, SafeAreaView, TouchableWithoutFeedback} from 'react-native';
import React, {useState} from 'react';

const LeavesScreen = () => {
  const [commObj, setCommObj] = useState({
    activeLeave: 'upcomig',
  });
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 15,
          backgroundColor: '#EFF1FE',
        }}>
        <View>
          <Text
            style={{
              fontSize: 16,
              lineHeight: 23,
              fontWeight: 'bold',
              color: '#000',
            }}>
            All Leaves
          </Text>
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <View
            style={{
              gap: 15,
            }}>
            <View
              style={{
                flexDirection: 'row',
                gap: 15,
              }}>
              <View
                style={{
                  flex: 1,
                  borderColor: 'blue',
                  borderWidth: 0.5,
                  backgroundColor: '#dcebfa',
                  padding: 15,
                  borderRadius: 10,
                }}>
                <View
                  style={{
                    paddingBottom: 15,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      lineHeight: 23,
                      color: '#000',
                      fontWeight: 'bold',
                    }}>
                    Leave
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      lineHeight: 23,
                      color: '#000',
                      fontWeight: 'bold',
                    }}>
                    Balance
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 18,
                    lineHeight: 25,
                    color: 'blue',
                    fontWeight: 'bold',
                  }}>
                  18
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  borderColor: '#4fa3f7',
                  borderWidth: 0.5,
                  backgroundColor: '#dcebfa',
                  padding: 15,
                  borderRadius: 10,
                }}>
                <View
                  style={{
                    paddingBottom: 15,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      lineHeight: 23,
                      color: '#000',
                      fontWeight: 'bold',
                    }}>
                    Leave
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      lineHeight: 23,
                      color: '#000',
                      fontWeight: 'bold',
                    }}>
                    Approved
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 18,
                    lineHeight: 25,
                    color: 'blue',
                    fontWeight: 'bold',
                  }}>
                  02
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                gap: 15,
              }}>
              <View
                style={{
                  flex: 1,
                  borderColor: '#4fa3f7',
                  borderWidth: 0.5,
                  backgroundColor: '#dcebfa',
                  padding: 15,
                  borderRadius: 10,
                }}>
                <View
                  style={{
                    paddingBottom: 15,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      lineHeight: 23,
                      color: '#000',
                      fontWeight: 'bold',
                    }}>
                    Leave
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      lineHeight: 23,
                      color: '#000',
                      fontWeight: 'bold',
                    }}>
                    Pending
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 18,
                    lineHeight: 25,
                    color: 'blue',
                    fontWeight: 'bold',
                  }}>
                  01
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  borderColor: '#4fa3f7',
                  borderWidth: 0.5,
                  backgroundColor: '#dcebfa',
                  padding: 15,
                  borderRadius: 10,
                }}>
                <View
                  style={{
                    paddingBottom: 15,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      lineHeight: 23,
                      color: '#000',
                      fontWeight: 'bold',
                    }}>
                    Leave
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      lineHeight: 23,
                      color: '#000',
                      fontWeight: 'bold',
                    }}>
                    Cancelled
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 18,
                    lineHeight: 25,
                    color: 'blue',
                    fontWeight: 'bold',
                  }}>
                  03
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              paddingTop: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#E4E4FF',
                borderRadius: 8,
              }}>
              <TouchableWithoutFeedback
                onPress={() => {
                  setCommObj(prev => ({
                    ...prev,
                    activeLeave: 'upcomig',
                  }));
                }}>
                <View
                  style={{
                    flex: 1,
                    paddingVertical: 10,
                    alignItems: 'center',
                    backgroundColor:
                      commObj.activeLeave === 'upcomig'
                        ? '#298ef2'
                        : 'transparent',
                    borderRadius: 6,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      lineHeight: 23,
                      color:
                        commObj.activeLeave === 'upcomig' ? '#fff' : '#000',
                    }}>
                    Upcomig
                  </Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() => {
                  setCommObj(prev => ({
                    ...prev,
                    activeLeave: 'past',
                  }));
                }}>
                <View
                  style={{
                    flex: 1,
                    paddingVertical: 10,
                    alignItems: 'center',
                    backgroundColor:
                      commObj.activeLeave === 'past'
                        ? '#298ef2'
                        : 'transparent',
                    borderRadius: 6,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      lineHeight: 23,
                      color: commObj.activeLeave === 'past' ? '#fff' : '#000',
                    }}>
                    Past
                  </Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() => {
                  setCommObj(prev => ({
                    ...prev,
                    activeLeave: 'team',
                  }));
                }}>
                <View
                  style={{
                    flex: 1,
                    paddingVertical: 10,
                    alignItems: 'center',
                    backgroundColor:
                      commObj.activeLeave === 'team'
                        ? '#298ef2'
                        : 'transparent',
                    borderRadius: 6,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      lineHeight: 23,
                      color: commObj.activeLeave === 'team' ? '#fff' : '#000',
                    }}>
                    Team Leaves
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
        <View
          style={{
            paddingBottom: 10,
          }}>
          <TouchableWithoutFeedback>
            <View
              style={{
                backgroundColor: '#314ce8',
                alignItems: 'center',
                paddingVertical: 10,
                borderRadius: 8,
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 'bold',
                  lineHeight: 23,
                }}>
                Apply Leave
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LeavesScreen;
