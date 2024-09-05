import { createContext } from "react";
import { Item } from "./Items";

interface CartContextType {
  addToCart: (item: Item) => void;
  // Add other properties or methods if needed
}

export const ItemsCartContext = createContext<Item[]>([]);
