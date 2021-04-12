import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigator from "./RootStackNavigator";

const AppNavigator = (): React.ReactElement => (
  <NavigationContainer>
    <RootStackNavigator/>
  </NavigationContainer>
);

export default AppNavigator;
