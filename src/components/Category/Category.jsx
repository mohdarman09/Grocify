import React from "react";
import Heading from "../Heading/Heading";
import FruitsCat from "../../assets/fruits-and-veggies.png";
import DryFruits from "../../assets/dry-fruits.jpeg";
import DairyCat from "../../assets/dairy-and-eggs.png";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
const Category = () => {
  const renderCards = category.map((card) => {
    return (
      // Category Card
      <div key={card.id} className="flex-1 basis-[300px]">
        {/* Card image  */}
        <div className="w-full min-h-[30vh] relative -mb-8 flex justify-center">
          <img className="absolute bottom-0 max-h-full max-w-full" src={card.image} />
        </div>

        {/* Card Content  */}
        <div className="bg-zinc-100 pt-10 p-5 rounded-xl">
          <h3 className="text-zinc-800 text-3xl font-bold">{card.title}</h3>
          <p className="text-zinc-600 mt-3 mb-7">{card.description}</p>
          <Link to={card.path}>
            <Button content='See All' />
          </Link>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="max-w-[90%] mx-auto px-8 py-20 ">
        <Heading highlight="Shop" heading="by Category" />

        {/* Category Cards  */}
        <div className="flex flex-wrap mx-auto md:mt-15 gap-5">
          {renderCards}
        </div>
      </div>
    </section>
  );
};

export default Category;

const category = [
  {
    id: 1,
    title: "Fruits & Veggies",
    description:
      "Fresh, produce sourced daily from local farms. Explore a wide range of seasonal fruits & crips vegetables",
    image: FruitsCat,
    path: '/fruits'
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    description:
      "Wholesome dairy products and free-range eggs. from creamy milk and yogurt to artisanal cheeses.",
    image: DairyCat,
    path: '/dairy'
  },
  {
    id: 3,
    title: "Grains & Dry Fruits",
    description: "Premium quality, responsibly sourced dry fruits & grains — from crunchy nuts to wholesome staples, all in one place.",
    image: DryFruits,
    path: '/grains'
  },
];
