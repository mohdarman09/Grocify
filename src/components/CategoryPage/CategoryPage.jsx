import React from "react";
import Banner from "../Banner/Banner";
import ProductList from "../ProductsList/ProductsList";
import Cards from "../Cards/Cards";

const CategoryPage = ({ title, bgImage, categories = [] }) => {
  let filteredItems = categories.includes("All")
    ? ProductList
    : ProductList.filter((item) => categories.includes(item.category));

  const renderProducts = filteredItems.map((product) => {
    return (
      <Cards
        key={product.id}
        image={product.image}
        title={product.name}
        price={product.price}
        category={product.category}
      />
    );
  });

  return (
    <div>
      <Banner title={title} bgImage={bgImage} />

      <div className="max-w-[90%] mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-10 py-20 ">
        {renderProducts}
      </div>
    </div>
  );
};

export default CategoryPage;
