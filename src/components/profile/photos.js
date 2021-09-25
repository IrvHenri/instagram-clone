import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import Photo from "./photo";
import Modal from "react-modal";
// import Header from "../post/header";
import ModalPhotoPost from "./modalPhotoPost";

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

export default function Photos({ photos }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { username } = useParams();
  const [currentPhotoInfo, setCurrentPhotoInfo] = useState({
    username,
  });

  function openModal(id) {
    // filter photos with id, get image source
    let photoInfo = photos.find((photo) => photo.docId === id);
    setCurrentPhotoInfo((prev) => ({ ...prev, ...photoInfo }));
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
          <ModalPhotoPost content={currentPhotoInfo} />
        </Modal>
      </div>

      {!photos ||
        (photos.length === 0 && (
          <p className="text-center text-2xl">No Photos Yet</p>
        ))}
    </div>
  );
}
