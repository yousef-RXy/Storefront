import { memo } from 'react';

const formatCategoryName = str => {
  if (str === "men's clothing") return "Men's";
  if (str === "women's clothing") return "Women's";
  if (str === 'jewelery') return 'Jewelry';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const FilterTabs = memo(function FilterTabs({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  return (
    <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide">
      <button
        onClick={() => onSelectCategory('All')}
        className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
          selectedCategory === 'All'
            ? 'bg-[#f0a400] text-dark-bg shadow-[0_0_12px_rgba(240,164,0,0.4)]'
            : 'bg-[#1c2128] text-gray-400 border border-[#30363d] hover:border-gray-500 hover:text-gray-200'
        }`}
      >
        All
      </button>

      {categories.map(category => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
            selectedCategory === category
              ? 'bg-[#f0a400] text-dark-bg shadow-[0_0_12px_rgba(240,164,0,0.4)]'
              : 'bg-[#1c2128] text-gray-400 border border-[#30363d] hover:border-gray-500 hover:text-gray-200'
          }`}
        >
          {formatCategoryName(category)}
        </button>
      ))}
    </div>
  );
});

export default FilterTabs;
