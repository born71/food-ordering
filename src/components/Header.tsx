import { useState } from "react";
import { ShoppingCart } from "lucide-react"; // ใช้ไอคอนฟรีจาก lucide-react

export default function Header() {
  const [cartCount, setCartCount] = useState(2); // ตัวอย่างจำนวนสินค้า

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      {/* โลโก้ / ชื่อร้าน */}
      <h1 className="text-xl font-bold text-orange-500">🍴 FoodOrder</h1>

      {/* ปุ่มตะกร้า */}
      <button className="relative">
        <ShoppingCart size={26} className="text-gray-700" />
        {/* Badge แสดงจำนวนสินค้า */}
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
            {cartCount}
          </span>
        )}
      </button>
    </header>
  );
}
