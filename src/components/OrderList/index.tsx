import React from 'react'
import { Order } from '../../interfaces'
import OrderItem from '../OrderItem'
import style from './style.module.css'

interface OrderListProps {
  orders: Order[],
  selectOrder(order: Order):void
}

const OrderList: React.FC<OrderListProps> = ({ orders, selectOrder }: OrderListProps) => {
  return (
    <div className={style.container}>
    <ul className={style.list}>
      {orders.map(el => (
        <OrderItem order={el} selectOrder={selectOrder}/>
      ))}
    </ul>
    </div>
  )
}

export default OrderList
