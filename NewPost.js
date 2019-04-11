import React, { Component } from 'react';
import { View, Text } from 'react-native';

import navStyles from "./styles/navStyles"

export default class NewPost extends Component {
  static navigationOptions = {
    title: "Post",
    ...navStyles
  };

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
