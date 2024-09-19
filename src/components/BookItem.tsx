import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface BookItemProps {
  title: string;
  author_name: string[];
  first_publish_year: number;
  onPress: () => void;
}

const BookItem = ({
  title,
  author_name,
  first_publish_year,
  onPress,
}: BookItemProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.itemContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>
          {author_name ? author_name.join(', ') : 'Unknown Author'}
          {first_publish_year ? ` • ${first_publish_year}` : ''}{' '}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 15,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#024950',
  },
  author: {
    fontSize: 14,
    color: 'grey',
  },
});

export default BookItem;
