import { useState } from 'react';
import useFetch from './hooks/useFetch';
import useDebounce from './hooks/useDebounce';
import ProductList from './components/ProductList';

function App() {
  const [searchTerm, setSearchTerm] = useState('jack');
  const debouncedSearch = useDebounce(searchTerm, 300);

  const { data: allProducts, loading, error } = useFetch('/productds');

  const filteredProducts =
    allProducts?.filter(product =>
      product.title.toLowerCase().includes(debouncedSearch.toLowerCase()),
    ) || [];

  return (
    <div className="min-h-screen bg-dark-bg text-white p-6">
      <header className="max-w-7xl mx-auto mb-8 flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-[#30363d] pb-6">
        <h1 className="text-2xl font-bold tracking-tight">Storefront</h1>
        <div className="w-full sm:w-80">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 bg-[#161b22] border border-[#30363d] rounded-lg text-white focus:outline-none focus:border-[#58a6ff] placeholder-gray-500 text-sm"
          />
        </div>
      </header>

      <main>
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
          </div>
        )}

        {error && (
          <div className="text-center py-20 text-red-400">
            <p>Error loading content: {error.errorMessage}</p>
            <p>Error loading content: {error.status}</p>
          </div>
        )}

        {!loading && !error && (
          <ProductList
            products={filteredProducts}
            searchTerm={debouncedSearch}
          />
        )}
      </main>
    </div>
  );
}

export default App;
