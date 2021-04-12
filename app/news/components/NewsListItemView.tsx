import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text
} from "react-native";
import { NewsItem } from "../types";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/types";
import colors from "../../common/res/colors";

const { width } = Dimensions.get('window');

interface OwnProps {
  newsItem: NewsItem;
  id: string;
}

const NewsListItemView = ({newsItem, id}: OwnProps): React.ReactElement => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const onPressNews = (): void => {
     navigation.navigate('CurrentNews', { newsId: id});
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPressNews}>
      <Image
        source={{ uri: newsItem.urlToImage }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title} numberOfLines={0}>
        {newsItem.title}
      </Text>
    </TouchableOpacity>
  )
};

export default NewsListItemView;

const styles = StyleSheet.create({
  container: {
    width: width - 60,
    alignSelf: 'center',
    borderRadius: 12,
    backgroundColor: colors.white,
    marginBottom: 10,
    overflow: 'visible'
  },
  image: {
    width: width - 60,
    height: 220,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12
  },
  title: {
    fontSize: 16,
    lineHeight: 20,
    color: colors.dark,
    fontWeight: 'bold',
    marginTop: 12,
    marginHorizontal: 12,
    marginBottom: 12
  },
  backDropView: {
    position: 'absolute',
    top: 220 - 89
  }
});