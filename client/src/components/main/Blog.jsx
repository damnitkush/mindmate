import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const Blog = ({ blog }) => {
  const navigate = useNavigate();
  const readBlog = () => {
    navigate(`/blogs/${blog.author.toLowerCase().split(" ").join("")}`, {
      state: blog,
      replace: false,
    });
  };
  return (
    <div className="pb-4 pt-14 px-6 shadow border-t relative rounded-lg flex flex-col gap-4">
      <img
        src={blog.imgURL}
        className="rounded-full absolute w-16 h-16 border -top-8"
        alt="user"
      />
      <div className="text-slate-500">
        {blog.blog.length > 130 ? blog.blog.slice(0, 130) + "..." : blog.blog}
      </div>
      <div className="border-b"></div>
      <div className="flex justify-between items-center">
        <div className="text-slate-400  flex flex-col gap-1">
          <div>
            by <span className="font-medium text-slate-600">{blog.author}</span>
          </div>
          <span className="font-medium text-xs ">{blog.occupation}</span>
        </div>
        <div
          onClick={readBlog}
          className="text-slate-500 font-light text-sm flex gap-0 items-center overflow-hidden whitespace-nowrap group hover:gap-2 transition-all cursor-pointer hover:text-primary-800"
        >
          Read More
          <AiOutlineArrowRight className="group-hover:scale-100 scale-0 origin-left transition-all" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
