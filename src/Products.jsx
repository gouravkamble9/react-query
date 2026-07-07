import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const fetchProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return data.products;
};

const Products = () => {

  const { isLoading, error, data: products } = useQuery({ queryKey: ['products'], queryFn: fetchProducts })


  if (isLoading) {
    return <p className="text-center mt-10">Loading products...</p>;
  }

  if (error) {
    return <p className="text-center mt-10">Something went wrong!</p>;
  }


  return <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Products</h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}  className="group">
            <img
              alt={product.imageAlt}
              src={product.thumbnail}
              className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
            />
            <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  </div>
};

export default Products;
