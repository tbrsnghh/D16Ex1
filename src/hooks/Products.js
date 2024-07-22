import React, {useState} from 'react'
import Product from './Product'
export default function 
Products() {
    const [list, setList] = useState([
        {id:1, name:"Ha1", price: 30},
        {id:2, name:"Ha1", price: 30},
        {id:3, name:"Ha1", price: 30},
        {id:4, name:"Ha1", price: 30}
    ])
  return (
    <div>
        {
            list.map((item, index)=>(
                <Product key={index} pro={item}/>
            )
        )
        }
    </div>
  )
}
