import { Search, X } from 'lucide-react';

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-4 w-4 text-gray-400" />
      </div>

      <input
        type="text"
        placeholder="Search products..."
        aria-label="Search products"
        value={searchTerm}
        onChange={e => onSearchChange(e.target.value)}
        className="w-full h-10.5 pl-10 pr-10 py-2.5 bg-[#1c2128] border border-[#30363d] rounded-lg text-white focus:outline-none focus:border-[#f0a400] focus:ring-1 focus:ring-[#f0a400] placeholder-gray-500 text-sm transition-all"
      />

      {searchTerm && (
        <button
          type="button"
          onClick={() => onSearchChange('')}
          className="absolute right-3 inset-y-0 flex items-center text-gray-500 hover:text-[#f0a400] transition-colors focus:outline-none cursor-pointer"
          aria-label="Clear search"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}

export default SearchBar;
