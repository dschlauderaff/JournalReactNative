import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import navStyles from "./styles/navStyles";
import Post from './Post';

class App extends React.Component {
  static navigationOptions = {
    title: "Home",
    ...navStyles
  }

  goToPost = () => {
    this.props.navigation.navigate('Post');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button 
          onPress={this.goToPost}
          title="Go to Post page"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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

})

export default createAppContainer(AppNavigator);
