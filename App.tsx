import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from './src/screens/SearchScreen';
import BookDetailsScreen from './src/screens/BookDetailsScreen';
import {RootStackParamList} from './src/screens/types';
import './msw.polyfills';
// import {AppRegistry} from 'react-native';
// import {name as appName} from './app.json';

// Enable MSW api mocking in the app when running the simulator aka DEV mode. NOTE: This does not effect the test files that run the MSW setup al time.
// async function enableMocking() {
//   if (!__DEV__) {
//     return;
//   }
//   // eslint-disable-next-line @typescript-eslint/no-require-imports
//   require('./msw.polyfills');
//   // eslint-disable-next-line @typescript-eslint/no-require-imports
//   const {server} = require('./src/mocks/server');
//   server.listen();
// }

// enableMocking().then(() => {
//   AppRegistry.registerComponent(appName, () => App);
// });

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
