import React from "react";
import Header from "./components/Header";
import MessageContainer from "./containers/MessageContainer";
import Footer from "./components/Footer";
import ProductContainer from "./containers/ProductContainer";
import CartContainer from "./containers/CartContainer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main id="mainContainer">
          <div className="container">
            <ProductContainer />
            <MessageContainer />
            <CartContainer />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
