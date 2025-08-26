import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Singleblogsection from "./components/Singleblogsection";

const Singleblog = () => {
  const { id } = useParams();
  const location = useLocation();
  const { blog } = location.state || {};
  console.log(blog);

  return (
    <div>
      {/* Pass blog data as props */}
      <Singleblogsection blog={blog} />
    </div>
  );
};

export default Singleblog;
