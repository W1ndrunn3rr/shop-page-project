import { useState, useEffect } from "react";
import { Item } from "./Items";
import NavBar from "../common/NavBar";
import { useNavigate } from "react-router-dom";

interface ProductDisplayProp {
  productID: number;
}

const ProductDisplay = ({ productID }: ProductDisplayProp) => {
  const navigator = useNavigate();

  const [item, setItem] = useState<Item | null>(null);

  useEffect(() => {
    const fetchItem = async (id: number): Promise<Item | null> => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) throw new Error("Failed to fetch item");
        const data: Item = await response.json();
        return data;
      } catch (error) {
        console.log("Error fetching data: ", error);
        return null;
      }
    };

    const itemSet = async () => {
      const item = await fetchItem(productID);
      setItem(item);
    };

    itemSet();
  }, [productID]);

  return (
    <div>
      <NavBar />
      <div className="m-12 p-12 bg-gray-100 shadow-2xl rounded-md flex flex-col md:flex-row justify-center items-center">
        <div className="flex justify-center items-center bg-white p-6 rounded-md shadow-lg">
          <img
            src={item?.image}
            alt={item?.title}
            className="w-80 h-auto rounded-md"
          />
        </div>
        <div className="ml-0 md:ml-24 mt-12 md:mt-0 text-center md:text-left">
          <p className="text-2xl font-bold text-gray-800">{item?.title}</p>
          <p className="text-gray-600 mt-4">{item?.description}</p>
          <p className="text-xl font-semibold text-gray-800 mt-6">
            ${item?.price}
          </p>
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-300 ease-in-out">
            Add to Cart
          </button>
          <button
            className="m-10 transition duration-300 ease-in-out"
            onClick={() => navigator("/shop")}
          >
            <span className="material-symbols-outlined">keyboard_return</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
