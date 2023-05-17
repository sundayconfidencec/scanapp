import { createStore, applyMiddleware } from 'redux';
import AuthReducer from './reducers/AuthReducers';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';

// Configuration for redux-persist
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, AuthReducer);

// Create the store with the persisted reducer and thunk middleware
const store = createStore(persistedReducer, applyMiddleware(thunk));

// Create the persistor for persisting the store
const persistor = persistStore(store);

export { store, persistor };