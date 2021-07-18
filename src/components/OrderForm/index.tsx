import React from 'react'
import { Order } from '../../interfaces'
import GoodList from '../GoodList'
import style from './style.module.css'

interface OrderItemProps {
  order: Order | null
}

const OrderForm: React.FC<OrderItemProps> = ({ order }) => {
  if(!order)
  return <h1>Такого заказа не существует</h1>
  return (
    <form className={style.form}>
        <div className={style.form__def}>
          <h2 className={style.form__h2}>Товар</h2>
          <span className={style.form__name}>Наименование товара</span>
        </div>
        <GoodList goods={order.goods}/>
    </form>
  )
}

export default OrderForm
