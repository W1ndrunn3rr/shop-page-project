import React, { useEffect, useState } from "react";
import Footer from "../common/Footer";
import Items, { Item } from "./Items";
import { useImmer } from "use-immer";
import FilterBar from "./FilterBar";
import { Outlet, useLocation } from "react-router-dom";
import ShopNavBar from "./ShopNavBar";
import { ItemsCartContext } from "./ShoppingCart";

interface ItemData {
  id: number;
  item: Item | null;
}

export type SortOptions = "Descending" | "Ascending" | "Alphabetical";

export type Categories =
  | "electronics"
  | "jewelery"
  | "men's clothing"
  | "women's clothing"
  | "all";

const ShopPage: React.FC = () => {
  const [itemDataList, setItemDataList] = useImmer<ItemData[]>([
    { id: 1, item: null },
    { id: 2, item: null },
    { id: 3, item: null },
    { id: 4, item: null },
    { id: 5, item: null },
    { id: 7, item: null },
    { id: 8, item: null },
    { id: 9, item: null },
    { id: 10, item: null },
    { id: 17, item: null },
    { id: 18, item: null },
    { id: 19, item: null },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(itemDataList);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();
  const [cart, setCart] = useImmer<Item[]>([]);

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

    const fetchAllItems = async () => {
      const promises = itemDataList.map(async (itemData) => {
        const item = await fetchItem(itemData.id);
        return { ...itemData, item };
      });

      const newItemDataList = await Promise.all(promises);
      setItemDataList(newItemDataList);
    };

    fetchAllItems();
    setFilteredItems(itemDataList);
  }, []);

  const sortDescending = (items: ItemData[]): ItemData[] => {
    return [...items].sort((item1, item2) => {
      if (item1.item && item2.item) return item2.item.price - item1.item.price;
      return 0;
    });
  };

  const sortAscending = (items: ItemData[]): ItemData[] => {
    return [...items].sort((item1, item2) => {
      if (item1.item && item2.item) return item1.item.price - item2.item.price;
      return 0;
    });
  };

  const sortAlphabetical = (items: ItemData[]): ItemData[] => {
    return [...items].sort((item1, item2) => {
      if (item1.item && item2.item)
        return item1.item.title.localeCompare(item2.item.title);
      return 0;
    });
  };

  const sortItemsList = (
    option: "Alphabetical" | "Ascending" | "Descending" = "Alphabetical",
    category: Categories,
    items: ItemData[]
  ): ItemData[] => {
    let sortedItems: ItemData[];

    // Sort based on the option
    switch (option) {
      case "Alphabetical":
        sortedItems = sortAlphabetical(items);
        break;
      case "Ascending":
        sortedItems = sortAscending(items);
        break;
      case "Descending":
        sortedItems = sortDescending(items);
        break;
      default:
        sortedItems = items;
    }

    if (category === "all") return sortedItems;

    sortedItems = sortedItems.filter(
      (item) => item.item?.category === category
    );

    return sortedItems;
  };

  const updateItemsList = (
    option: "Alphabetical" | "Ascending" | "Descending",
    category: Categories
  ) => {
    const sortedAndFilteredItems = sortItemsList(
      option,
      category,
      itemDataList
    );
    setFilteredItems(sortedAndFilteredItems);
  };

  useEffect(() => {
    const matchInput = () => {
      const filteredList = itemDataList.filter((item) =>
        item.item?.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setFilteredItems(filteredList);
    };
    matchInput();
  }, [itemDataList, searchTerm]);

  const addToCart = (item: Item) => {
    setCart((draft) => {
      draft.push(item);
    });
  };

  const deleteFromCart = (id: number) => {
    setCart((draft) => {
      const index = draft.findIndex((item) => item.id === id); // Find the index of the first occurrence
      if (index !== -1) {
        draft.splice(index, 1); // Remove the item at the found index
      }
    });
  };

  const openCart = () => {
    isCartOpen ? setIsCartOpen(false) : setIsCartOpen(true);
  };

  return (
    <ItemsCartContext.Provider value={cart}>
      <div>
        <ShopNavBar openCart={openCart} />
        {isCartOpen && (
          <div
            className={`absolute right-0 m-4 md:w-80  bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-50 transition duration-300 ease-in-out transform opacity-0 scale-95 ${
              isCartOpen ? "opacity-100 scale-100" : ""
            }`}
          >
            <h3 className="text-lg font-bold mb-2">Twój koszyk</h3>
            {cart.length === 0 ? (
              <p>Koszyk jest pusty</p>
            ) : (
              <ul>
                {cart.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center mb-2"
                  >
                    <span>{item.title}</span>
                    <span className="mr-4 ml-4">{item.price} zł</span>
                    <button
                      onClick={() => deleteFromCart(item.id)}
                      className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-300 ease-in-out"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <p className="text-center font-bold">
              Total : {cart.reduce((sum, item) => sum + item.price, 0)}$
            </p>
            <button
              onClick={() => {}} // Przekierowanie do checkoutu
              className="mt-4 pl-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-400 transition"
            >
              Przejdź do kasy
            </button>
          </div>
        )}

        {location.pathname === "/shop" ? (
          <>
            <div className="flex items-center p-5 mt-10 ml-20 mr-20">
              <span className="text-3xl material-symbols-outlined">search</span>
              <input
                type="text"
                placeholder="Search..."
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input />
            <div className="flex flex-col items-center justify-center ml-10 mr-10">
              <FilterBar filter={updateItemsList} />
              {filteredItems.length === 0 ? (
                <h1>Items not found :(</h1>
              ) : (
                <Items
                  itemList={filteredItems
                    .map((data) => data.item)
                    .filter((item) => item !== null)}
                />
              )}
            </div>
          </>
        ) : (
          <Outlet context={{ addToCart }} />
        )}
        <Footer />
      </div>
    </ItemsCartContext.Provider>
  );
};
export default ShopPage;
