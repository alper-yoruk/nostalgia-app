import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ImageListItem = (src) => {
  return (
    <View>
      <Image source={src.source} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 260,
    maxWidth: 300,
    marginVertical: 30,
    resizeMode: 'stretch',
  },
});

export default ImageListItem;
