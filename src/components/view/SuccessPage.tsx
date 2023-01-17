import { Card } from '@nextui-org/react'
import React, {useContext} from 'react'
import { ShopContext } from "../../context/ShopContext";


// update sanity
// vider le panier

const SuccessPage = () => {

    localStorage.clear();

    const {cartItems} = useContext(ShopContext)
    

  return (
    <div>SuccessPage</div>
  )
}

export default SuccessPage