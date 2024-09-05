import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import ShopPage from "./components/shop/ShopPage";
import ProductDisplay from "./components/shop/ProductDisplay";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: null,
  },
  {
    path: "/shop",
    element: <ShopPage />,
    children: [
      {
        path: ":id",
        element: <ProductDisplay />,
      },
    ],
  },
]);

export default router;
