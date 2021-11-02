import React from "react";
import classes from "./ProductDetails.Module.css";
import ProductData from "../../ProductData";

const ProductDetails = (props) => {
  return (
    <div className={classes.ProductData}>
      <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
      <p className={classes.ProductDescription}>{ProductData.description}</p>

      <h3 className={classes.SectionHeading}>Select Color</h3>
      <div>
        <img
          className={[classes.ProductImage, classes.SelectedProductImage].join(
            " "
          )}
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
        <button
          className={[classes.FeatureItem, classes.SelectedFeatureItem].join(
            " "
          )}
        >
          Time
        </button>
        <button className={classes.FeatureItem}>Heart rate</button>
      </div>

      <button className={classes.PrimaryButton}>Buy</button>
    </div>
  );
};

export default ProductDetails;
