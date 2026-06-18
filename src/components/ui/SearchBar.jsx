import { Search } from 'lucide-react';

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="relative w-full sm:w-80 flex justify-center items-center">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-4 w-4 text-gray-500" />
      </div>
      <input
        type="text"
        placeholder="Search products..."
        aria-label="Search products"
        value={searchTerm}
        onChange={e => onSearchChange(e.target.value)}
        className="w-full pl-10 pr-4 py-2 bg-[#161b22] border border-[#30363d] rounded-lg text-white focus:outline-none focus:ring-[#f0a40090] focus:ring-2 placeholder-gray-500 text-sm transition-colors"
      />
    </div>
  );
}

export default SearchBar;
