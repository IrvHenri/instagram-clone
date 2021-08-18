import { firebase, FieldValue } from "../lib/firebase";
export async function doesUsernameExist(username) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get();

  return result.docs.map((user) => user.data().length > 0);
}

export async function getUserByUserId(userId) {
  let userResult = await firebase
    .firestore()
    .collection("users")
    .where("userId", "==", userId)
    .get();

  const user = userResult.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));

  return user;
}

export async function getUserFollowedPhotos(userId, followingUserIds) {
  let result = await firebase
    .firestore()
    .collection("photos")
    .where("userId", "in", followingUserIds)
    .get();

  const userFollowedPhotos = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));

  console.log("USER FOLLOWED PHOTOS --->", userFollowedPhotos);
}
