import React from "react";
import Skeleton from "react-loading-skeleton";

export default function Photos({ photos }) {
  return (
    <>
      {!photos ? (
        [...new Array(photos.length)].map((_, index) => (
          <Skeleton key={index} count={1} width={320} height={400} />
        ))
      ) : photos.length === 0 ? (
        <p>No posts Yet</p>
      ) : (
        <p>Photos here</p>
      )}
    </>
  );
}
