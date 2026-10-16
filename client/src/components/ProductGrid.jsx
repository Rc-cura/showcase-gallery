
import ProductCard from "./ProductCard.jsx";

function ProductGrid({
  products,
  showActions = false,
  onEdit,
  onDelete,
}) {
  if (products.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-[#30363D] bg-[#161B22] px-6 py-20 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#21262D] text-2xl text-[#3FB950]">
          +
        </div>

        <h3 className="text-lg font-semibold text-[#E6EDF3]">
          No products yet
        </h3>

        <p className="mt-2 text-sm text-[#8B949E]">
          Add your first product to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-6">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          showActions={showActions}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default ProductGrid;
