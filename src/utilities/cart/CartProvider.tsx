import { useState } from 'react';
import { CartContext } from './CartContext'
import { CartItem } from '../../shared/models/CartModels';


export const CartProvider = (props: any) => {
    const { children } = props;
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addItem = (newItem: CartItem) => {
        let tempCartItemList: CartItem[] = [];
        if (newItem) {
            if (cartItems.length > 0) {
                const index = cartItems.findIndex(cartItem => cartItem.itemId === newItem.itemId);

                if (index > -1) {
                    cartItems[index].totalPrice = cartItems[index].totalPrice + parseInt(cartItems[index].itemPrice);
                    cartItems[index].quantity = cartItems[index].quantity + 1;
                    tempCartItemList = [...cartItems];
                } else {
                    tempCartItemList = [...cartItems, newItem];
                }
            } else {
                tempCartItemList.push(newItem);
            }
            setCartItems(tempCartItemList);
        }
    }

    const removeItem = (itemId: string) => {
        if (itemId && cartItems && cartItems.length > 0) {
            const originalCartItemList = [...cartItems];
            const index = cartItems.findIndex(cartItem => cartItem.itemId === itemId);

            if (index > -1) {
                originalCartItemList[index].quantity = originalCartItemList[index].quantity - 1;
                originalCartItemList[index].totalPrice = (parseInt(cartItems[index].itemPrice) * originalCartItemList[index].quantity);
                setCartItems(originalCartItemList);
            } else {

            }
        }
    }

    const deleteItem = (itemId: string) => {
        if (itemId && cartItems && cartItems.length > 0) {
            const originalCartItemList = [...cartItems];
            const newCartItemList = originalCartItemList.filter(item => item.itemId !== itemId);
            setCartItems(newCartItemList);
        }
    }

    const getTotalPrice = (): number => {
        let total = 0;
        if (cartItems.length > 0) {
            cartItems.forEach(item => {
                total = total + item.totalPrice;
            });
        }
        return total;
    }

    const getAllItems = (): CartItem[] => {
        return cartItems;
    }

    return (
        <CartContext.Provider value={{ addItem, getAllItems, removeItem, getTotalPrice, deleteItem }}>{children}</CartContext.Provider>
    )
}
