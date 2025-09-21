import React, { useState } from "react";
import products from "../ProductsList/ProductsList";
import Cards from "../Cards/Cards";

const OurProducts = ({ searchItem }) => {
  // console.log(searchItem);

  const categories = [
    "All",
    "Fruits",
    "Vegetables",
    "Dairy",
    "Dry Fruits",
    "Grains",
    "Eggs",
  ];

  const [activeTab, setActiveTab] = useState("All");

  // Category filter
  const filteredByCategory =
    activeTab === "All"
      ? products
      : products.filter((item) => item.category === activeTab);

  // Search filter
  const filteredItems = filteredByCategory.filter((product) =>
    product.name.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <section>
      <div className="max-w-[90%] mx-auto px-8 py-15">
        {/* Category Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mt-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-5 py-2 text-lg font-semibold rounded-xl cursor-pointer ${
                activeTab === category
                  ? "bg-gradient-to-b from-orange-400 to-orange-600 text-white"
                  : "bg-zinc-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-9 mt-15">
          {filteredItems.length > 0 ? (
            filteredItems.map((product) => (
              <Cards
                key={product.id}
                image={product.image}
                title={product.name}
                price={product.price}
                category={product.category}
              />
            ))
          ) : (
            <p className="text-center col-span-full p-20 text-gray-500 text-xl font-semibold flex flex-col items-center justify-center">
              <span className="text-4xl mb-2">🔍</span>
              No products found
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
