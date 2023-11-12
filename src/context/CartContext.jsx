import { createContext, useState } from "react"

export const CartContext = createContext()

const CartContextComponet = ({children}) => {
    const [cart, setCart] = useState ( [] )

    const addToCart = (product)=>{
        let exist =isInCart(product.id)
        if(exist){
            let newArray = cart.map( (element)=>{
                if(element.id === product.id){
                    return {...element, quantity:product.quantity}
                }else{
                    return element;
                }
            })
            setCart(newArray)
        }else{
            setCart([...cart, product])
        }
    };


    const isInCart=(id)=>{
        let exist= cart.some(element => element.id === id)
        return exist
    }

    const getQuantityById = (id)=>{
        let productFound = cart.find(element => element.id === id)
        return productFound?.quantity
    
    };

    const clearCart = ()=>{
        setCart([])
    }

    const deleteProductById = (id)=>{
        let newArr = cart.filter((product)=>product.id !== id)
        setCart(newArr)
    }

    const getTotalPrice =()=>{
        let total =cart.reduce((calculator, element)=>{
            return calculator + (element.price * element.quantity)
        },0)
        return total;
    }

    const getTotalProducts =() => {
        let total = cart.reduce((calculator,element)=>{
            return calculator + element.quantity
        },0)
        return total;
    }

    let data = {cart, addToCart, getQuantityById, clearCart, deleteProductById, getTotalPrice, getTotalProducts}
    
  return (
    <CartContext.Provider value={data} >
        {children}
    </CartContext.Provider>
  )
}

export default CartContextComponet