import React from 'react';
import {SafeAreaView} from 'react-native';
import BlinkApp from './Hooks';
import Counter from './Redux_Example/Counter';

/// 1. Creating the basic URL structure
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <BlinkApp /> */}
      <Counter />
    </SafeAreaView>
  );
};

export default App;
