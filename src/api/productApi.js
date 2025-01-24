import axios from "./axios";

const rateProduct = async (productId, rating) => {
  try {
    const response = await axios.post(`/api/products/${productId}/rate`, {
      rating,
    });

    return response.data;
  } catch (err) {
    console.error(
      "Error rating product:",
      err.response?.data?.message || err.message
    );

    throw err;
  }
};

export default rateProduct;
