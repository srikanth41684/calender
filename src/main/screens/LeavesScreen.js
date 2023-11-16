import {
  View,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';

const LeavesScreen = () => {
  const [commObj, setCommObj] = useState({
    activeLeave: 'upcomig',
    upcomingLeaves: [
      {
        id: 1,
        startDate: 'Nov 13, 2023',
        endDate: 'Nov 20, 2023',
        numberOfDays: '5',
        balancedLeaves: '16',
        status: 'approved',
        by: 'Maneger',
      },
      {
        id: 2,
        startDate: 'Nov 13, 2023',
        endDate: 'Nov 20, 2023',
        numberOfDays: '5',
        balancedLeaves: '16',
        status: 'pending',
        by: 'Maneger',
      },
      {
        id: 3,
        startDate: 'Nov 13, 2023',
        endDate: 'Nov 20, 2023',
        numberOfDays: '5',
        balancedLeaves: '16',
        status: 'rejected',
        by: 'Maneger',
      },
    ],
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
          paddingTop: 20,
        }}>
        <View
          style={{
            paddingVertical: 15,
          }}>
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
                  borderColor: '#3085FE',
                  borderWidth: 1,
                  backgroundColor: '#F5F9FF',
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
                  borderColor: '#aed650',
                  borderWidth: 1,
                  backgroundColor: '#fafdf5',
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
                  borderColor: '#49c6be',
                  borderWidth: 1,
                  backgroundColor: '#f5fcfb',
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
                  borderColor: '#ff8f84',
                  borderWidth: 1,
                  backgroundColor: '#fff9f8',
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
            <View></View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
          }}>
          {commObj.activeLeave === 'upcomig' && (
            <FlatList
              data={commObj.upcomingLeaves}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                flexGrow: 1,
                gap: 15,
                paddingVertical: 15,
              }}
              renderItem={({item, index}) => {
                return (
                  <View
                    key={item.id}
                    style={{
                      backgroundColor: '#fff',
                      paddingHorizontal: 15,
                      paddingVertical: 20,
                      borderRadius: 8,
                    }}>
                    <View
                      style={{
                        borderBottomColor: 'lightgray',
                        borderBottomWidth: 0.5,
                        paddingBottom: 15,
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            fontSize: 16,
                            lineHeight: 23,
                            color: '#000',
                          }}>
                          Date
                        </Text>
                        <View
                          style={{
                            backgroundColor:
                              item.status === 'approved'
                                ? '#fafdf5'
                                : item.status === 'pending'
                                ? '#f5fcfb'
                                : item.status === 'rejected'
                                ? '#fff9f8'
                                : '',
                            padding: 10,
                            borderRadius: 10,
                          }}>
                          <Text
                            style={{
                              fontSize: 16,
                              color:
                                item.status === 'approved'
                                  ? '#aed650'
                                  : item.status === 'pending'
                                  ? '#49c6be'
                                  : item.status === 'rejected'
                                  ? '#ff8f84'
                                  : '',
                              textTransform: 'capitalize',
                            }}>
                            {item.status}
                          </Text>
                        </View>
                      </View>
                      <View>
                        <Text
                          style={{
                            fontSize: 16,
                            lineHeight: 23,
                            color: '#000',
                            fontWeight: 'bold',
                          }}>
                          {item.startDate} - {item.endDate}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingTop: 15,
                      }}>
                      <View>
                        <Text
                          style={{
                            fontSize: 14,
                            lineHeight: 21,
                            color: '#000',
                          }}>
                          Apply Days
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            lineHeight: 23,
                            color: '#000',
                            fontWeight: 'bold',
                          }}>
                          {item.numberOfDays}
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            fontSize: 14,
                            lineHeight: 21,
                            color: '#000',
                          }}>
                          Leave Balance
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            lineHeight: 23,
                            color: '#000',
                            fontWeight: 'bold',
                          }}>
                          {item.balancedLeaves}
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            fontSize: 14,
                            lineHeight: 21,
                            color: '#000',
                          }}>
                          Approved by
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            lineHeight: 23,
                            color: '#000',
                            fontWeight: 'bold',
                          }}>
                          {item.by}
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          )}
        </View>
        {/* <View
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
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export default LeavesScreen;
