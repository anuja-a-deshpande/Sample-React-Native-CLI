import React from 'react';
import {SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';

const basicURLWebview = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        source={{
          uri: 'https://google.com/',
        }}
      />
    </SafeAreaView>
  );
};

export default basicURLWebview;
