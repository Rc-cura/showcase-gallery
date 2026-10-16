
const MAX_SIZE = 1024 * 1024;

function ImageUpload({ image, onChange, onError }) {
  const handleFile = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      onError("Please choose an image file.");
      e.target.value = "";
      return;
    }

    if (file.size > MAX_SIZE) {
      onError("Image is too large. Maximum size is 1MB.");
      e.target.value = "";
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      onChange(reader.result);
      onError("");
    };

    reader.onerror = () => {
      onError("Could not read the image. Please try again.");
    };

    reader.readAsDataURL(file);
  };

  return (
    <label className="group flex h-48 cursor-pointer items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-[#30363D] bg-[#0D1117] text-sm text-[#8B949E] transition hover:border-[#238636] hover:bg-[#161B22]">
      {image ? (
        <img
          src={image}
          alt="Product preview"
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="text-center">
          <div className="mb-3 text-3xl text-[#3FB950]">+</div>
          <p className="font-medium text-[#E6EDF3]">
            Upload product image
          </p>
          <p className="mt-1 text-xs">
            Click to browse · Maximum 1MB
          </p>
        </div>
      )}

      <input
        type="file"
        accept="image/*"
        onChange={handleFile}
        hidden
      />
    </label>
  );
}

export default ImageUpload;
