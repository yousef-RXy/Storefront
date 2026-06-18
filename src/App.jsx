import { useState, useMemo } from 'react';
import { ShoppingBag } from 'lucide-react';

import { useFetch, useDebounce } from './hooks';
import { ProductList } from './components';
import {
  ErrorState,
  SearchBar,
  FilterTabs,
  SortDropdown,
} from './components/ui';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');

  const debouncedSearch = useDebounce(searchTerm, 300);
  const { data: allProducts, loading, error } = useFetch('/products');

  const categories = useMemo(() => {
    if (!allProducts) return [];
    const uniqueCategories = new Set(
      allProducts.map(product => product.category),
    );
    return ['All', ...Array.from(uniqueCategories)];
  }, [allProducts]);

  const filteredAndSortedProducts = useMemo(() => {
    if (!allProducts) return [];

    let result = allProducts.filter(product => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase());
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating-desc':
        result.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      default:
        break;
    }

    return result;
  }, [allProducts, debouncedSearch, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-dark-bg text-white p-4 sm:p-6 sm:px-12 font-sans">
      <nav className="max-w-7xl mx-auto flex items-center justify-between mb-12 border-b border-[#30363d] pb-4">
        <div className="flex items-center gap-3">
          <div className="bg-[#f0a400] p-1.5 rounded-lg text-dark-bg">
            <ShoppingBag className="w-5 h-5 stroke-[2.5]" />
          </div>
          <span className="text-xl font-bold tracking-wide">Storefront</span>
        </div>
      </nav>

      <header className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-col">
          <span className="text-[#f0a400] text-[11px] font-bold tracking-widest uppercase mb-4 block">
            Catalog 2025
          </span>
          <h1 className="text-5xl font-serif tracking-tight mb-4">
            <span className="text-gray-100">Curated </span>
            <span className="text-[#f0a400]">Products</span>
          </h1>
          <p className="text-gray-400 text-sm max-w-90 leading-relaxed">
            Browse our full collection. Search, filter by category, and sort to
            find exactly what you need.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto">
        {!loading && !error && categories.length > 0 && (
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="grow">
                <SearchBar
                  searchTerm={searchTerm}
                  onSearchChange={setSearchTerm}
                />
              </div>

              <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
            </div>

            <FilterTabs
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>
        )}

        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#f0a400]"></div>
          </div>
        )}

        {error && !loading && <ErrorState error={error} />}

        {!loading && !error && (
          <ProductList
            products={filteredAndSortedProducts}
            searchTerm={debouncedSearch}
          />
        )}
      </main>
    </div>
  );
}

export default App;
