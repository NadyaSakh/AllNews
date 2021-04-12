import React from "react";
import {
  Dimensions, Image,
  SafeAreaView, ScrollView,
  StyleSheet,
  Text
} from "react-native";
import colors from "../../common/res/colors";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/types";
import { newsList } from "../../news/constants";

const { width } = Dimensions.get('window');

const CurrentNewsView = (): React.ReactElement => {
  const route = useRoute<RouteProp<RootStackParamList, 'CurrentNews'>>();

  const {
    params: { newsId }
  } = route;

  const currentNews = newsList.find(
    (innerItem, index) => {
      const innerItemId = `${innerItem.publishedAt}${index}`;
      return innerItemId === newsId;
    }
  );

  if (!currentNews) {
    return <></>;
  }

  return  (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.list}
        contentContainerStyle={styles.contentContainerStyle}>
        <Image
          source={{uri: currentNews.urlToImage}}
          style={styles.image}
        />
        <Text style={styles.title} numberOfLines={0}>
          {currentNews.title}
        </Text>
        {/*content*/}
        <Text style={styles.desc} numberOfLines={0}>
          {currentNews.description}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CurrentNewsView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    backgroundColor: colors.white
  },
  list: {
    width,
    marginTop: 25,
    backgroundColor: colors.white
  },
  contentContainerStyle: {
    paddingHorizontal: 30
  },
  image: {
    width: width - 60,
    alignSelf: 'center',
    height: 220,
    borderRadius: 4,
    overflow: 'hidden'
  },
  date: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.dark,
    opacity: 0.7,
    fontWeight: '500',
    marginTop: 12
  },
  title: {
    fontSize: 16,
    lineHeight: 20,
    color: colors.dark,
    fontWeight: 'bold',
    marginTop: 8
  },
  desc: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.dark,
    marginTop: 16
  },
  backDropView: {
    position: 'absolute',
    alignSelf: 'center',
    top: 220 - 89,
    borderRadius: 4,
    overflow: 'hidden'
  }
});