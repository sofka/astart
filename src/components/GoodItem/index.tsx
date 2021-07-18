import React from 'react'
import { Good } from '../../interfaces'
import style from './style.module.css'

interface GoodItemProps {
  good: Good
}

const GoodItem: React.FC<GoodItemProps> = ({ good }) => {
  return (
    <li key={good.id} className={style.item}>
      <div className={style.item__wrapper}>
        <div className={style.item__block}>
          <div className={style.item__name}>{good.name}</div>
          <div className={style.item__count}>Количество {good.count} шт. </div>
        </div>
        <div className={style.item__price}>{good.price} Р</div>
      </div>
    </li>
  )
}
export default GoodItem
