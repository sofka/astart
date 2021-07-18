import { createSlice } from '@reduxjs/toolkit'
import { AppDispatch, RootState } from './index'
import { Order } from '../interfaces'

const InitialState: Order[] = []
export const slice = createSlice({
  name: 'orders',
  initialState: InitialState,
  reducers: {
    fetchOrders: (state, action) => action.payload
  }
})

export const { fetchOrders } = slice.actions
export const loadedOrders = (state: RootState) => { return state.orders}
export const getOrdersAsync = () => async (dispatch: AppDispatch) => {
  let data = await fetch(
    'https://u38027.netangels.ru/api/orders.php',
    {}
  ).then(res => res.json())
  data = [...data, ...data];
  dispatch(fetchOrders(data))
}

export default slice.reducer
