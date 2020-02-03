import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';

export default () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <ActivityIndicator size="large" />
    <StatusBar barStyle="default" />
    <TouchableWithoutFeedback onPress={() => {}}>
      <Text>Cancel</Text>
    </TouchableWithoutFeedback>
  </View>
);
