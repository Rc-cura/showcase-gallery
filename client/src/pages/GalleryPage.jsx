
import ProductGrid from "../components/ProductGrid.jsx";

function GalleryPage({ products = [], loading = false }) {
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
                {products.length} products available
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-[#30363d] pb-5">
            <div>
              <h2 className="text-xl font-semibold">
                Product collection
              </h2>
              <p className="mt-1 text-sm text-[#8b949e]">
                Browse all available products.
              </p>
            </div>

            <span className="rounded-full border border-[#30363d] bg-[#161b22] px-3 py-1 text-sm text-[#8b949e]">
              {products.length} items
            </span>
          </div>

          {loading ? (
            <div className="rounded-xl border border-[#30363d] bg-[#161b22] py-20 text-center text-[#8b949e]">
              Loading products...
            </div>
          ) : (
            <ProductGrid products={products} />
          )}
        </section>

        <footer className="mt-16 border-t border-[#30363d] py-6 text-center text-sm text-[#8b949e]">
          Built by Rc Cura · INF233
        </footer>
      </div>
    </main>
  );
}

export default GalleryPage;
