import AsyncStorage from '@react-native-community/async-storage';
import {
  PersistConfig,
  Persistor,
  persistReducer,
  persistStore
} from 'redux-persist';
import { AnyAction, applyMiddleware, combineReducers, createStore, Store } from "redux";
import thunk from "redux-thunk";
import { RootState } from "./types";
import news from "./reducers/news";

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
  blacklist: []
};

interface IStore {
  store: Store<RootState, AnyAction>;
  persistor: Persistor;
}


const persistedReducer = persistReducer(
  persistConfig,
  combineReducers<RootState>({
    news
  })
);

const middlewares = [thunk];

const configureStore = (): IStore => {
  const store = createStore(persistedReducer, applyMiddleware(...middlewares));
  const persistor = persistStore(store);
  return { persistor, store };
};

export default configureStore;
