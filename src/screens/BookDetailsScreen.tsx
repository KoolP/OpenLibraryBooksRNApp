import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from './types';

type BookDetailsScreenRouteProp = RouteProp<RootStackParamList, 'BookDetails'>;

function BookDetailsScreen(): React.JSX.Element {
  const route = useRoute<BookDetailsScreenRouteProp>();
  const {bookId} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book Details</Text>
      <Text style={styles.bookId}>Book ID: {bookId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bookId: {
    fontSize: 18,
    color: 'gray',
  },
});

export default BookDetailsScreen;
