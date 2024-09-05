import { useContext } from "react";
import { Link } from "react-router-dom";
import { ItemsCartContext } from "./ShoppingCart";
import { Item } from "./Items";

interface ShopNavBarProps {
  openCart(): void;
}

const ShopNavBar = ({ openCart }: ShopNavBarProps): React.ReactElement => {
  const cart: Item[] = useContext(ItemsCartContext);
  return (
    <div className="flex flex-auto justify-center items-center mr-10">
      <div className="ml-10 mt-5 mr-5">
        <h1
          className="
        text-2xl 
        sm:text-3xl 
        md:text-4xl 
        lg:text-5xl 
        xl:text-6xl 
        font-bold 
        italic 
        text-center 
        text-red-600
        transition-all 
        duration-300
        hover:text-red-400
      "
        >
          Thrift Shop
        </h1>
      </div>
      <div className="flex flex-auto justify-end items-end space-x-10 mr-0 ">
        <Link
          to="/"
          className=" sm:text-2xl 
        md:text-2xl 
        lg:text-3xl font-bold hover:text-slate-600 hover:cursor-pointer transform transition duration-300 ease-in-out 
          hover:scale-105"
        >
          Home
        </Link>
        <Link
          to="/shop"
          className="sm:text-2xl 
        md:text-2xl 
        lg:text-3xl font-bold hover:text-slate-600 hover:cursor-pointer transform transition duration-300 ease-in-out 
          hover:scale-105 "
        >
          Shop
        </Link>
        <div
          className="flex flex-row justify-center items-center"
          onClick={() => openCart()}
        >
          <span
            className="sm:text-2xl 
        md:text-2xl 
        lg:text-3xl font-bold hover:text-slate-600 hover:cursor-pointer transform transition duration-300 ease-in-out 
          hover:scale-105 material-symbols-outlined"
          >
            shopping_cart_checkout
          </span>
          <p
            className="sm:text-2xl 
        md:text-2xl 
        lg:text-3xl font-bold"
          >
            {cart.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopNavBar;
