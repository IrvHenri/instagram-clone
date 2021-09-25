import React, { useRef } from "react";
import Header from "../post/header";
import Image from "../post/image";
import ModalPhotoComments from "./modalPhotoComment";

export default function ModalPhotoPost({ content }) {
  const commentInput = useRef(null);
  const handleFocus = () => commentInput.current.focus();

  return (
    <div className="flex">
      <div className="w-6/12">
        <Image src={content.imageSrc} caption={content.caption} />
      </div>

      <aside className="w-6/12 flex flex-col justify-between">
        <Header username={content.username} />
        <ModalPhotoComments
          docId={content.docId}
          comments={content.comments}
          posted={content.dateCreated}
          commentInput={commentInput}
          totalLikes={content.likes.length}
          likedPhoto={content.userLikedPhoto}
          handleFocus={handleFocus}
        />
      </aside>
    </div>
  );
}
