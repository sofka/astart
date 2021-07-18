import cn from 'classnames'
import { MouseEventHandler, useRef } from 'react'
import { Order, getOrderDate, getOrderSum } from '../../interfaces'
import ModalFooter from '../ModalFooter'
import s from './style.module.css'

interface ModalProps {
  isOpen: boolean
  closeModal(): void
  children: JSX.Element
  order: Order | null
}
const Modal: React.FC<ModalProps> = ({
  order,
  isOpen,
  closeModal,
  children
}) => {
  const modalEl = useRef<HTMLDivElement>(null)
  const orderDate = order && getOrderDate(order)
  const sum = order && getOrderSum(order)
  const handleCloseModal = () => {
    closeModal()
  }
  const handleClickRoot: MouseEventHandler<HTMLElement> = (
    event: React.MouseEvent<HTMLElement>
  ) => {}
  return (
    <div className={cn(s.root, { [s.open]: isOpen })} onClick={handleClickRoot}>
      <div ref={modalEl} className={s.modal}>
        <div className={s.head}>
          <span>Заказ № {order && order.number}</span>
          <button
            type='button'
            className={s.btnClose}
            onClick={handleCloseModal}
          />
        </div>
        <div className={s.date}>{orderDate}</div>
        <div className={s.content}>
          {children}
          <ModalFooter sale={order?.sale || 0} sum={sum || 0} />
        </div>
      </div>
    </div>
  )
}

export default Modal
