
import ProductForm from "../components/ProductForm.jsx";
import ProductGrid from "../components/ProductGrid.jsx";

function ManagePage({
  products = [],
  editingProduct,
  onSave,
  onCancel,
  onEdit,
  onDelete,
}) {
  return (
    <main className="min-h-screen bg-[#0d1117] px-5 py-10 text-[#f0f6fc] sm:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 border-b border-[#30363d] pb-6">
          <div className="mb-3 flex items-center gap-2 text-sm text-[#8b949e]">
            <span>Workspace</span>
            <span>/</span>
            <span className="text-[#f0f6fc]">Manage Products</span>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Manage products
                <span className="text-[#3fb950]">.</span>
              </h1>

              <p className="mt-3 text-sm leading-6 text-[#8b949e] sm:text-base">
                Add new products, update product details, and manage
                your collection in one place.
              </p>
            </div>

            <div className="rounded-lg border border-[#30363d] bg-[#161b22] px-4 py-3">
              <p className="text-xs text-[#8b949e]">Total products</p>
              <p className="mt-1 text-2xl font-bold">{products.length}</p>
            </div>
          </div>
        </header>

        <div className="grid items-start gap-8 lg:grid-cols-[360px_minmax(0,1fr)]">
          <section className="min-w-0">
            <div className="mb-4">
              <h2 className="text-lg font-semibold">
                {editingProduct ? "Edit product" : "Add a product"}
              </h2>

              <p className="mt-1 text-sm text-[#8b949e]">
                {editingProduct
                  ? "Update the details of your selected product."
                  : "Fill in the details to add a new product."}
              </p>
            </div>

            <div className="overflow-hidden rounded-xl border border-[#30363d] bg-[#161b22] p-1">
              <ProductForm
                key={editingProduct?._id || "new"}
                editingProduct={editingProduct}
                onSubmit={onSave}
                onCancel={onCancel}
              />
            </div>
          </section>

          <section className="min-w-0">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-[#30363d] pb-5">
              <div>
                <h2 className="text-xl font-semibold">
                  Your collection
                </h2>

                <p className="mt-1 text-sm text-[#8b949e]">
                  Review and manage your existing products.
                </p>
              </div>

              <span className="rounded-full border border-[#30363d] bg-[#161b22] px-3 py-1 text-sm text-[#8b949e]">
                {products.length} items
              </span>
            </div>

            <ProductGrid
              products={products}
              showActions
              onEdit={onEdit}
              onDelete={onDelete}
            />
          </section>
        </div>

        <footer className="mt-16 border-t border-[#30363d] py-6 text-center text-sm text-[#8b949e]">
          Showcase Gallery · INF233
        </footer>
      </div>
    </main>
  );
}

export default ManagePage;
