import { ShoppingCart } from "lucide-react";

type FloatingCartButtonProps = {
  count?: number;
  onClick?: () => void;
};

export default function FloatingCartButton({
  count = 0,
  onClick,
}: FloatingCartButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        fixed bottom-6 right-6
        bg-orange-500 text-white rounded-full
        w-14 h-14 flex items-center justify-center
        shadow-lg hover:bg-orange-600 transition
      "
    >
      <div className="relative">
        <ShoppingCart size={26} />
        {count > 0 && (
          <span
            className="
              absolute -top-2 -right-2 bg-red-500 text-white text-xs
              font-semibold rounded-full px-1.5 py-0.5
            "
          >
            {count}
          </span>
        )}
      </div>
    </button>
  );
}
