import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from './src/screens/SearchScreen';
import BookDetailsScreen from './src/screens/BookDetailsScreen';
import {RootStackParamList} from './src/screens/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{title: 'Search Books'}}
        />
        <Stack.Screen
          name="BookDetails"
          component={BookDetailsScreen}
          options={{title: 'Book Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
