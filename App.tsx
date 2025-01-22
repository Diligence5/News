/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {

  LogBox,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Routes from './src/navigation/Routes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/redux/store';
import { PaperProvider } from 'react-native-paper';



function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  // Ignore specific warnings that are not relevant
  LogBox.ignoreLogs(['Warning: ...']); // Add specific log messages to ignore, if necessary

  // Ignore all logs is not recommended, use with caution.
  LogBox.ignoreAllLogs();  // Only use this if you want to mute all logs


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <Routes />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}



export default App;
