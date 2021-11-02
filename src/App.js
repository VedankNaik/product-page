import React from "react";
import classes from "./App.module.css";

import ProductPreview from "./Components/ProductPreview/ProductPreview";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import TopBar from "./Components/TopBar/TopBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopBar/>
      </header>
      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
          <ProductPreview />
        </div>
        <div className={classes.ProductDetails}>
          <ProductDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
