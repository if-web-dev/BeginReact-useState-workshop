"use client";

import Settings from "./settings.jsx";
import ImageManager from "./imageManager.jsx";
import { useState } from "react";

export default function Form() {
  const [settings, setSettings] = useState({
    padding: 50,
    shadow: 50,
    radius: 50,
  });
  const [image, setImage] = useState();

  const setSetting = (name, value) => {
    setSettings((curr) => ({
      ...curr,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file || !file.type.startsWith("image/")) {
      alert("Invalid file type. Please upload an image.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        setImage({
          width: img.width,
          height: img.height,
          src: img.src,
          name: file.name,
        });
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col md:flex-row px-4 gap-8 lg:gap-16 w-full max-w-4xl">
      <Settings
        image={image}
        setImage={setImage}
        settings={settings}
        setSetting={setSetting}
        handleFileChange={handleFileChange}
      />
      <ImageManager image={image} settings={settings} />
    </div>
  );
}
