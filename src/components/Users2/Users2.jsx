import React, { use } from "react";

const Users2 = ({ user2Promise }) => {
  const users = use(user2Promise);
  console.log("Suspense data load...", users);
  return (
    <div>
      <h2>This is user 2</h2>
    </div>
  );
};

export default Users2;
