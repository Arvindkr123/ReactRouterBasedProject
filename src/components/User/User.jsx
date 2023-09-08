import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  return (
    <div className="text-center bg-gray-600 text-yellow-100 p-4 text-6xl w-[63%] m-auto">
      User : {userId}
    </div>
  );
};

export default User;
