import React from "react";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import { createStructuredSelector } from "reselect";
import "./cart-icon.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingBag className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
