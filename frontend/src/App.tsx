import { BrowserRouter, Route, Routes, useLocation } from "react-router";

import Layout from "./components/Layout/Layout";
import Homepage from "./pages/Homepage/Homepage";
import MenuPage from "./pages/MenuPage/MenuPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import CartPage from "./pages/CartPage/CartPage";
import { AnimatePresence } from "motion/react";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
