import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import navStyles from "../../styles/navStyles";
import PostForm from "./PostForm";

class NewPost extends Component {
  state = {
    loading: false
  };
  static navigationOptions = {
    title: "New Post",
    ...navStyles
  };

  newPost = ({ title, body }) => {
    const { newPost, navigation } = this.props;

    this.setState({ loading: true });
    newPost({
      variables: {
        title,
        body
      }
    })
      .then(() => {
        navigation.goBack();
      })
      .catch(error => {
        console.log(error);
        this.setState({ loading: false });
      });
  };

  render() {
    return (
      <View>
        {this.state.loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <PostForm onSubmit={this.newPost} />
        )}
      </View>
    );
  }
}

const newPost = gql`
  mutation newPost($title: String!, $body: String!) {
    createPost(title: $title, body: $body) {
      id
    }
  }
`;

export default graphql(newPost, {
  name: "newPost",
  options: {
    refetchQueries: ["postsQuery"]
  }
})(NewPost);
