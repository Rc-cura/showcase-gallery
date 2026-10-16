
function Navbar({ view, onChangeView }) {
  const tabClass = (name) =>
    `rounded-md px-4 py-2 text-sm font-medium transition ${
      view === name
        ? "bg-[#238636] text-white shadow-sm"
        : "text-[#8B949E] hover:bg-[#21262D] hover:text-[#E6EDF3]"
    }`;
//j
  return (
    <nav className="sticky top-0 z-20 border-b border-[#30363D] bg-[#161B22]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button
          onClick={() => onChangeView("gallery")}
          className="flex items-center gap-3"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#238636] text-xl font-bold text-white">
            S
          </div>

          <h1 className="text-xl font-bold tracking-tight text-[#E6EDF3]">
            show<span className="text-[#3FB950]">Case</span>
          </h1>
        </button>

        <div className="flex gap-1 rounded-lg border border-[#30363D] bg-[#0D1117] p-1">
          <button
            className={tabClass("gallery")}
            onClick={() => onChangeView("gallery")}
          >
            Gallery
          </button>

          <button
            className={tabClass("manage")}
            onClick={() => onChangeView("manage")}
          >
            Manage
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
