import { Heart, Eye, Repeat, ShoppingBag, Star } from "lucide-react";
import { getImgUrl } from "../utils/img-utility";

export default function ProductCard({ product }) {
  return (
    <div className="group">
      <div
        className="
          overflow-hidden
          rounded-3xl
          h-full
          border
          border-gray-200
          bg-white
          transition-all
          duration-300
          hover:-translate-y-2
          hover:shadow-xl
        "
      >
        {/* IMAGE */}
        <div className="relative overflow-hidden border-b border-gray-200">
          {/* Badge */}
          <span
            className="
              absolute
              left-4
              top-4
              z-20
              tracking-[6px]
              uppercase
              text-sm
              text-gray-500
              writing-mode-vertical
            "
          >
            NEW
          </span>

          {/* Main Image */}
          <img
            src={getImgUrl(product.image)}
            alt={product.title}
            className="
              h-72
              w-full
              object-contain
              transition-all
              duration-500
              group-hover:scale-110
            "
          />

          {/* Hover Image */}
          <img
            src={getImgUrl(product.hoverImage)}
            alt=""
            className="
              absolute
              inset-0
              h-full
              w-full
              object-contain
              opacity-0
              transition-all
              duration-500
              group-hover:opacity-100
              group-hover:scale-110
            "
          />

          {/* Actions */}
          <div
            className="
              absolute
              bottom-5
              left-1/2
              flex
              -translate-x-1/2
              translate-y-10
              gap-2
              opacity-0
              transition-all
              duration-300
              group-hover:translate-y-0
              group-hover:opacity-100
            "
          >
            <Button>
              <Heart size={18} />
            </Button>

            <Button>
              <Eye size={18} />
            </Button>

            <Button>
              <Repeat size={18} />
            </Button>

            <Button>
              <ShoppingBag size={18} />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3 p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">{product.category}</p>

            <div className="flex text-orange-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={15}
                  fill={i < product.rating ? "currentColor" : "none"}
                />
              ))}
            </div>
          </div>

          <h3 className="line-clamp-2 text-lg font-semibold text-gray-800">
            {product.title}
          </h3>

          <div className="flex items-center justify-between">
            <div>
              <span className="mr-2 text-xl font-bold text-gray-800">
                ${product.price}
              </span>

              <span className="text-gray-400 line-through">
                ${product.oldPrice}
              </span>
            </div>

            <span className="text-sm text-gray-500">{product.size}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button({ children }) {
  return (
    <button
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-xl
        bg-white
        shadow-lg
        transition
        hover:bg-[#6c7fd8]
        hover:text-white
      "
    >
      {children}
    </button>
  );
}
