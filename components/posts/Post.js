import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import navStyles from "../../styles/navStyles";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class Post extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.title,
      ...navStyles
    };
  };
  render() {
    const { Post, loading } = this.props;
    if (loading) return <ActivityIndicator size="large" />;
    return (
      <View>
        <Text>{this.props.Post.body}</Text>
      </View>
    );
  }
}

const postQuery = gql`
  query Post($id: ID!) {
    Post(id: $id) {
      id
      title
      body
    }
  }
`;

export default graphql(postQuery, {
  props: ({ data }) => ({ ...data }),
  options: ({ navigation }) => ({
    variables: {
      id: navigation.state.params.id
    }
  })
})(Post);
