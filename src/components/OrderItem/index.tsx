import React from 'react'
import {
  Order,
  getGoodsCount,
  getGoodNamesCount,
  getOrderSum,
  getOrderDate
} from '../../interfaces'

import style from './style.module.css'
import cn from 'classnames'

interface OrderItemProps {
  order: Order
  selectOrder(order: Order): void
}

const OrderItem: React.FC<OrderItemProps> = ({ order, selectOrder }) => {
  const goodsCount: number = getGoodsCount(order.goods)
  const goodNamesCount: number = getGoodNamesCount(order.goods)
  const price: number = getOrderSum(order)
  const orderDate: string = getOrderDate(order)
  return (
    <li key={order.id} className={style.item} onClick={() => selectOrder(order)}>
      <div className={style.item__block}>
        <div className={style.item__header}>
          <span className={style.item__num}>Заказ №{order.number}</span>
          <span className={style.item__price}>{price}P</span>
        </div>
        <div className={style.item__date}>{orderDate}</div>
      </div>
      <ul className={cn(style.item__block, style.item__block_bottom)}>
        <li>
          <span>товаров {goodsCount}</span>
        </li>
        <li>
          <span>наименований {goodNamesCount}</span>
        </li>
      </ul>
    </li>
  )
}
export default OrderItem
