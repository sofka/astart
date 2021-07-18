import React from 'react'
import style from './style.module.css'

interface FooterProps {
  sale: number
  sum: number
}
const ModalFooter: React.FC<FooterProps> = ({ sale, sum }) => {
  return (
    <div className={style.footer}>
      <div className={style.footer__sale}>Скидка по заказу составила {sale} %</div>
      <div className={style.footer__sum}>ИТОГО: {sum}</div>
      <div className={style.footer__add}>Дата выдачи заказа 10 дней с момента оплаты</div>

    </div>
  )
}

export default ModalFooter
