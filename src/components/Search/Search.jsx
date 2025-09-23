import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import products from "../ProductsList/ProductsList";

const Search = ({ searchItem, setSearchItem }) => {
  const navigate = useNavigate();

  const [showDropdown, setShowDropdown] = useState(false);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      navigate("/our-products");
      setShowDropdown(false);
    }
  };

  const searchProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchItem.toLowerCase()) || product.category.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div className="flex flex-row relative">
      <div className="md:flex justify-center items-center p-1 border-2 border-orange-500 rounded-l-lg hidden h-13 w-100 relative">
        <input
          type="text"
          id="text"
          placeholder="Search..."
          autoComplete="off"
          onChange={(e) => {
            setSearchItem(e.target.value);
            setShowDropdown(true);
          }}
          onKeyDown={handleKeyPress}
          value={searchItem}
          className="flex-1 px-2 focus:outline-none"
        />

        {searchItem && showDropdown && (
          <div className="bg-orange-200 border-2 border-orange-500 rounded-b-lg flex flex-col gap-2 w-113 py-2 -mt-1 -ml-[2px] top-full left-0 absolute z-10">
            {searchProducts.length === 0 ? (
              <p className="text-center">No products found.</p>
            ) : (
              searchProducts.slice(0, 5).map((product, idx) => (
                <NavLink
                  to="/buy-product"
                  key={idx}
                  onClick={() => setShowDropdown(false)}
                  state={{
                    image: product.image,
                    title: product.name,
                    price: product.price,
                    category: product.category,
                  }}
                >
                  <div
                    key={idx}
                    className="flex justify-between items-center px-5 gap-4  hover:bg-orange-300 cursor-pointer"
                  >
                    <h1 className="flex-1 font-semibold">{product.name}</h1>
                    <p className="flex-1">{product.category}</p>
                    <div className="flex-shrink-0 w-10 h-10 object-cover">
                      <img src={product.image} alt={product.name} />
                    </div>
                  </div>
                </NavLink>
              ))
            )}
          </div>
        )}
      </div>

      <NavLink to="/our-products">
        <button className="md:flex hidden bg-gradient-to-b from-orange-400 to-orange-600 text-white h-13 w-13 justify-center items-center text-3xl rounded-r-lg cursor-pointer">
          <IoSearch />
        </button>
      </NavLink>
    </div>
  );
};

export default Search;
