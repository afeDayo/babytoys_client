import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";

const ProductPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${id}`);

        setProduct(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch product");
      }
    };

    fetchProduct();
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <img src={product.image} alt={product.name} />
    </div>
  );
};

export default ProductPage;
