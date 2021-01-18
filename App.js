import React, { useState } from "react";
import { StyleSheet } from "react-native";

import { AppLoading } from "expo-app-loading";
import { Asset } from "expo-asset";

import Navigation from "./navigation";
import { Block } from "./components";

// import all used images
const images = [
  require("./assets/icons/back.png"),
  require("./assets/icons/plants.png"),
  require("./assets/icons/seeds.png"),
  require("./assets/icons/flowers.png"),
  require("./assets/icons/sprayers.png"),
  require("./assets/icons/pots.png"),
  require("./assets/icons/fertilizers.png"),
  require("./assets/images/plants_1.png"),
  require("./assets/images/plants_2.png"),
  require("./assets/images/plants_3.png"),
  require("./assets/images/explore_1.png"),
  require("./assets/images/explore_2.png"),
  require("./assets/images/explore_3.png"),
  require("./assets/images/explore_4.png"),
  require("./assets/images/explore_5.png"),
  require("./assets/images/explore_6.png"),
  require("./assets/images/illustration_1.png"),
  require("./assets/images/illustration_2.png"),
  require("./assets/images/illustration_3.png"),
  require("./assets/images/avatar.png")
];

const App = () => {
  /* state = {
    isLoadingComplete: false
  }; */
  const [state, setstate] = useState({
    isLoadingComplete: false
  })

  const { isLoadingComplete } = state

  handleResourcesAsync = async () => {
    // we're caching all the images
    // for better performance on the app

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all(cacheImages);
  };

  
    // if (!this.state.isLoadingComplete) {
    if (!isLoadingComplete) {
      
        <AppLoading
          startAsync={this.handleResourcesAsync}
          onError={error => console.warn(error)}
          onFinish={() => this.setState({ isLoadingComplete: true })}
        />
      
    }

    
      <Block white>
        <Navigation />
      </Block>
    
  
}

const styles = StyleSheet.create({});
export default App