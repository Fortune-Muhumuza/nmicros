import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './reducers/usersSlice'
import transactionsReducer from './reducers/transactionsSlice'

export default configureStore({
    reducer: {
        users: usersReducer,
        transactions: transactionsReducer
    }
  })