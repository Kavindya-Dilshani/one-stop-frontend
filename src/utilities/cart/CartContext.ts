import { createContext, useContext } from 'react'
import { CartItem } from '../../shared/models/CartModels';


export const CartContext = createContext(
    {
        addItem: (item: CartItem) => { },
        getAllItems: (): CartItem[] => { return [] },
        removeItem: (itemId: string) => { },
        getTotalPrice: (): number => { return 0; },
        deleteItem: (itemId: string) => { },
    }
)

export const useCart = () => useContext(CartContext);