import { client } from "@/sanity/lib/client";
import React from "react";

async function ProductPage({ params }: { params: { slug: string } }) {
    const { slug } = params;
  console.log("Product slug:", slug);
  // lib/queries.ts
const getAllProductsQuery = `*[_type == "product"]{
  _id,
  title,
  category,
  basePrice,
  dimensions,
  weights,
  packaging
}`;
const data = await client.fetch(getAllProductsQuery);
console.log("Query to fetch all products:", data);

  return (
    <div>
      <h1> {data.map((item:any , index:number) => item.title)}</h1>
    </div>
  );
}

export default ProductPage;
