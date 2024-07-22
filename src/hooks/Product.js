import React from 'react'

export default function Product(props) {
    const {pro} = props
  return (
    <div>
        <h1>{pro.title}</h1>
        <p>{pro.id}</p>
    </div>
  )
}
