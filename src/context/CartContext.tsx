import { createContext, ReactNode, useContext, useState } from 'react';

type CartItemType = {
  id: number;
  quantity: number;
};

type CartContextType = {
  cartItems: CartItemType[];
  addToCart: (itemId: number, quantity: number) => void;
  removeFromCart: (itemId: number, quantity: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

type CartProviderProps = {
  children: ReactNode;
};

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);


  const addToCart = (id: number, quantity: number) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find((item) => item.id === id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [...prevItems, { id, quantity }];
      }
    });
  };

  const removeFromCart = (id: number, quantity: number) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === id);

      if (existingItem) {
        if (existingItem.quantity - quantity <= 0) {
          return prevItems.filter((item) => item.id !== id);
        }

        return prevItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - quantity } : item
        );
      } else {
        return prevItems;
      }
    });
  };

  const value = { cartItems, addToCart, removeFromCart };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
}