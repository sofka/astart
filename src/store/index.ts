import { configureStore } from '@reduxjs/toolkit';
import ordersReducer from './orders';
import { useDispatch } from 'react-redux'


const store = configureStore({
    reducer: {
        orders: ordersReducer,
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>() 
