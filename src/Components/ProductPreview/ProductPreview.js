import React from "react";
import classes from "./ProductPreview.Module.css";

const ProductPreview = (props) => {
  const hour =
    new Date().getHours() > 9
      ? new Date().getHours()
      : "0" + new Date().getHours();
  const minute =
    new Date().getMinutes() > 9
      ? new Date().getMinutes()
      : "0" + new Date().getMinutes();

  return (
    <div className={classes.ProductPreview}>
      <img src={props.currentPreviewImage} alt="Product Perview" />
      {props.currentSelectedFeatureIndex === 1 ? (
        <div className={classes.HeartBeatSection}>
          <i class="fas fa-heartbeat"></i>
          <p>78</p>
        </div>
      ) : (
        <div className={classes.TimeSection}>
          <p>{`${hour} : ${minute}`}</p>
        </div>
      )}
    </div>
  );
};

export default ProductPreview;
