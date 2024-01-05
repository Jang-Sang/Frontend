import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from '../reducer'
// import logger from 'redux-logger'

export const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV === 'development',
	// middleware: defaultMiddleware => {
	// 	if (process.env.NODE_ENV === 'development') {
	// 		return [...defaultMiddleware(), logger];
	// 		/* 위와 같이 기존 미들웨어를 깊은 복사 하지 않으면 logger만 남게 다 덮어버림 */
	// 	}
	// 	return defaultMiddleware();
	// },
})
