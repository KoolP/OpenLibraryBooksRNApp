import React, {useState} from 'react';
import {View, FlatList, Text, StyleSheet, Alert} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import useSearchOpenLibraryBooks from '../hooks/useSearchOpenLibraryBooks';
import ItemSeparator from '../components/ItemSeparator';
import BookItem from '../components/BookItem';
import SearchBar from '../components/SearchBar';

type SearchScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Search'>;
};

const SearchScreen = ({navigation}: SearchScreenProps): JSX.Element => {
  const [query, setQuery] = useState<string>('');

  const {search, isLoading, error, data: books} = useSearchOpenLibraryBooks();

  const handleSearch = () => {
    if (query.trim()) {
      search(query);
    } else {
      Alert.alert('Please enter a search term.');
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar
        query={query}
        setQuery={setQuery}
        onSearch={handleSearch}
        isLoading={isLoading}
      />
      {error && <Text style={styles.error}>{error.message}</Text>}

      <FlatList
        data={books}
        keyExtractor={item => item.key}
        renderItem={({item}) => (
          <BookItem
            title={item.title}
            author_name={item.author_name}
            first_publish_year={item.first_publish_year}
            onPress={() =>
              navigation.navigate('BookDetails', {bookId: item.key})
            }
          />
        )}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},
  input: {borderWidth: 1, padding: 10, marginBottom: 10},
  error: {color: 'red', marginTop: 10, marginBottom: 10},
});

export default SearchScreen;
