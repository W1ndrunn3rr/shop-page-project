import { useState, useEffect } from "react";
import { Item } from "./Items";
import { useNavigate, useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

const ProductDisplay: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<Item | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { addToCart } = useOutletContext();

  const navigator = useNavigate();

  useEffect(() => {
    const fetchItem = async () => {
      if (!id) {
        setError("Product ID is missing");
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Item = await response.json();
        setItem(data);
      } catch (error) {
        setError("Failed to fetch product data. Please try again later.");
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!item) return <div>No product found</div>;
  return (
    <div>
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
          <button
            onClick={() => addToCart(item)}
            className="mt-8 px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
          >
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
