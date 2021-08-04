import React from "react";
import * as Messsage from "../constants/Message";
class Product extends React.Component {
  showRating(rating) {
    var result = [];
    for (let index = 1; index <= rating; index++) {
      result.push(<i className="fa fa-star" key={index}></i>);
    }
    for (let index = 1; index <= 5 - rating; index++) {
      result.push(<i className="fa fa-star-o" key={rating + index}></i>);
    }
    return result;
  }

  onAddToCart = (product) => {
    this.props.onAddToCart(product);
    this.props.onChangeMessage(Messsage.MSG_ADD_TO_CART_SUCCESS);
  };

  render() {
    var { product } = this.props;
    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img src={product.image} className="img-fluid" alt="" />
            <a href="/#">
              <div className="mask waves-light waves-effect waves-light"></div>
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <a href="/#">{product.name}</a>
              </strong>
            </h4>
            <ul className="rating">
              <li>{this.showRating(product.rating)}</li>
            </ul>
            <p className="card-text">{product.description}</p>
            <div className="card-footer">
              <span className="left">{product.price}$</span>
              <span className="right">
                <a
                  href="/#"
                  className="btn-floating blue-gradient"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Add to Cart"
                  onClick={() => this.onAddToCart(product)}
                >
                  <i className="fa fa-shopping-cart"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
