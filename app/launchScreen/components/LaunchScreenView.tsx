import React from "react";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text
} from "react-native";
import colors from "../../common/res/colors";

const { width } = Dimensions.get('window');

const LaunchScreenView = (): React.ReactElement => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>All News</Text>
    </SafeAreaView>
  )
};

export default LaunchScreenView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width,
    backgroundColor: colors.darkGreen
  },
  title: {
    fontSize: 30,
    letterSpacing: 4.2,
    textTransform: 'uppercase',
    fontWeight: 'normal',
    color: colors.white,
  }
});

