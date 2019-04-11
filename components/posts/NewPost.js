import React, { Component } from "react";
import { View, Text } from "react-native";

import navStyles from "../../styles/navStyles";
import PostForm from "./PostForm";

export default class NewPost extends Component {
  static navigationOptions = {
    title: "Post",
    ...navStyles
  };

  newPost = ({title, body}) => {

    console.log(title, body)
  }

  render() {
    return (
      <View>
        <PostForm onSubmit={this.newPost} />
      </View>
    );
  }
}
