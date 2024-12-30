"use client";

export const ImageGenerator = ({ image, settings }) => {
  // Invite l'utilisateur a upload une image si il n'y en a pas.
  if (!image) {
    return (
      <p className="text-center p-4">Upload an image first.</p>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        padding: `${settings.padding}px`,
      }}
    >
      <img
        src={image.src}
        style={{
          boxShadow: `0 0 ${settings.shadow}px rgba(0, 0, 0, 0.5)`,
          borderRadius: `${settings.radius}px`,
        }}
      />
    </div>
  );
};
