import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  ScrollView,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import useFetchBookDetails from '../hooks/useFetchBookDetails';
import {OPEN_LIBRARY_COVERS_URL} from '../services/openLibraryApiClient';

type BookDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'BookDetails'
>;

const BookDetailsScreen = ({route}: BookDetailsScreenProps): JSX.Element => {
  const {bookId} = route.params;
  const {
    fetchDetails,
    isLoading,
    error,
    data: bookDetails,
  } = useFetchBookDetails();

  useEffect(() => {
    fetchDetails(bookId);
  }, [bookId, fetchDetails]);

  if (isLoading) {
    return <ActivityIndicator size="large" color="'#024950" />;
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error.message}</Text>
      </View>
    );
  }

  const renderCoverImage = () => {
    if (bookDetails?.covers && bookDetails.covers.length > 0) {
      return (
        <Image
          style={styles.coverImage}
          source={{
            uri: `${OPEN_LIBRARY_COVERS_URL}${bookDetails.covers[0]}-M.jpg`,
          }}
        />
      );
    }
    return null;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {bookDetails ? (
        <>
          {renderCoverImage()}
          <Text style={styles.title}>{bookDetails.title}</Text>
          <Text style={styles.publishDate}>
            First published: {bookDetails.first_publish_date || 'Unknown'}
          </Text>
          <Text style={styles.description}>
            {typeof bookDetails.description === 'string'
              ? bookDetails.description
              : 'No description available.'}
          </Text>
        </>
      ) : (
        <Text>No book details found</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {padding: 20},
  coverImage: {
    width: 100,
    height: 150,
    marginBottom: 10,
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {fontSize: 16, marginVertical: 10},
  publishDate: {fontSize: 14, color: 'gray'},
  errorContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  errorText: {color: 'red'},
});

export default BookDetailsScreen;
