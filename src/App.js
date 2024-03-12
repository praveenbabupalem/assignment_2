import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProducts from "./components/AllProducts";
import ProductsInformation from "./components/ProductsInformation";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<AllProducts />} />
      <Route exact path="/products/:id" element={<ProductsInformation />} />
    </Routes>
  </BrowserRouter>
  );
}
export default App;
