import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
// import Onboard from './src/components/screens/Onboard';
// import Home from './src/components/screens/Home';
// import LoginScreen from './src/components/screens/LoginScreen';

import MainStack from './src/navigation/MainStack';

const App = () => {
  const [showOnboard, setShowOnboard] = useState(true);

  const handleOnboardFinish = () => {
    setShowOnboard(false);
  };

  return (
    <View style={styles.container}>
      <MainStack />
      {/* {showOnboard && <Onboard handleDone={handleOnboardFinish} />}
      {!showOnboard && <Home/>} */}
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
