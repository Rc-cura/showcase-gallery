
import { useState } from "react";
import ImageUpload from "./ImageUpload";

const emptyForm = {
  name: "",
  price: "",
  description: "",
  image: "",
};

const inputClass =
  "w-full rounded-lg border border-[#30363D] bg-[#0D1117] px-4 py-3 text-sm text-[#E6EDF3] placeholder:text-[#6E7681] outline-none transition focus:border-[#3FB950] focus:ring-2 focus:ring-[#238636]/30";

function ProductForm({
  editingProduct,
  onSubmit,
  onCancel,
}) {
  const [form, setForm] = useState(
    editingProduct || emptyForm
  );
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, price, description, image } = form;

    if (!name.trim() || price === "" || !image) {
      setError("Name, price, and image are required.");
      return;
    }

    if (!Number.isFinite(Number(price)) || Number(price) < 0) {
      setError("Please enter a valid price.");
      return;
    }

    setSaving(true);
    setError("");

    try {
      await onSubmit({
        name: name.trim(),
        price: Number(price),
        description: description.trim(),
        image,
      });

      setForm(emptyForm);
      setError("");
    } catch {
      setError("Could not save the product. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-xl border border-[#30363D] bg-[#161B22] p-6 shadow-lg shadow-black/10 lg:sticky lg:top-24"
    >
      <div className="border-b border-[#30363D] pb-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#3FB950]">
          Product Management
        </p>

        <h2 className="mt-2 text-xl font-bold text-[#E6EDF3]">
          {editingProduct ? "Edit Product" : "Add Product"}
        </h2>

        <p className="mt-1 text-sm text-[#8B949E]">
          {editingProduct
            ? "Update your product information."
            : "Add a new item to your gallery."}
        </p>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-[#E6EDF3]">
          Product Image <span className="text-[#FF7B72]">*</span>
        </label>

        <ImageUpload
          image={form.image}
          onChange={(image) =>
            setForm((prev) => ({ ...prev, image }))
          }
          onError={setError}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-[#E6EDF3]">
          Product Name <span className="text-[#FF7B72]">*</span>
        </label>

        <input
          name="name"
          placeholder="Enter product name"
          className={inputClass}
          value={form.name}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-[#E6EDF3]">
          Price (₱) <span className="text-[#FF7B72]">*</span>
        </label>

        <input
          type="number"
          name="price"
          min="0"
          step="0.01"
          placeholder="0.00"
          className={inputClass}
          value={form.price}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-[#E6EDF3]">
          Short Description
        </label>

        <textarea
          name="description"
          rows={4}
          placeholder="Describe your product..."
          className={`${inputClass} resize-y`}
          value={form.description}
          onChange={handleChange}
        />
      </div>

      {error && (
        <p className="rounded-lg border border-[#DA3633]/40 bg-[#DA3633]/10 p-3 text-sm text-[#FF7B72]">
          {error}
        </p>
      )}

      <div className="flex gap-2 pt-2">
        <button
          type="submit"
          disabled={saving}
          className="flex-1 rounded-lg bg-[#238636] py-3 text-sm font-semibold text-white transition hover:bg-[#2EA043] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {saving
            ? "Saving..."
            : editingProduct
              ? "Update Product"
              : "Add Product"}
        </button>

        {editingProduct && (
          <button
            type="button"
            onClick={onCancel}
            className="rounded-lg border border-[#30363D] bg-[#21262D] px-4 py-3 text-sm font-medium text-[#E6EDF3] transition hover:bg-[#30363D]"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default ProductForm;
