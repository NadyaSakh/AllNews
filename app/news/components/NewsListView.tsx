import React from "react";
import {
  Dimensions,
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  StyleSheet,
  Text, TextInput, TouchableOpacity, View
} from "react-native";
import colors from "../../common/res/colors";
import { newsList } from "../constants";
import { NewsItem } from "../types";
import NewsListItemView from "./NewsListItemView";

const { width } = Dimensions.get('window');

const renderItem = ({ item, index }: ListRenderItemInfo<NewsItem>): React.ReactElement => {
  const id = `${item.publishedAt}${index}`;
  return <NewsListItemView newsItem={item} id={id}/>;
};

const keyExtractor = (item: NewsItem, index: number): string => `${item.publishedAt}${index}`;

const NewsListView = (): React.ReactElement => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Новости</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholderTextColor={`${colors.dark}40`}
          placeholder="Введите заголовок новости"
        />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchText}>Поиск</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.list}
        data={newsList}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

export default NewsListView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    backgroundColor: colors.lightGray
  },
  searchContainer: {
    flexDirection: 'row',
    width: width - 50,
    justifyContent: 'space-between',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    height: 48,
    marginBottom: 20
  },
  searchButton: {
    paddingHorizontal: 8,
    height: 40,
    backgroundColor: colors.blue,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  searchText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '700'
  },
  input: {
    width: (width - 120),
    height: 48,
    paddingLeft: 13,
    fontSize: 16,
    lineHeight: 18,
    color: colors.dark,
    backgroundColor: colors.lightGray,
    borderWidth: 1,
    borderColor: `${colors.dark}10`,
    borderRadius: 4,
    marginBottom: 25
  },
  list: {
    width
  },
  title: {
    fontSize: 30,
    backgroundColor: 'transparent',
    fontWeight: '700',
    color: colors.black,
    marginTop: 30,
    marginBottom: 20,
    marginLeft: 30
  }
});