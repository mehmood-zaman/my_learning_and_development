import React from "react";
import { useRouter } from "next/router";

const ProductDetail = () => {
  const router = useRouter();
  console.log(router.query);
  return <div>Product Deatil page</div>;
};

export default ProductDetail;
