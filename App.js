import React from 'react';
import {SafeAreaView} from 'react-native';
import BlinkApp from './Hooks';

/// 1. Creating the basic URL structure
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <BlinkApp />
    </SafeAreaView>
  );
};

export default App;
