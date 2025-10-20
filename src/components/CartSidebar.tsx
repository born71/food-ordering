import { X } from "lucide-react";

type CartItem = {
  name: string;
  price: number;
  qty: number;
};

type CartSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
};

export default function CartSidebar({ isOpen, onClose, items }: CartSidebarProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      {/* 🩶 พื้นหลังมืด (overlay) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={onClose}
        />
      )}

      {/* 🧺 Sidebar ตะกร้า */}
      <div
        className={`fixed top-0 right-0 h-[100dvh] w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">ตะกร้าอาหาร</h2>
          <button onClick={onClose}>
            <X size={22} className="text-gray-600 hover:text-gray-800" />
          </button>
        </div>

        {/* รายการอาหาร */}
        <div className="px-4 space-y-3 overflow-y-auto h-[calc(100%-140px)]">
          {items.length === 0 ? (
            <p className="text-gray-500 text-center mt-10">
              ยังไม่มีรายการอาหาร
            </p>
          ) : (
            items.map((item, i) => (
              <div key={i} className="flex justify-between items-center border-b pb-2">
                <div>
                  <h3 className="font-medium text-gray-700">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    {item.qty} x {item.price}฿
                  </p>
                </div>
                <p className="font-semibold text-gray-700">
                  {item.price * item.qty}฿
                </p>
              </div>
            ))
          )}
        </div>

        {/* ปุ่มสั่งอาหาร */}
        <div className="px-4 border-t">
          <div className="flex justify-between mb-3">
            <span className="text-gray-600">รวมทั้งหมด</span>
            <span className="font-semibold">{total} ฿</span>
          </div>
          <button
            disabled={items.length === 0}
            className={`w-full py-2.5 rounded-lg font-medium text-white transition ${
              items.length === 0
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600"
            }`}
            onClick={() => alert("ทำการสั่งอาหารเรียบร้อย!")}
          >
            สั่งอาหาร
          </button>
        </div>
      </div>
    </>
  );
}
