import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import Product from './Product'

const SearchItems = ({cart ,setCart}) => {
  const {term}=useParams()

  const[searchItems,setSearchItems]=useState([])

  useEffect(()=>{
const filterData=()=>{
const data=items.filter((p)=>p.title.toLocaleLowerCase().includes(term.toLocaleLowerCase()))
//console.log(data)
setSearchItems(data)
}
filterData()
  },[term])

  return (
    <Product cart={cart} setCart={setCart} items={searchItems}/>
  )
}

export default SearchItems