function ProductCard({
  product,
  showActions,
  onEdit,
  onDelete,
  onCardClick,
}) {
  return (
    <article 
      onClick={() => onCardClick && onCardClick(product)}
      className="group cursor-pointer overflow-hidden rounded-xl border border-[#30363D] bg-[#161B22] transition duration-300 hover:-translate-y-1 hover:border-[#484F58] hover:shadow-xl hover:shadow-black/20"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#0D1117]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute right-3 top-3 rounded-full border border-[#30363D] bg-[#0D1117]/90 px-3 py-1 text-sm font-bold text-[#3FB950] shadow">
          ₱{Number(product.price).toLocaleString()}
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-[#E6EDF3]">
          {product.name}
        </h3>

        <p className="mt-2 min-h-10 break-words text-sm leading-6 text-[#8B949E]">
          {product.description || "No description provided."}
        </p>

        {showActions && (
          <div 
            className="mt-5 flex gap-2 border-t border-[#30363D] pt-4" 
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => onEdit(product)}
              className="flex-1 rounded-lg border border-[#30363D] bg-[#21262D] py-2 text-sm font-medium text-[#E6EDF3] transition hover:border-[#484F58] hover:bg-[#30363D]"
            >
              Edit
            </button>

            <button
              onClick={() => onDelete(product._id)}
              className="flex-1 rounded-lg border border-[#DA3633]/40 bg-[#DA3633]/10 py-2 text-sm font-medium text-[#FF7B72] transition hover:bg-[#DA3633]/20"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </article>
  );
}

export default ProductCard;