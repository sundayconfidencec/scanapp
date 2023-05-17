



import React from 'react';
import { Provider } from 'react-redux';
import {store, persistor} from "./src/redux/Store";
import AllNavigation from './src/navigation/AllNavigation';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  return (
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
             <AllNavigation/>
            </PersistGate>
           </Provider>
  )
}

