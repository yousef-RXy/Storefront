import { useState, useRef, useEffect } from 'react';

function SortDropdown({ sortBy, setSortBy }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const options = [
    { value: 'default', label: 'Featured' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'rating-desc', label: 'Top Rated' },
  ];

  const selectedLabel = options.find(opt => opt.value === sortBy)?.label;

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full sm:w-48 shrink-0" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-[#1c2128] border border-[#30363d] text-gray-200 text-sm rounded-lg focus:ring-1 focus:ring-[#f0a400] focus:border-[#f0a400] focus:outline-none px-4 py-2.5 h-10.5"
      >
        <span>{selectedLabel}</span>
        <span className="pointer-events-none text-gray-500 text-xs">▼</span>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-[#1c2128] border border-[#30363d] rounded-lg shadow-xl overflow-hidden py-1">
          {options.map(option => (
            <div
              key={option.value}
              onClick={() => {
                setSortBy(option.value);
                setIsOpen(false);
              }}
              className={`px-4 py-2 text-sm cursor-pointer transition-colors ${
                sortBy === option.value
                  ? 'bg-[#f0a400f0] text-dark-bg font-medium'
                  : 'text-gray-200 hover:bg-[#f0a400c0] hover:text-dark-bg'
              }`}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SortDropdown;
