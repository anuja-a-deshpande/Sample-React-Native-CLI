import React from 'react';
import {SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';

/// 2. Writing the basic inline HTML
const customHTMLWebView = () => {
  const customHTML = `
      <body style="display:flex; flex-direction: column;justify-content: center; 
        align-items:center; background-color: black; color:white; height: 100%;">
          <h1 style="font-size:100px; padding: 50px; text-align: center;" 
          id="h1_element">
            This is simple html
          </h1>
          <h2 style="display: block; font-size:80px; padding: 50px; 
          text-align: center;" id="h2_element">
            This text will be changed later!
          </h2>
       </body>`;
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView source={{html: customHTML}} />
    </SafeAreaView>
  );
};

/// 1. Creating the basic URL structure
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

export default customHTMLWebView;
