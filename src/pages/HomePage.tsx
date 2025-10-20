import { useNavigate } from "react-router-dom";
import SampleFood from "../assets/img/tempfood.jpg"

const categories = [
  {
    name: "อาหารจานหลัก",
    key: "food",
    image: SampleFood,
  },
  {
    name: "เครื่องดื่ม",
    key: "drink",
    image: SampleFood,
  },
  {
    name: "ของหวาน",
    key: "dessert",
    image: SampleFood,
  },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        🍽️ เลือกหมวดหมู่อาหาร
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.key}
            onClick={() => navigate(`/menu/${cat.key}`)}
            className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer overflow-hidden"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-gray-700">
                {cat.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
