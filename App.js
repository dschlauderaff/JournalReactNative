import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import navStyles from "./styles/navStyles";
import Post from "./Post";
import Posts from "./Posts";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://api.graph.cool/simple/v1/cju9zkw1n81mg0177iw64pyph"
  }),
  cache: new InMemoryCache()
});

class App extends React.Component {
  static navigationOptions = {
    title: "Home",
    ...navStyles
  };

  goToPost = () => {
    this.props.navigation.navigate("Post");
  };

  render() {
    return (
      <ApolloProvider client={client}>
        <View style={styles.container}>
          <Posts />
          <Button onPress={this.goToPost} title="Go to Post page" />
        </View>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center"
  }
});

const AppNavigator = createStackNavigator({
  Home: {
    screen: App
  },
  Post: {
    screen: Post
  }
});

export default createAppContainer(AppNavigator);
