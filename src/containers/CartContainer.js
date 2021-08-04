import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Cart from "../components/Cart";
import CartResult from "../components/CartResult";
import CartItem from "../components/CartItem";
import * as Messsage from "../constants/Message";
import * as Actions from "../actions/index";

class CartContainer extends React.Component {
  render() {
    var { cart } = this.props;
    return (
      <Cart>
        {this.showCartItems(cart)}
        {this.showCartResult(cart)}
      </Cart>
    );
  }
  showCartItems = (cart) => {
    var { onDelete, onChangeMessage, onUpdateQuantity } = this.props;
    var result = (
      <tr>
        <td>{Messsage.MSG_CART_EMPTY}</td>
      </tr>
    );
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartItem
            key={item.product.id}
            item={item}
            onDelete={onDelete}
            onChangeMessage={onChangeMessage}
            onUpdateQuantity={onUpdateQuantity}
          />
        );
      });
    }

    return result;
  };

  showCartResult = (cart) => {
    var result = null;
    if (cart.length > 0) {
      return <CartResult cart={cart} />;
    }
    return result;
  };
}

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
      }),
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  onUpdateQuantity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDelete: (product) => {
      dispatch(Actions.deleteProductInCart(product));
    },
    onChangeMessage: (message) => {
      dispatch(Actions.changeMessage(message));
    },
    onUpdateQuantity: (product, quantity) => {
      dispatch(Actions.updateQuantityInCart(product, quantity));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
