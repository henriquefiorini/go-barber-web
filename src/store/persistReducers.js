import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'gobarber',
  storage,
  whitelist: ['auth', 'user'],
};

export default reducers => {
  const persistedReducer = persistReducer(persistConfig, reducers);
  return persistedReducer;
};
