import React from 'react';
import {SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';

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

/// 3. Communicating between JavaScript and Native
const webViewWithJavascript = () => {
  const runFirst = `
      setTimeout(function() { 
          window.alert("Click me!");
          document.getElementById("h1_element").innerHTML = 
          "What is your favourite language?";
          document.getElementById("h2_element").innerHTML =
          "We will see!";
        }, 1000);
      true; // note: this is required, or you'll sometimes get silent failures
    `;

  const runBeforeFirst = `
      window.isNativeApp = true;
      true; // note: this is required, or you'll sometimes get silent failures
  `;

  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        source={{html: customHTML}}
        onMessage={event => {}}
        injectedJavaScript={runFirst}
        injectedJavaScriptBeforeContentLoaded={runBeforeFirst}
      />
    </SafeAreaView>
  );
};

/// 2. Writing the basic inline HTML
const customHTMLWebView = () => {
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

export default webViewWithJavascript;
