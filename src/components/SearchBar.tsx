import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

interface SearchBarProps {
  query: string;
  setQuery: (text: string) => void;
  onSearch: () => void;
  loading: boolean; // New prop to handle loading state
}

const SearchBar = ({
  query,
  setQuery,
  onSearch,
  loading,
}: SearchBarProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for books"
        value={query}
        onChangeText={setQuery}
      />
      <View style={styles.buttonContainer}>
        {loading ? (
          <ActivityIndicator size="small" color="#024950" />
        ) : (
          <TouchableOpacity style={styles.button} onPress={onSearch}>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    padding: 14,
    marginRight: 2,
    borderRadius: 10,
    borderColor: 'grey',
    fontSize: 18,
  },
  buttonContainer: {
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#024950',
    paddingVertical: 15,
    paddingHorizontal: 24,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SearchBar;
