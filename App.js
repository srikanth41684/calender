import {NavigationContainer} from '@react-navigation/native';
import GlobalStackNav from './src/navigations/GlobalStackNav';
import {useEffect, useState} from 'react';
import {Appearance} from 'react-native';

const App = () => {
  const [globalData, setGlobalData] = useState({
    systemTheme: Appearance.getColorScheme(),
  });

  useEffect(() => {
    console.log('globalData-------->', globalData);
  }, [globalData]);
  return (
    <NavigationContainer>
      <GlobalStackNav />
    </NavigationContainer>
  );
};

export default App;
