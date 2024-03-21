import { Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider, createRoutesFromElements } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";

const route = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Home/>} />,
    <Route path="/products/:id" element={<Products/>} />,
    <Route path="/product/:id" element={<Product/>} />
  ])
);

function App() {
  return (
    <RouterProvider router={route} />
  );
}

export default App;
