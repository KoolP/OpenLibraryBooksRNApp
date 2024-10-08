import React from 'react';
import {View, StyleSheet} from 'react-native';

const ItemSeparator = (): JSX.Element => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: 'lightgrey',
  },
});

export default ItemSeparator;
