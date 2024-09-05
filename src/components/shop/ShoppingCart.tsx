import { createContext } from "react";
import { Item } from "./Items";

export const ItemsCartContext = createContext<Item[]>([]);
