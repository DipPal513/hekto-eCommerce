import React, { useContext } from "react";
import UserContext from '../../App'
const Pages = () => {
  const data = useContext(UserContext);
  console.log(data)
  return (
    <div className="pages">
      <div className="pages-header"></div>
      <div className="pages-products">
        {/* {products.map((product) => (
          <h1>{product.productName}</h1>
        ))} */}
      </div>
    </div>
  );
};

export default Pages;
