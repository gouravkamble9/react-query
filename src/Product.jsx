import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom';



const Product = () => {
  const param = useParams()

 const mutation= useMutation({
    mutationFn:(newProduct)=>{
        return axios.put(`https://dummyjson.com/product/${param.id}`,newProduct)
    }
  })

  const fetchProduct = async () => {
    const res = await fetch(`https://dummyjson.com/products/${param.id}`);
    const data = await res.json();

    return data;
  };


  const { isLoading, error, data: product } = useQuery({ queryKey: ['product', param.id], queryFn: fetchProduct })

  if (isLoading) {
    return <p className="text-center mt-10">Loading products...</p>;
  }

  if (error) {
    return <p className="text-center mt-10">Something went wrong!</p>;
  }


  return (
   <>
     <div>Product:{product.title}</div>
     <button onClick={()=>mutation.mutate({title:"update title"})}>
      Update Product
     </button>
   </>
  )
}

export default Product