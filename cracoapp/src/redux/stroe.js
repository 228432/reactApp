import { combineReducers,legacy_createStore,applyMiddleware,compose} from "redux";
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'
import dome from './reducer/dome'
import { persistStore,persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'data',
    storage, //存到locaStorege
    whitelist: ['dome'] //白名单 持久化白名单里的内容
  }

const reducers =combineReducers({dome})

const persistedReducer = persistReducer(persistConfig, reducers)//持久化的reducer实例传给store

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(persistedReducer,composeEnhancers(applyMiddleware(reduxThunk,reduxPromise)))

let persistor = persistStore(store)  //持久化store
export {store ,persistor} //导出持久化的reducer和store