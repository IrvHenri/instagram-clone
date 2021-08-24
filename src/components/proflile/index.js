import React, { useEffect, useReducer } from "react";
import Header from "./header";
import Photos from "./photos";
import { getUserByUsername } from "../../services/firebase";

const reducer = (state, newState) => ({ ...state, ...newState });
const initialState = {
  profile: {},
  photosCollection: [],
  followerCount: 0,
};

export default function Profile({ username }) {
  const [{ profile, photosCollection, followerCount }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    async function getProfileInfoAndPhotos() {
      const [{ ...user }] = await getUserByUsername(username);
      console.log(user);
    }
    getProfileInfoAndPhotos();
  }, [username]);

  return (
    <>
      <Header />
      <Photos />
    </>
  );
}
