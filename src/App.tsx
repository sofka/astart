import React from 'react'
import { useEffect } from 'react'
import Burger from './components/Burger'
import Slider from './components/Slider'
import OrderList from './components/OrderList'
import { useDispatch, useSelector } from 'react-redux'
import { getOrdersAsync, loadedOrders } from './store/orders'
import FilterSVG from './img/filter.svg'
import Modal from './components/Modal'
import OrderForm from './components/OrderForm'
import { useState } from 'react'
import { Order } from './interfaces'

const App: React.FC = () => {
  const dispatch = useDispatch()
  const ordersRedux = useSelector(loadedOrders)
  useEffect(() => {
    dispatch(getOrdersAsync())
    console.log(ordersRedux)
  }, [])
  const [isOpen, setOpen] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const selectOrder = (order: Order) => {
    setOpen(true)
    setSelectedOrder(order);
  }

  const closeModal = () => {
    setOpen(false)
  }
  return (
    <React.Fragment>
      <Burger />
      <Slider />
      <div className='orders'>
        <div className='orders__header'>
          <h1>Список заказов</h1>
          <img src={FilterSVG} alt='filter' />
        </div>
        <OrderList orders={ordersRedux} selectOrder={selectOrder} />
        <Modal isOpen={isOpen} closeModal={closeModal} order={selectedOrder}>
          <OrderForm order={selectedOrder} />
        </Modal>
      </div>
      <footer className='footer'></footer>
    </React.Fragment>
  )
}

export default App
