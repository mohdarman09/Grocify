import React, { useState, useEffect } from "react";
import Heading from "../Heading/Heading";
import ProductsList from "../ProductsList/ProductsList";
import Cards from "../Cards/Cards";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Products = () => {
  const categories = [
    "All",
    "Fruits",
    "Vegetables",
    "Dairy",
    "Dry Fruits",
    "Grains",
  ];
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems =
    activeTab === "All"
      ? ProductsList
      : ProductsList.filter((item) => item.category === activeTab);

  const renderCard = filteredItems.slice(0, 8).map((product) => {
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
    <section>
      <div className="max-w-[90%] mx-auto px-8 py-15">
        <Heading highlight="Our" heading="Products" />

        <div className="flex flex-wrap gap-3 justify-center mt-10">
          {categories.map((category) => {
            return (
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
            );
          })}
        </div>

        {/* Products Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-9 mt-15">
          {renderCard}
        </div>

        <div className="mt-15 mx-auto w-fit">
          <Link to="/our-products">
            <Button content="View More" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
