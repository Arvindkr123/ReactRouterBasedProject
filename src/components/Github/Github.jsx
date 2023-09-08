import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
    
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch(`https://api.github.com/users/Arvindkr123`)
  //       .then((response) => response.json())
  //       .then((data) => setData(data));
  //   }, []);
  //   console.log(data);

  const data = useLoaderData();
  return (
    <div className="text-center bg-gray-600 text-yellow-100 p-4 text-6xl w-[63%] m-auto">
      Github followers : {data.id}
      <div className="flex items-center justify-center gap-6">
        <img
          src={data.avatar_url}
          alt="git hub picture"
          className="mt-3 rounded-md"
        />
        <p>{data.name}</p>
      </div>
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const res = await fetch(`https://api.github.com/users/Arvindkr123`);
  return res.json();
};
