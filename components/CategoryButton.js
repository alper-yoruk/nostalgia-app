import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const CategoryButton = ({ navigation, info }) => {
  return (
    <View style={styles.view}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('CategoryImages', {
            category: [info.categoryLabel],
          });
        }}>
        <ImageBackground
          resizeMode="stretch"
          style={styles.backgroundImage}
          source={info.categoryImage}
        />
        <Text style={styles.text}>{info.categoryName}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    height: 120,
    width: 220,
    marginBottom: 12,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  backgroundImage: {
    width: 220,
    height: 120,
    opacity: 0.8,
    position: 'absolute',
  },
});

export default CategoryButton;
