import React, { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  wishlistItems: [],
  getProductQuantity: () => {},
  AddProductToCart: () => {},
  RemoveProductFromCart: () => {},
  RemoveAllProductsFromCart: () => {},
  AddProductToWishlist: () => {},
  RemoveProductFromWishlist: () => {},
  getProductWishlist: () => {},
  RemoveSelectedProduct:()=>{},
  Clearwishlist: ()=>{},
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState(() => {
    const storedItems = localStorage.getItem("cartContainer");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  const [wishlistProducts, setWishlistProducts] = useState(() => {
    const storedItems = localStorage.getItem("wishlistContainer");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartContainer", JSON.stringify(cartProducts));
  }, [cartProducts]);

  useEffect(() => {
    localStorage.setItem("wishlistContainer", JSON.stringify(wishlistProducts));
  }, [wishlistProducts]);

  function getProductQuantity(product) {
    const foundProduct = cartProducts.find((p) => p.id === product.id);
    return foundProduct ? foundProduct.quantity : 0;
  }

  function AddProductToCart(product) {
    const existingProduct = cartProducts.find((p) => p.id === product.id);
    if (existingProduct) {
      setCartProducts(
        cartProducts.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      );
    } else {
      setCartProducts([...cartProducts, { ...product, quantity: 1 }]);
    }
  }

  function RemoveSelectedProduct(id){
    setCartProducts(
      cartProducts.filter((p)=> p.id !== id)
    );
  }

  function RemoveProductFromCart(id) {
    setCartProducts(
      cartProducts.map((p) =>
        p.id === id && p.quantity > 0 ? { ...p, quantity: p.quantity - 1 } : p
      ).filter((p) => p.quantity > 0) // Filter out items with quantity zero
    );
  }

  function RemoveAllProductsFromCart() {
    setCartProducts([]);
  }

  function getProductWishlist(product) {
    const wishlistProduct = wishlistProducts.find((p) => p.id === product.id);
    return wishlistProduct ? wishlistProduct.quantity : 0;
  }

  function AddProductToWishlist(product) {
    const addToWishlist = wishlistProducts.find((p) => p.id === product.id);
    if (addToWishlist) {
      setWishlistProducts(
        wishlistProducts.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      );
    } else {
      setWishlistProducts([...wishlistProducts, { ...product, quantity: 1 }]);
    }
  }

  function RemoveProductFromWishlist(id) {
    setWishlistProducts(
      wishlistProducts.filter((p) => p.id !== id)
    );
  }

  function Clearwishlist(){
    setWishlistProducts([]);
  }

  const contextValue = {
    cartItems: cartProducts,
    wishlistItems: wishlistProducts,
    getProductQuantity,
    AddProductToCart,
    RemoveProductFromCart,
    RemoveAllProductsFromCart,
    AddProductToWishlist,
    RemoveProductFromWishlist,
    getProductWishlist,
    RemoveSelectedProduct,
    Clearwishlist,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}

export function useShoppingCart() {
  return useContext(CartContext);
}
