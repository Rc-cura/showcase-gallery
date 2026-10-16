
import ProductCard from "./ProductCard.jsx";

function ProductGrid({ products = [], showActions, onEdit, onDelete, onCardClick }) {
  if (products.length === 0) {
    return (
      <div className="rounded-xl border border-[#30363D] bg-[#161B22] py-20 text-center">
        <h3 className="text-lg font-semibold text-[#E6EDF3]">
          No products found
        </h3>
        <p className="mt-2 text-sm text-[#8B949E]">
          Try searching for another product.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          showActions={showActions}
          onEdit={onEdit}
          onDelete={onDelete}
          onCardClick={onCardClick}
        />
      ))}
    </div>
  );
}

export default ProductGrid;
