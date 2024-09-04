import { createBrowserRouter } from "react-router-dom";
import HomePage from "./home/HomePage";
import ShopPage from "./shop/ShopPage";
import ProductDisplay from "./shop/ProductDisplay";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: null,
  },
  {
    path: "/shop",
    element: <ShopPage />,
  },
  {
    path: "/shop/1",
    element: <ProductDisplay productID={1} />,
  },
  {
    path: "/shop/2",
    element: <ProductDisplay productID={2} />,
  },
  {
    path: "/shop/3",
    element: <ProductDisplay productID={3} />,
  },
  {
    path: "/shop/4",
    element: <ProductDisplay productID={4} />,
  },
  {
    path: "/shop/5",
    element: <ProductDisplay productID={5} />,
  },
  {
    path: "/shop/6",
    element: <ProductDisplay productID={6} />,
  },
  {
    path: "/shop/7",
    element: <ProductDisplay productID={7} />,
  },
  {
    path: "/shop/8",
    element: <ProductDisplay productID={8} />,
  },
  {
    path: "/shop/9",
    element: <ProductDisplay productID={9} />,
  },
  {
    path: "/shop/10",
    element: <ProductDisplay productID={10} />,
  },
  {
    path: "/shop/17",
    element: <ProductDisplay productID={17} />,
  },
  {
    path: "/shop/18",
    element: <ProductDisplay productID={18} />,
  },
  {
    path: "/shop/19",
    element: <ProductDisplay productID={19} />,
  },
]);

export default router;
