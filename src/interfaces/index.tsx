import moment from 'moment'
export interface Order {
  id: string
  date: Date
  number: number
  sale: number
  goods: Good[]
}

export interface Good {
  id: string
  name: string
  count: number
  price: number
}

export function getOrderSum (order: Order): number {
  if (!order || !order.goods) return 0
  const sumGoods = getGoodsSum(order.goods)
  const sum = Math.round(sumGoods - sumGoods * (order.sale / 100))
  return sum
}

export function getOrderDate (order: Order): string {
  const today: string = moment(new Date()).format('DD.MM.YYYY')
  
  if (!order) return today
  const orderFullDate: string = moment(order.date).format('DD.MM.YYYY h:mm')

  const orderTime: string = moment(order.date).format('h:mm')
  let orderDate: string = moment(order.date).format('DD.MM.YYYY')
  orderDate = orderDate === today ? `Сегодня ${orderTime}` : orderFullDate
 return orderDate;
}



export function getGoodsSum (goods: Good[]): number {
  if (!goods) return 0
  const sumGoods = goods.reduce((accumulator, item) => {
    return accumulator + item.count * item.price
  }, 0)
  return sumGoods
}

export function getGoodsCount (goods: Good[]): number {
  if (!goods) return 0
  const count = goods.reduce((accumulator, item) => {
    return accumulator + item.count
  }, 0)
  return count
}

export function getGoodNamesCount (goods: Good[]): number {
  if (!goods) return 0
  const count = [...goods.map(item => item.name)].length
  return count
}
