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
      <img src="https://imgur.com/iOeUBV7.png" alt="Product Perview" />
      <div className={classes.TimeSection}>
        <p>{`${hour} : ${minute}`}</p>
      </div>
      {/* <div className={classes.HeartBeatSection}>
        <i class="fas fa-heartbeat"></i>
        <p>78</p>
      </div> */}
    </div>
  );
};

export default ProductPreview;
