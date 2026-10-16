import { useState } from "react";
import ProductGrid from "../components/ProductGrid.jsx";

function GalleryPage({ products = [], loading = false }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "low-high") return a.price - b.price;
    if (sortOrder === "high-low") return b.price - a.price;
    return 0;
  });

  return (
    <main className="min-h-screen bg-[#0d1117] px-5 py-10 text-[#f0f6fc] sm:px-8">
      <div className="mx-auto max-w-6xl">
        <section className="relative mb-10 overflow-hidden rounded-2xl border border-[#30363d] bg-[#161b22] p-8 sm:p-12">
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#238636]/10 blur-3xl"></div>

          <div className="relative">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#30363d] bg-[#0d1117] px-3 py-1.5 text-sm text-[#8b949e]">
              <span className="h-2 w-2 rounded-full bg-[#3fb950]"></span>
              Your personal collection
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Discover products<span className="text-[#3fb950]">.</span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#8b949e] sm:text-base">
              Explore the collection, discover your favorites, and find
              the products you are looking for.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <div className="rounded-lg bg-[#238636] px-4 py-2.5 text-sm font-semibold text-white">
                Explore collection
              </div>

              <div className="rounded-lg border border-[#30363d] bg-[#21262d] px-4 py-2.5 text-sm font-medium text-[#f0f6fc]">
                {sortedProducts.length} products available
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-[#30363d] pb-5">
            <div className="w-full sm:w-72">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-[#30363d] bg-[#161b22] px-4 py-2.5 text-sm text-[#f0f6fc] placeholder-[#8b949e] focus:border-[#3fb950] focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-3">
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="rounded-lg border border-[#30363d] bg-[#161b22] px-4 py-2.5 text-sm text-[#f0f6fc] focus:border-[#3fb950] focus:outline-none"
              >
                <option value="default">Sort by: Default</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
              </select>

              <span className="rounded-full border border-[#30363d] bg-[#161b22] px-3 py-1 text-sm text-[#8b949e]">
                {sortedProducts.length} items
              </span>
            </div>
          </div>

          {loading ? (
            <div className="rounded-xl border border-[#30363d] bg-[#161b22] py-20 text-center text-[#8b949e]">
              Loading products...
            </div>
          ) : (
            <ProductGrid 
              products={sortedProducts} 
              onCardClick={(product) => setSelectedProduct(product)} 
            />
          )}
        </section>

        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
            <div className="relative w-full max-w-lg rounded-2xl border border-[#30363d] bg-[#161b22] p-6 text-[#f0f6fc] shadow-2xl">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute right-4 top-4 text-gray-400 hover:text-white text-xl font-bold"
              >
                ✕
              </button>

              {selectedProduct.image && (
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="mb-4 h-64 w-full rounded-xl object-cover border border-[#30363d]"
                />
              )}

              <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
              <p className="mt-2 text-lg font-semibold text-[#3fb950]">
                ${selectedProduct.price}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#8b949e]">
                {selectedProduct.description || "No description provided."}
              </p>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="rounded-lg bg-[#21262d] border border-[#30363d] px-4 py-2 text-sm font-semibold text-[#f0f6fc] hover:bg-[#30363d]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        <footer className="mt-16 border-t border-[#30363d] py-6 text-center text-sm text-[#8b949e]">
          Built by Rc Cura · INF233
        </footer>
      </div>
    </main>
  );
}

export default GalleryPage;