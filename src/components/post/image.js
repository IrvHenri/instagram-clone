import React from "react";

export default function Image({ src, caption }) {
  return (
    <div>
      <img src={src} alt={caption} />
    </div>
  );
}
