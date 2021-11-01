import React from "react";
import classes from "./App.module.css";
import ProductData from "./ProductData";

function App() {
  const hour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
  const minute = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();
  return (
    <div className="App">
      <header className="App-header">
        <nav className={classes.Topbar}>
          <img
            src="https://freepngimg.com/thumb/online_shopping/12-2-online-shopping-png-clipart.png"
            alt="Logo"
          />
        </nav>
      </header>
      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
          <img src="https://imgur.com/iOeUBV7.png" alt="Product Perview" />
          {/* <div className={classes.TimeSection}>
            <p>{`${hour} : ${minute}`}</p>
          </div> */}
          <div className={classes.HeartBeatSection}>
            <i class="fas fa-heartbeat"></i>
            <p>78</p>
          </div>
        </div>
        <div className={classes.ProductData}>
          <h1 className={classes.ProductTitle}>Product{ProductData.title}</h1>
          <p className={classes.ProductDescription}>
            {ProductData.description}
          </p>

          <h3 className={classes.SectionHeading}>Select Color</h3>
          <div>
          <img
              className={[classes.ProductImage, classes.SelectedProductImage].join(' ')}
              src="https://imgur.com/iOeUBV7.png"
              alt="Black Watch"
            />
            <img
              className={classes.ProductImage}
              src="https://imgur.com/PTgQlim.png"
              alt="Red Watch"
            />
            <img
              className={classes.ProductImage}
              src="https://imgur.com/Mplj1YR.pngng"
              alt="Blue Watch"
            />
            <img
              className={classes.ProductImage}
              src="https://imgur.com/xSIK4M8.png"
              alt="Purple Watch"
            />
          </div>

          <h3 className={classes.SectionHeading}>Features</h3>
          <div>
            <button className={[classes.FeatureItem, classes.SelectedFeatureItem].join(' ')}>Time</button>
            <button className={classes.FeatureItem}>Heart rate</button>
          </div>

          <button className={classes.PrimaryButton}>Buy</button>
        </div>
      </div>
    </div>
  );
}

export default App;
