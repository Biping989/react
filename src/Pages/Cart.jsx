import React, { useState, useEffect, Fragment } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaTrash } from 'react-icons/fa';


const Cart = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem('cartItems'))
        setItems(cartData)
    }, []);
    //handling icrease quantity
    const increaseQty=id=>{
        const updateItems=items.map(item=>{
            if(item.id===id && item.quantity<5){
                return{...item,quantity:item.quantity+1}
            }
            return item
        })
        setItems(updateItems)
        localStorage.setItem('cartItems',JSON.stringify(updateItems))
    }
    //handling decrese quantity 
    const decreaseQty=id=>{
        const updateItems=items.map(item=>{
            if(item.id===id && item.quantity>1){
                return{...item,quantity:item.quantity-1}
            }
            return item
        })
        setItems(updateItems)
        localStorage.setItem('cartItems',JSON.stringify(updateItems))
    }
    //remove item from the cart 
    const removeCartHandle=id=>{
        const confirmed=window.confirm('Are you sure want to remove this project this product from the cart ?')
        if(confirmed){
            const filterCart=items.filter(item=>item.id!==id)
            localStorage.setItem('cartItems',JSON.stringify(filterCart))
            setItems(filterCart)
            toast.success('item is removed from the cart')
        }
    }
    return (
        <>
            <ToastContainer theme='colored' position='top-center' />
            <div className="container">
                <div className="row d-flex-justify-content-between my-4">
                    {items && items.length === 0 ?
                        <h2 className='text-center text-danger'>
                            Your cart is empty
                        </h2>
                        : (
                            <Fragment>
                                <h2 className='text-center '>
                                    Your cart items
                                </h2>
                                <div className="col-md-8 shadow">
                                    {items.map((item, i) => (
                                        <Fragment key={i}>
                                            <hr />
                                            <div className="row d-flex align-items-center">
                                                <div className="col-2"><img src={item.image} alt={item.title} width='50' /></div>
                                                <div className="col-3"><strong>{item.title}</strong></div>
                                                <div className="col-2 text-warning">${item.price}</div>
                                                <div className="col-3">
                                                    <div className="d-flex align-items-center">
                                                        <button className='btn btn-danger' onClick={()=>decreaseQty(item.id)}>-</button>
                                                        &nbsp;&nbsp;
                                                        <strong>{item.quantity}</strong>
                                                        &nbsp;&nbsp;
                                                        <button className='btn btn-primary' onClick={()=>increaseQty(item.id)}>+</button>
                                                    </div>
                                                </div>
                                                <div className="col-1">
                                                    <button className='btn btn-danger' onClick={()=>removeCartHandle(item.id)}><FaTrash /></button>
                                                </div>
                                            </div>
                                            <hr />
                                        </Fragment>
                                    ))}
                                </div>
                                <div className="col-md-3">
                                    <div className="shadow p-2">
                                        <h1>Cart Summary</h1>
                                        <hr />
                                        <p><strong>Units:{items.reduce((a,b)=>a+Number(b.quantity),0)}</strong>(Units)</p>
                                        <p><strong>Total:${items.reduce((ac,item)=>ac+(item.quantity*item.price),0)}</strong></p>
                                        <hr />
                                        <button className='btn btn-warning'>Check out </button>
                                    </div>
                                </div>
                            </Fragment>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Cart