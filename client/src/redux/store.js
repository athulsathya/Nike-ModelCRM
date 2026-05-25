// import { configureStore } from '@reduxjs/toolkit'
// // import userReducer from "./features/userSlice"
// import userReducer from './feature/userSlice'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ["user"]
// }

// const persistedReducer = persistReducer(persistConfig, userReducer)

// export const store = configureStore({
//   reducer: {
//     user: persistedReducer
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false
//     })

// })

// export const persistor=persistStore(store)

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./feature/userSlice";

import { persistReducer, persistStore } from "redux-persist";

import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  user: userReducer,
});
console.log(storage);
const persistConfig = {
  key: "root",
  storage: storage.default,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
