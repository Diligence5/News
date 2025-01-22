import { PersistConfig } from 'redux-persist';
import { AuthState } from './slices/authSlice'; // Import the type of the auth state
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig: PersistConfig<AuthState> = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: ['auth'], // Persist only the auth slice
};

export default persistConfig;
