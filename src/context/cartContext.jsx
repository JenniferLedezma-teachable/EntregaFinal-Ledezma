import { createContext, useState, useEffect } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../firebase/client'

export const CartContext = createContext([])

const CartComponentContext = ({ children }) => {
  const [number, setNumber] = useState(1)
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, 'products')
        const productsSnapshot = await getDocs(productsCollection)
        const productsData = productsSnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        setProducts(productsData)
      } catch (error) {
        console.error('Error getting products from Firebase:', error)
      }
    }

    fetchProducts()
  }, [])

  const sum = (incrementBy = 1) => {
    setNumber((prevNumber) => prevNumber + incrementBy)
  }

  const getProductById = (productId) => {
    return products.find((p) => p.id === productId)
  }

  const emptyCart = () => {
    setCart([])
  }

  const cartLength = () => {
    return cart.length
  }

  const addProduct = (productCart) => {
    try {
      const { productId, quantity } = productCart
      const product = getProductById(productId)
      const itemExists = cart.find((item) => item.product.id === productId)

      if (itemExists) {
        const totalQuantity = itemExists.quantity + quantity

        if (totalQuantity > product.stock) {
          console.log('Product unavaible out stock')
          return false
        } else {
          const updateCart = cart.map((item) =>
            item.product.id === productId
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
          setCart(updateCart)
        }
      } else {
        setCart((oldCart) => [...oldCart, { product, quantity }])
      }
    } catch (error) {
      console.error('Error adding products to cart', error)
    }
    return true
  }

  const finalPrice = () => {
    return cart.reduce((total, { product, quantity }) => {
      const productPrice = product.price * quantity
      return total + productPrice
    }, 0)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        number,
        setNumber,
        sum,
        emptyCart,
        cartLength,
        addProduct,
        finalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartComponentContext
