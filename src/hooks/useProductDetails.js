import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useProductDetails = (id) => {
    
    const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`https://desolate-depths-52945.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return [product]
};

export default useProductDetails;
