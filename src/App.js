import { Fragment, useState } from "react";

import "./App.css";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvide from "./store/CartProvider";

const App = () => {
  const [cartIsShown, setcartIsShown] = useState(true);

  const showCartHandler = () => {
    setcartIsShown(true);
  };

  const hideCartHandler = () => {
    setcartIsShown(false);
  };

  return (
    <CartProvide>
      {cartIsShown && <Cart  onClose={hideCartHandler}/>}
      <Header onShowCart ={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvide>
  );
};

export default App;
