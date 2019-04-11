import React from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Post from "./Post";
import NewPost from "./NewPost";
import Posts from "./Posts";
import navStyles from "./styles/navStyles";

class Home extends React.Component {
  static navigationOptions = {
    title: "Home",
    ...navStyles
  };

  goToPost = () => {
    this.props.navigation.navigate("Post");
  };

  newPost = () => {
    this.props.navigation.navigate("NewPost");
  };
  render() {
    return (
      <View style={styles.container}>
        <Posts {...this.props} />
        <TouchableHighlight onPress={this.newPost} style={styles.newPost}>
          <Text style={styles.newPostText}>New Post +</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    flex: 1,
    justifyContent: "space-between"
  },
  newPost: {
    backgroundColor: "#546e7a",
    padding: 20
  },
  newPostText: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff"
  }
});

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  Post: {
    screen: Post
  },
  NewPost: {
    screen: NewPost
  }
});

export default createAppContainer(AppNavigator);
