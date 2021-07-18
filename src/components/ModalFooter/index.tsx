import React from 'react'
import style from './style.module.css'

interface FooterProps {
  sale: number
  sum: number
}
const ModalFooter: React.FC<FooterProps> = ({ sale, sum }) => {
  return (
    <div className={style.footer}>
      <div className={style.footer__sale}>{sale}</div>
      <div className={style.footer__sum}>{sum}</div>
    </div>
  )
}

export default ModalFooter
