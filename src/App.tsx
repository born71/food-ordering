import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenuListPage from "./pages/MenuListPage";
import FloatingCartButton from "./components/FloatingCartButton";
import CartSidebar from "./components/CartSidebar";
import { useState } from "react";

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  // ตัวอย่างรายการในตะกร้า
  const [cartItems] = useState([
    { name: "ผัดไทยกุ้งสด", price: 60, qty: 1 },
    { name: "ชาเย็น", price: 35, qty: 2 },
  ]);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu/:category" element={<MenuListPage />} />
        </Routes>

        {/* ปุ่มตะกร้าลอย */}
        <FloatingCartButton
          count={cartItems.length}
          onClick={() => setIsCartOpen(true)}
        />

        {/* Sidebar ตะกร้า */}
        <CartSidebar
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
        />
      </div>
    </BrowserRouter>
  );
}
  