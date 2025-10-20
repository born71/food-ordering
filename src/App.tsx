import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "./pages/HomePage";
import MenuListPage from "./pages/MenuListPage";
import FloatingCartButton from "./components/FloatingCartButton";
import CartSidebar from "./components/CartSidebar";
import { useState } from "react";

function AnimatedRoutes() {
  const location = useLocation();

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems] = useState([
    { name: "ผัดไทยกุ้งสด", price: 60, qty: 1 },
    { name: "ชาเย็น", price: 35, qty: 2 },
  ]);

  return (
    <>
      <AnimatePresence mode="wait" >
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <HomePage />
            }
          />
          <Route
            path="/menu/:category"
            element={
              <MenuListPage />
            }
          />
        </Routes>
      </AnimatePresence>

      <FloatingCartButton
        count={cartItems.length}
        onClick={() => setIsCartOpen(true)}
      />
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
      />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 relative">
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}
