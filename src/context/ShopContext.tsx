import React, { createContext, useState } from "react";
import { toast } from "react-hot-toast";
import { ShopContextType, Product, Products } from "../@types/data";

export const ShopContext = createContext<ShopContextType>({
  showCart: false,
  setShowCart: () => null,
  qty: 1,
  setQty: () => null,
  incQty: () => null,
  decQty: () => null,
  cartItems: [],
  totalPrice: 0,
  totalQuantities: 0,
  onAdd: () => null,
  toggleCartItemQuantity: () => null,
  onRemove: () => null,
  setCartItems: () => null,
  setTotalPrice: () => null,
  setTotalQuantities: () => null,
  updateCartAfterStockIssues: () => null,
});

type Props = {
  children: React.ReactNode;
};

let foundProduct: Product;
let index: number;
let qtyInCart: number;
let stockIsEmpty: boolean = false;

export const DataShopProvider = ({ children }: Props) => {
  const [showCart, setShowCart] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<Products>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

const updateCartAfterStockIssues = (newCart:Products)=> {
  setCartItems(() => newCart);
  let totalP = 0
  let totalQ = 0
  newCart.map((newCartItem)=> {
totalP = totalP + (newCartItem.price * newCartItem.qtyInCart! )
totalQ = totalQ + newCartItem.qtyInCart!
  })
  setTotalPrice(() => totalP);
  setTotalQuantities(()=>totalQ);
}


  const onAdd = (product: Product, quantity: number) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );

    if (checkProductInCart) {
      const updateCartItems: any = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id) {
          qtyInCart = (cartProduct.qtyInCart || 0) + quantity;
          if (cartProduct.qtyInCart! < cartProduct.stock)
            return {
              ...cartProduct,
              qtyInCart: (cartProduct.qtyInCart || 0) + quantity,
            };
          else {
            stockIsEmpty = true;
            return {
              ...cartProduct,
              qtyInCart: cartProduct.qtyInCart || 0,
            };
          }
        }
      });
      setCartItems(updateCartItems);
    } else {
      if (product.stock) {
        product.qtyInCart = quantity;
        setCartItems([...cartItems, { ...product }]);
        qtyInCart = quantity;
      }
      else {stockIsEmpty= true}
    }
    if (!stockIsEmpty) {
      setTotalQuantities((prevTotalQuantity) => prevTotalQuantity + quantity);
      setTotalPrice((prevTotalPrice) =>
        Math.round((prevTotalPrice + product.price * quantity)*100)/100
      );
      toast.success( 
      <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection : "column"}}>
        <h4> {quantity}{" "}{product.name}</h4>
        <p> added to the cart.</p>
        </div>);
    }
    setQty(qtyInCart >= product.stock ? 0 : 1);
  };

  const onRemove = (id: string) => {
    foundProduct = cartItems.find((item) => item._id === id)!;
    const newCartItems = cartItems.filter(
      (item) => item._id !== foundProduct._id
    );

    setTotalPrice(
      (prevTotalPrice) =>
        Math.round((prevTotalPrice - foundProduct.price * foundProduct.qtyInCart!)*100)/100
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.qtyInCart!
    );
    setCartItems(newCartItems);
  };

  const toggleCartItemQuantity = (id: string, value: string) => {
    foundProduct = cartItems.find((item) => item._id === id)!;
    index = cartItems.findIndex((product) => product._id === id);
    const newCartItems = cartItems;

    if (value === "inc") {
      newCartItems[index].qtyInCart! += 1;
      setCartItems(newCartItems);
      setTotalPrice((prevTotalPrice) => Math.round((prevTotalPrice + foundProduct.price)*100)/100);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === "dec") {
      if (foundProduct.qtyInCart! > 1) {
        newCartItems[index].qtyInCart! -= 1;
        setCartItems(newCartItems);
        setTotalPrice((prevTotalPrice) => Math.round((prevTotalPrice - foundProduct.price)*100)/100);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      }
    }
  };

  const incQty = () => {
    setQty((prev) => prev + 1);
  };

  const decQty = () => {
    if (qty === 0) setQty(() => 0);
    else setQty((prev) => prev - 1);
  };

  return (
    <ShopContext.Provider
      value={{
        showCart,
        setShowCart,
        qty,
        setQty,
        decQty,
        incQty,
        cartItems,
        totalPrice,
        totalQuantities,
        onAdd,
        toggleCartItemQuantity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
        updateCartAfterStockIssues,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

// export default ShopContext;
