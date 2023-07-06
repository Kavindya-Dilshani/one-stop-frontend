import { createContext, useContext } from 'react'
import { CartItem } from '../../shared/models/CartModels';

export const CartContext = createContext(
    {
        addItem: (item: CartItem) => { },
        getAllItems: (): CartItem[] => { return [] },
        removeItem: (itemId: string) => { },
        getTotalPrice: () => { }
    }
)

export const useCart = () => useContext(CartContext);