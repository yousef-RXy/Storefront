export default function ResponsiveFilters({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  return (
    <div className="w-full px-4">
      <div className="flex flex-wrap sm:flex-nowrap gap-2">
        {categories.map(category => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`grow basis-[28%] sm:grow-0 sm:basis-auto whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 text-center ${
                isActive
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
