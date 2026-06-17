import { ShoppingBag } from 'lucide-react';

function EmptyState({ value }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center text-gray-400">
      <ShoppingBag className="w-12 h-12 mb-4 text-gray-500" />
      <p className="text-xl font-semibold text-white">No results found</p>
      <p>
        No products matched "
        <span className="text-blue-400 font-medium">{value}</span>". Try a
        different search term.
      </p>
    </div>
  );
}

export default EmptyState;
