import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
const Blog = () => {
  const location = useLocation();
  const blog = location.state;
  return (
    <div className="px-16 mb-20 mt-10 flex flex-col gap-16">
      <Link
        to="/blogs"
        className="flex gap-2 items-center hover:text-primary-800 transition-all w-fit"
      >
        <AiOutlineArrowLeft />
        Blogs
      </Link>
      <div className="flex flex-col gap-8">
        <div className="flex gap-4 items-center">
          <img
            src={blog.imgURL}
            className="rounded-full  w-16 aspect-square"
            alt=""
          />
          <div>
            <h2 className="text-xl font-bold">{blog.author}</h2>
            <h4 className="text-sm font-normal">{blog.occupation}</h4>
          </div>
        </div>
        <div>{blog.blog}</div>
        <button className="w-fit mt-20 px-12 py-2 rounded-lg border mx-auto text-primary-700 border-primary-700 hover:bg-primary-700 hover:text-primary-50 transition-all">
          Add your Success Story
        </button>
      </div>
    </div>
  );
};

export default Blog;
