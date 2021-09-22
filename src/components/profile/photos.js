import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import Photo from "./photo";
import Modal from "react-modal";
import Header from "../post/header";

// Modal Styles

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
  },
};

Modal.setAppElement("#root");

export default function Photos({ photos, username }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhotoInfo, setCurrentPhotoInfo] = useState({
    imageSrc: null,
    caption: "",
    comments: [],
  });

  function openModal(id) {
    // filter photos with id, get image source
    let photoInfo = photos.filter((photo) => photo.docId === id)[0];

    const { imageSrc, caption, comments } = photoInfo;

    setCurrentPhotoInfo((prev) => ({ ...prev, imageSrc, caption, comments }));

    setIsModalOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div className="h-16 border-t border-gray mt-12 pt-4">
      <div className="grid grid-cols-3 gap-8 mt-4 mb-12">
        {!photos ? (
          <>
            {[...new Array(9)].map((_, index) => (
              <Skeleton key={index} count={1} width={320} height={400} />
            ))}
          </>
        ) : photos.length > 0 ? (
          photos.map((photo) => (
            <div key={photo.docId} className="relative group cursor-pointer">
              <Photo
                id={photo.docId}
                imageSource={photo.imageSrc}
                caption={photo.caption}
                openModal={openModal}
              />
            </div>
          ))
        ) : null}
      </div>
      <div>
        <Modal
          isOpen={isModalOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Instagram Modal"
        >
          <article className="flex">
            <img
              src={currentPhotoInfo.imageSrc}
              alt={currentPhotoInfo.caption}
              className="w-6/12"
            />
            <aside className="rounded col-span-4 border bg-white mb-16 w-6/12">
              <Header username={username} />
            </aside>
          </article>

          {/* <button onClick={closeModal}>X</button> */}
        </Modal>
      </div>

      {!photos ||
        (photos.length === 0 && (
          <p className="text-center text-2xl">No Photos Yet</p>
        ))}
    </div>
  );
}
