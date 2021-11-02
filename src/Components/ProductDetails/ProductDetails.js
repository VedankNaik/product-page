import React from "react";
import classes from "./ProductDetails.Module.css";
import ProductData from "../../ProductData";

const ProductDetails = (props) => {
  const colorOptions = props.data.colorOptions.map((item, index) => {
    const classArr = [classes.ProductImage];
    if (index === props.currentPreviewImagePos) {
      classArr.push(classes.SelectedProductImage);
    }
    return (
      <img
        key={index}
        className={classArr.join(" ")}
        src={item.imageUrl}
        alt={item.styleName}
        onClick={() => props.onColorSelectClick(index)}
      />
    );
  });

  const featureList = props.data.featureList.map((item, index) => {
    const classArr = [classes.FeatureItem];
    if (index === props.currentSelectedFeatureIndex) {
      classArr.push(classes.SelectedFeatureItem);
    }
    return (
      <button
        onClick={() => props.onFeatureItemClick(index)}
        key={index}
        className={classArr.join(" ")}
      >
        {item}
      </button>
    );
  });

  return (
    <div className={classes.ProductData}>
      <h1 className={classes.ProductTitle}>{props.data.title}</h1>
      <p className={classes.ProductDescription}>{props.data.description}</p>

      <h3 className={classes.SectionHeading}>Select Color</h3>
      <div>{colorOptions}</div>

      <h3 className={classes.SectionHeading}>Features</h3>
      <div>{featureList}</div>

      <button className={classes.PrimaryButton}>Buy</button>
    </div>
  );
};

export default ProductDetails;
