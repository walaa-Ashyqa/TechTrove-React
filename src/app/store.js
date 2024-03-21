import { configureStore } from '@reduxjs/toolkit';
import cartCounterSlice from '../features/cartCounter/cartCounterSlice.js';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import userSlice from '../features/user/userSlice';
import favoriteCounterSlice from '../features/favoriteCounter/favoriteCounterSlice.js';
 
const persistcartCounterConfig = {
    key: 'cartCounter-persist',
    storage,
  }
   
  const persistedcartReducer = persistReducer(persistcartCounterConfig, cartCounterSlice)

  const persistuserConfig = {
    key: 'user-persist',
    storage,
  }
   
  const persisteduserReducer = persistReducer(persistuserConfig, userSlice)

  const persistfavoriteConfig = {
    key: 'favorite-persist',
    storage,
  }
   
  const persistedfavoriteReducer = persistReducer(persistfavoriteConfig, favoriteCounterSlice)

export const store = configureStore({
  reducer: {
    cartCounter:persistedcartReducer,
    user:persisteduserReducer,
    favoriteCounter:persistedfavoriteReducer,
  },
})
export const persistor = persistStore(store)
