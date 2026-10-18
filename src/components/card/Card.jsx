import './card.css'
import './card_type/cardprice.css'
import { Card_info } from './card_type/Card_info'
import { Card_price } from './card_type/Card_price'

export function Card ({title, desc, type, price}){
    console.log(type)
    return type ? <Card_price title={title} desc={desc} price={price}/> : <Card_info title={title} desc={desc}/>
}