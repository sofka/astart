import React from 'react'
import { Good } from '../../interfaces'
import GoodItem from '../GoodItem'
import style from './style.module.css'

interface GoodListProps {
  goods: Good[]
}

const GoodList: React.FC<GoodListProps> = ({ goods }: GoodListProps) => {
  return (
    <ul className={style.list}>
      {goods.map(el => (
        <GoodItem good={el} />
      ))}
    </ul>
  )
}

export default GoodList
