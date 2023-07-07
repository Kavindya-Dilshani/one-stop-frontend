import { useState } from 'react';
import { CartContext } from './CartContext'
import { CartItem } from '../../shared/models/CartModels';


export const CartProvider = (props: any) => {
    const { children } = props;
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addItem = (item: CartItem) => {
        let tempCartItemList: CartItem[] = [];
        if (item) {
            if (cartItems.length > 0) {
                tempCartItemList = [...cartItems, item];
            } else {
                tempCartItemList.push(item);
            }
            setCartItems(tempCartItemList);
        }
    }

    const removeItem = (itemId: string) => {
        if (itemId && cartItems && cartItems.length > 0) {
            const originalCartItemList = [...cartItems];
            const newCartItemList = originalCartItemList.filter(item => item.itemId !== itemId);
            setCartItems(newCartItemList);
        }
    }

    const getTotalPrice = (itemPrice: string) => {
        if (itemPrice && cartItems && cartItems.length > 0) {
            const originalCartItemList = [...cartItems];
            const priceCartItemList = originalCartItemList.filter(item => item.itemPrice !== itemPrice);
            setCartItems(priceCartItemList);
        }

    }

    const getAllItems = (): CartItem[] => {
        return cartItems;
    }

    return (
        <CartContext.Provider value={{ addItem, getAllItems, removeItem, getTotalPrice }}>{children}</CartContext.Provider>
    )
}
