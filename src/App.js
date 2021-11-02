import React, { Component } from "react";
import classes from "./App.module.css";
import TopBar from "./Components/TopBar/TopBar";
import ProductPreview from "./Components/ProductPreview/ProductPreview";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import ProductData from "./ProductData";

class App extends Component {
  state = {
    productData: ProductData,
    currentPreviewImageIndex: 0,
    currentSelectedFeatureIndex: 0,
  };

  onColorSelectClick = (index) => {
    this.setState({ currentPreviewImageIndex: index });
  };

  onFeatureItemClick = (index) => {
    this.setState({ currentSelectedFeatureIndex: index });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TopBar />
        </header>
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview
              currentPreviewImage={
                this.state.productData.colorOptions[
                  this.state.currentPreviewImageIndex
                ].imageUrl
              }
              currentSelectedFeatureIndex={this.state.currentSelectedFeatureIndex}
            />
          </div>
          <div className={classes.ProductDetails}>
            <ProductDetails
              data={this.state.productData}
              onColorSelectClick={this.onColorSelectClick}
              currentPreviewImagePos={this.state.currentPreviewImageIndex}
              onFeatureItemClick={this.onFeatureItemClick}
              currentSelectedFeatureIndex={this.state.currentSelectedFeatureIndex}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
