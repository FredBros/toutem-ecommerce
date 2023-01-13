import React, { createContext,  useState } from "react";
import { toast } from "react-hot-toast";
import { ShopContextType, Product, Products} from "../@types/data";

export const ShopContext = createContext<ShopContextType>({
  showCart: false,
  setShowCart: () => null,
  cartItems: [],
  totalPrice: 0,
  totalQuantities: 0,
  onAdd: () => null,
  toggleCartItemQuantity: () => null,
  onRemove: () => null,
  setCartItems: () => null,
  setTotalPrice: () => null,
  setTotalQuantities: () => null,
});

type Props = {
  children: React.ReactNode;
};

let foundProduct: Product
let index:number;

export const DataShopProvider = ({ children }: Props) => {
  const [showCart, setShowCart] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<Products>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  //! existe deja dans ProductShop
  // const [qty, setQty] = useState(1);

  const onAdd = (product: Product, quantity: number) => {
    console.log(product.price, quantity);
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantity) => prevTotalQuantity + quantity);
    console.log("totalPrice : ", totalPrice);

    if (checkProductInCart) {
      const updateCartItems: any = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            qtyInCart: cartProduct.qtyInCart || 0 + quantity,
          };
      });
      setCartItems(updateCartItems);
    } else {
      product.qtyInCart = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${quantity} ${product.name} added to the cart.`);
  };

  const onRemove = (id: string) => {
    foundProduct = cartItems.find((item) => item._id === id)!;
    const newCartItems = cartItems.filter(
      (item) => item._id !== foundProduct._id
    );

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.qtyInCart!
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
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === "dec") {
      if (foundProduct.qtyInCart! > 1) {
        newCartItems[index].qtyInCart! -= 1;
        setCartItems(newCartItems);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      }
    }
  };

  return (
    <ShopContext.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        onAdd,
        toggleCartItemQuantity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

// export default ShopContext;
