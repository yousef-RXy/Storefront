import { memo } from 'react';
import StarRating from './ui/StarRating';

const capitalizeCategoryFirstLetter = cat => {
  const str = cat.split(' ')[0].split("'")[0];
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const ProductCard = memo(function ProductCard({ product }) {
  const { title, price, image, category, rating } = product;

  return (
    <div className="relative flex flex-col bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden hover:border-[#f0a40090] transition-colors h-full">
      <div className="p-4 bg-[#1E2536] flex items-center justify-center h-48">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="object-contain h-full max-w-full "
        />
      </div>

      <div className="absolute right-2 top-2 bg-[#161b22] p-2 rounded-lg flex items-center justify-center">
        <span className="text-xs font-semibold tracking-wider text-gray-400 leading-none">
          {capitalizeCategoryFirstLetter(category)}
        </span>
      </div>

      <div className="flex flex-col grow px-4 py-2">
        <h3 className="text-sm font-medium text-neutral-200 line-clamp-2 mb-2 grow">
          {title}
        </h3>

        <div className="flex items-center justify-between mt-auto pt-2 border-t border-[#30363d]">
          {rating && (
            <div className="flex items-center gap-1">
              <StarRating rating={rating.rate} />
              <span className="text-xs text-gray-400 font-medium">
                {rating.rate}
              </span>
              <span className="text-[11px] text-gray-600">
                ({rating.count})
              </span>
            </div>
          )}

          <span className="text-lg font-bold text-amber-500">
            ${price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
});

export default ProductCard;
