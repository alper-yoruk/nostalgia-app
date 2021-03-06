import 'react-native-gesture-handler';
import React from 'react';
import Home from './screens/Home';
import CategoryImages from './screens/CategoryImages';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#583b55',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CategoryImages"
          component={CategoryImages}
          options={{
            title: ' ',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
