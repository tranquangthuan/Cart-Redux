import React from "react";
class Products extends React.Component {
  render() {
    return (
      <section className="section">
        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
        <div className="row">{this.props.children}</div>
      </section>
    );
  }
}

export default Products;
