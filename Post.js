import React, { Component } from "react";
import { View, Text } from "react-native";
import navStyles from "./styles/navStyles";

export default class Post extends Component {
  static navigationOptions = {
    title: "Post",
    ...navStyles
  };
  render() {
    return (
      <View>
        <Text>New page!</Text>
      </View>
    );
  }
}
