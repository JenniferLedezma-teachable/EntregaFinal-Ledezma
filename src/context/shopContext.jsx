import { createContext, useState } from "react"



export const ShopContext = createContext([])


const ShopComponentContext = ({children}) => {
    const [number, setNumber] = useState(1)

    return(
        <ShopContext.Provider value={{number, setNumber}}>
            {children}
        </ShopContext.Provider>
    )

}

export default ShopComponentContext
