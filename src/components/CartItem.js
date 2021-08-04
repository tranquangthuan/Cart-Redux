import React from "react";
import * as Message from "../constants/Message";
class CartItem extends React.Component {
  render() {
    var { product, quantity } = this.props.item;

    return (
      <tr>
        <th scope="row">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>
            <strong>{product.name}</strong>
          </h5>
        </td>
        <td>{product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{quantity}</span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light"
              onClick={() => this.onUpdateQuantity(product, quantity - 1)}
            >
              <a href="/#">—</a>
            </label>
            <label
              className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light"
              onClick={() => this.onUpdateQuantity(product, quantity + 1)}
            >
              <a href="/#">+</a>
            </label>
          </div>
        </td>
        <td>{this.showSubTotal(product.price, quantity)}$</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Remove item"
            onClick={() => this.onDelete(product)}
          >
            X
          </button>
        </td>
      </tr>
    );
  }

  showSubTotal(price, quantity) {
    return price * quantity;
  }

  onDelete = (product) => {
    this.props.onDelete(product);
    this.props.onChangeMessage(Message.MSG_DELETE_PRODUCT_TO_CART_SUCCESS);
  };

  onUpdateQuantity = (product, quantity) => {
    console.log("update Quantity ", product, quantity);
    if (quantity > 0) {
      this.props.onUpdateQuantity(product, quantity);
      this.props.onChangeMessage(Message.MSG_UPDATE_TO_CART_SUCCESS);
    }
  };
}

export default CartItem;
