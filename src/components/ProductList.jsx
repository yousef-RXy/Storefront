import ProductCard from './ProductCard';
import EmptyState from './ui/EmptyState';

function ProductList({ products, searchTerm }) {
  if (!products || products.length === 0) {
    return <EmptyState value={searchTerm} />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 max-w-7xl mx-auto">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
