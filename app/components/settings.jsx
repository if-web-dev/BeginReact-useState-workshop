"use client"

import Input from "./input.jsx";

export default function Settings({ settings, setSetting, handleFileChange }) {
  return (
    <form className="card flex-1 max-w-lg bg-base-200 shadow-xl w-full">
      <div className="card-body">
        <h2 className="card-title">Settings</h2>
        <Input
          label="File"
          type="file"
          onChange={handleFileChange}
        />
        <Input
          label="Padding"
          type="range"
          min="0"
          max="100"
          step = "5"
          value={settings.padding}
          onChange={e => setSetting("padding", Number(e.target.value)) }
        />
        <Input
          label="Shadow"
          type="range"
          min="0"
          max="100"
          step = "5"
          value={settings.shadow}
          onChange={e => setSetting("shadow", Number(e.target.value)) }
        />
        <Input
          label="Radius"
          type="range"
          min="0"
          max="100"
          step = "5"
          value={settings.radius}
          onChange={e => setSetting("radius", Number(e.target.value)) }
        />
      </div>
    </form>
  );
}
