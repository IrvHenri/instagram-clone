import React from "react";

export default function Photo({ id, imageSource, caption, openModal }) {
  return <img src={imageSource} alt={caption} onClick={() => openModal(id)} />;
}
