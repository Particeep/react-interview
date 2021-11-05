import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureAppStore() {
	const store = configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware]
	});

	sagaMiddleware.run(sagas);

	if (process.env.NODE_ENV !== 'production') {
		if (module.hot) {
			module.hot.accept('./reducers/index', () => {
				store.replaceReducer(rootReducer);
			});
		}
	}

	return store;
}
