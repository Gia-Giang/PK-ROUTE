import React from "react";
import * as BI from "react-icons/bi";

import "./style.scss";

const Procedure = () => {
  return (
    <div className="procedure-item">
      <BI.BiTime size={"50px"} />
      <h2 className="heading">24 h Shipping</h2>
      <p className="title">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo
        felis, consectetur id elit id.
      </p>
    </div>
  );
};

export default Procedure;
