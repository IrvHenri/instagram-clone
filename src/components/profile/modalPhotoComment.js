import React, { useState } from "react";
import { formatDistance } from "date-fns";
import { Link } from "react-router-dom";
import Actions from "../post/actions";
import AddComment from "../post/add-comment";

const ModalPhotoComments = ({
  docId,
  comments: allComments,
  posted,
  commentInput,
  handleFocus,
  totalLikes,
  likedPhoto,
}) => {
  const [comments, setComments] = useState(allComments);
  let reversedComments = [...comments].reverse();
  return (
    <div className="p-4 pt-1 pb-4 h-full flex flex-col justify-between	">
      <section className="">
        {reversedComments.slice(0, 3).map((item) => (
          <p key={`${item.comment}-${item.displayName}`} className="mb-1">
            <Link to={`/p/${item.displayName}`}>
              <span className="mr-1 font-bold">{item.displayName}</span>
            </Link>
            <span>{item.comment}</span>
          </p>
        ))}
      </section>
      <footer>
        <Actions
          docId={docId}
          handleFocus={handleFocus}
          totalLikes={totalLikes}
          likedPhoto={likedPhoto}
        />
        <p className="text-gray uppercase text-xs mt-2">
          {formatDistance(posted, new Date())} ago
        </p>
        <AddComment
          docId={docId}
          comments={comments}
          setComments={setComments}
          commentInput={commentInput}
        />
      </footer>
    </div>
  );
};

export default ModalPhotoComments;
