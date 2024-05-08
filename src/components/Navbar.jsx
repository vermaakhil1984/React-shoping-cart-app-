import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { items } from './Data'
import { BiCart } from "react-icons/bi";

const Navbar = ({setData,cart}) => {
const navigate=useNavigate()
  const [searchTerm,setSearchTerm]=useState("")

  const filterByCategory=(category)=>{
    const element=items.filter((product)=>product.category===category)
    console.log(element)
    setData(element)
  }
  const filterByPrice=(price)=>{
    const element=items.filter((product)=>product.price>=price)
    setData(element)
  }
  const handlesubmit=(e)=>{
    e.preventDefault()
    navigate(`/search/${searchTerm}`)
    setSearchTerm("")
  }
  return (
    <>
    <header className='sticky-top'>
        <div className="nav-bar">
            <Link to={"/"} className="brand">E-Cart</Link>
            <form className="search-bar" onSubmit={handlesubmit}>
                <input type="text" 
                value={searchTerm} 
                onChange={(e)=>setSearchTerm(e.target.value)}
                placeholder='Search Products' />
            </form>
            <Link to={"/cart"} className="cart">
            <button type="button" class="btn btn-primary position-relative" >
            <BiCart  style={{fontSize:"1.5rem"}}/>
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart.length}
    <span class="visually-hidden">unread messages</span>
  </span>
</button>
            </Link>
        </div>
        {location.pathname=='/'&&(
 <div className="navbar-bar-wraper">
 <div className="items">Filter by{" ->"}</div>
 <div className="items" onClick={()=>setData(items)}>No Filter</div>
 <div className="items" onClick={()=>filterByCategory('mobiles')}>Mobiles</div>
 <div className="items" onClick={()=>filterByCategory('laptops')}>Laptops</div>
 <div className="items" onClick={()=>filterByCategory('tablets')}>Tablets</div>
 <div className="items" onClick={()=>filterByPrice('29999')}>{">="}29999</div>
 <div className="items" onClick={()=>filterByPrice('49999')}>{">="}49999</div>
 <div className="items" onClick={()=>filterByPrice('69999')}>{">="}69999</div>
 <div className="items" onClick={()=>filterByPrice('89999')}>{">="}89999</div>
</div>
        )}
       
    </header>
    </>
  )
}

export default Navbar