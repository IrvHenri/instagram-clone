import React from "react";
import useUser from "../../hooks/use-user";

export default function Sidebar() {
  const { user: { docId, userId, username, following, fullName } = {} } =
    useUser();
  console.log(docId);

  return <p>Sidebar</p>;
}
