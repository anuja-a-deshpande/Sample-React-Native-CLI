import React, {useState, useEffect} from 'react';
import {Text, SafeAreaView} from 'react-native';

const Blink = props => {
  const [isShowingText, setIsShowingText] = useState(true);

  useEffect(() => {
    const toggle = setInterval(() => {
      setIsShowingText(!isShowingText);
    }, 1000);

    return () => clearInterval(toggle);
  });

  if (!isShowingText) {
    return null;
  }

  return <Text>{props.text}</Text>;
};

const BlinkApp = () => {
  return (
    <SafeAreaView style={{alignContent: 'center'}}>
      <Blink text="I love to blink" />
    </SafeAreaView>
  );
};

export default BlinkApp;
