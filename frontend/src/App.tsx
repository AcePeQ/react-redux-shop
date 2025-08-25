import { BrowserRouter, Route, Routes } from "react-router";

import Layout from "./components/Layout/Layout";
import Homepage from "./pages/Homepage/Homepage";
import MenuPage from "./pages/MenuPage/MenuPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import CartPage from "./pages/CartPage/CartPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
