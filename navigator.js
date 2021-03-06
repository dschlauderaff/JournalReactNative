import React from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Fab, Icon } from "native-base";

import Post from "./components/posts/Post";
import NewPost from "./components/posts/NewPost";
import Posts from "./components/posts/Posts";
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
        <Fab onPress={this.newPost} style={styles.newPost}>
          <Icon name="add" />
        </Fab>
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
    backgroundColor: "#546e7a"
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
