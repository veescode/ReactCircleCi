import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';

export default ({onCancel}) => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <ActivityIndicator size="large" />
    <StatusBar barStyle="default" />
    <TouchableWithoutFeedback onPress={() => onCancel()}>
      <Text>Cancel</Text>
    </TouchableWithoutFeedback>
  </View>
);
