import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import classes from "./HeaderCardButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCardButton = (props) => {
  const [btnIsHighLighted, setbtnIsHighLighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOFCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighLighted ? classes.bump : ""
  }`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setbtnIsHighLighted(true);

    const timer = setTimeout(() => {
      setbtnIsHighLighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOFCartItems}</span>
    </button>
  );
};

export default HeaderCardButton;
