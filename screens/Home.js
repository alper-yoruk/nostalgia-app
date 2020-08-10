import React from 'react';
import { View, StyleSheet } from 'react-native';
import CategoryButton from '../components/CategoryButton';
import categories from '../assets/categories';

const Home = ({ navigation }) => {
  return (
    <View style={styles.view}>
      {categories.map((data) => {
        return <CategoryButton navigation={navigation} info={data} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
  },
});

export default Home;
