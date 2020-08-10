import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ImageListItem from '../components/ImageListItem';
import images from '../assets/images';

const CategoryImages = ({ route }) => {
  console.log(route);
  return (
    <View style={styles.container}>
      <FlatList
        data={images[route.params.category]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ImageListItem source={item.source} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CategoryImages;
