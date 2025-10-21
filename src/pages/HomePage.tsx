import { useNavigate } from "react-router-dom";
import SampleFood from "../assets/img/tempfood.jpg"
import PageWrapper from "../components/PageWrapper";

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
    <PageWrapper>
    <div className="h-[100dvh] max-w-4xl mx-auto px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-6">
        {categories.map((cat) => (
          <div
            key={cat.key}
            onClick={() => navigate(`/menu/${cat.key}`)}
            className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer overflow-hidden"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-36 object-cover"
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
    </PageWrapper>
  );
}
