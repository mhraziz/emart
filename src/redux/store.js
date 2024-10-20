// store.js

// src/redux/store.js
// import { createStore, combineReducers } from 'redux';
// import cartReducer from './reducer/cartReducer';

// const rootReducer = combineReducers({
//   cart: cartReducer, // Ensure your reducer is correctly set up here
//   // ... add other reducers if any
// });

// const store = createStore(rootReducer);

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
