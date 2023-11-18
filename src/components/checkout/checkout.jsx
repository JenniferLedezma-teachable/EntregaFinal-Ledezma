import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { db } from '../../firebase/client'
import { collection, addDoc  } from 'firebase/firestore'
import { CartContext } from '../../context/cartContext'

const Checkout = () => {
    const [orderId, setOrderId] = useState('')
    const { cart, emptyCart, finalPrice } = useContext(CartContext)
    const { register, handleSubmit } = useForm()

    const comprar = (data) => {
        const order = {
            cliente: data,
            productos: cart,
            total: finalPrice()
        }

        const pedidosRef = collection(db, 'orders')
        addDoc(pedidosRef, order)
        .then((doc) => {
            setOrderId(doc.id)
            emptyCart()
        })
    }

    if(orderId){
        return(
            <div className='order-fin'>
                <h1>Thank you for your order!</h1>
                <p>You will received your order soon.</p>
                <p>Tracking number: {orderId}</p>
                <Link to='/products'>Continue Buying</Link>
            </div>
        )
    }

    return (
        <div className='order'>
            <h1>Now complete your personal info to proceed with your order</h1>
            <form className='form' onSubmit={handleSubmit(comprar)}>
                
                <input type='text' placeholder='Fullname' {...register('name')} required/>
                <input type='email' placeholder='Email' {...register('email')} required/>
                <input type='phone' placeholder='Phone Number' {...register('phone')} required/>
                <input type='cardNumber' placeholder='Card Number:' {...register('card')} required/>

                <button className='buy' type='submit'>Send my Order</button>
            </form>
        </div>
    )
}

export default Checkout