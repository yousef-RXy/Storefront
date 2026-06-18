import { Star } from 'lucide-react';

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        let fillPercentage = 0;

        if (rating >= starValue) {
          fillPercentage = 100;
        } else if (rating > starValue - 1) {
          fillPercentage = (rating - (starValue - 1)) * 100;
        }

        return (
          <div key={index} className="relative w-3 h-3 inline-block">
            <Star className="w-3 h-3 text-[#30363d] fill-none absolute top-0 left-0" />
            <div
              className="absolute top-0 left-0 h-full overflow-hidden"
              style={{ width: `${fillPercentage}%` }}
            >
              <Star className="w-3 h-3 text-amber-500 fill-amber-500 max-w-none" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default StarRating;
