import { useState, useEffect } from 'react';
import { IProduct } from '../Utilities/InterfaceDefinition';
import axios from 'axios';

const Products = () => {
  const [productData, setProductData] = useState<IProduct[]>([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products?limit=100`).then((res) => {
      setProductData(res.data.products);
    });
  }, []);

  return (
    <div>
      <h2>Product Table</h2>
    </div>
  );
};

export default Products;
