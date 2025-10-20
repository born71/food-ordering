import { useParams, useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

type MenuItem = {
  name: string;
  price: number;
};

type CategoryKey = "food" | "drink" | "dessert";

const menuData: Record<CategoryKey, MenuItem[]> = {
  food: [
    { name: "ผัดไทยกุ้งสด", price: 60 },
    { name: "ข้าวกะเพราไก่ไข่ดาว", price: 55 },
    { name: "ข้าวผัดหมู", price: 50 },
  ],
  drink: [
    { name: "ชาเย็น", price: 35 },
    { name: "กาแฟเย็น", price: 40 },
    { name: "น้ำเปล่า", price: 15 },
  ],
  dessert: [
    { name: "บัวลอย", price: 30 },
    { name: "ไอศกรีมกะทิ", price: 25 },
  ],
};

export default function MenuListPage() {
  // 👇 ระบุ type ของ params ให้ชัดเจน
  const { category } = useParams<{ category?: string }>();

  // ตรวจสอบและแปลง category ให้เป็น CategoryKey ที่รองรับ
  const catKey = (category as CategoryKey) || "food";
  const navigate = useNavigate();

  const menus: MenuItem[] = menuData[catKey] || [];

  const categoryName =
    catKey === "food"
      ? "อาหารจานหลัก"
      : catKey === "drink"
      ? "เครื่องดื่ม"
      : "ของหวาน";

  return (
    <PageWrapper>
    <div className="h-[100dvh] max-w-3xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center text-gray-600 hover:text-orange-500 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        กลับหน้าหมวดหมู่
      </button>
      <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        เมนู{categoryName}
      </h1>

      {menus.length === 0 ? (
        <p className="text-center text-gray-500">ไม่มีเมนูในหมวดนี้</p>
      ) : (
        <div className="space-y-4">
          {menus.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-sm p-4 flex justify-between items-center hover:shadow-md transition"
            >
              <div>
                <h3 className="font-semibold text-gray-700">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.price} บาท</p>
              </div>
              <button className="bg-orange-500 text-white rounded-lg px-4 py-2 hover:bg-orange-600">
                เพิ่ม
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
    </PageWrapper>
  );
}
