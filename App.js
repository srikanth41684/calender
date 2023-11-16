import {NavigationContainer} from '@react-navigation/native';
import GlobalStackNav from './src/navigations/GlobalStackNav';
import {useState} from 'react';

const App = () => {
  const [globalData, setGlobalData] = useState({});
  return (
    <NavigationContainer>
      <GlobalStackNav />
    </NavigationContainer>
  );
};

export default App;
