import React from "react";
import { FaMoneyBillAlt } from "react-icons/fa";
import { MdEuro } from "react-icons/md";
import { Link } from "react-router-dom";

function NavBar({money}) {
  return (
    <div className="navBar">
      <Link to = "/"><h2>Store</h2></Link>
      <div className="cart-items">
        <FaMoneyBillAlt />
        <div className="cart-num"> <h2>{money} <MdEuro /></h2></div>
        <p className="cart-num"></p>       
      </div>
      <div className="my-subscriptions">
      <Link to = "/cart"><h2>My Subscriptions</h2></Link>
      </div>
    </div>
  );

}
export default NavBar;