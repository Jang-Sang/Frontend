import { combineReducers } from '@reduxjs/toolkit'
import { todoSlice } from './todo'

export const rootReducer = combineReducers({ todo: todoSlice.reducer })
