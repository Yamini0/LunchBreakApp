import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Onboard from './src/components/screens/Onboard';
import Home from './src/components/screens/Home';
import LoginScreen from './src/components/screens/LoginScreen';
import RootStack from './src/navigation/RootStack';
const App = () => {
  const [showOnboard, setShowOnboard] = useState(true);

  const handleOnboardFinish = () => {
    setShowOnboard(false);
  };

  return (
    <View style={styles.container}>
      {/* <RootStack /> */}
      {/* <Onboard /> */}
      {/* <LoginScreen /> */}
      {showOnboard && <Onboard handleDone={handleOnboardFinish} />}
      {!showOnboard && <RootStack />}
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
