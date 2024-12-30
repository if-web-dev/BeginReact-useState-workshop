"use client";

import { ImageGenerator } from "./ImageGenerator.jsx";
import { renderPNG } from "../render-png.js";

export default function Upload({ image, settings }) {
  const downloadImage = async () => {
    try {
      const { blob } = await renderPNG({ image, settings });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.download = "image.png";
      link.href = url;
      link.click();
      URL.revokeObjectURL(url); // Libération de l'URL
    } catch (error) {
      alert("Failed to download image:", error);
    }
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center max-w-lg w-full gap-4">
      <div className="w-full h-fit border rounded-md overflow-hidden">
        <ImageGenerator image={image} settings={settings} />
      </div>
      <div className="flex justify-center gap-2">
        <button
          className="btn"
          disabled={!image}
          onClick={downloadImage}
        >
          Download
        </button>
        <button className="btn" disabled>
          Copy
        </button>
      </div>
    </div>
  );
}
