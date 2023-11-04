import React, { useContext } from "react";
import Blog from "../../components/main/Blog";
import BlogsContext from "../../context/blogsContext";

export const Blogs = () => {
  const { blogs, setBlogs } = useContext(BlogsContext);
  return (
    <dov div className="px-16 my-20 flex flex-col gap-20">
      <h1 className="text-5xl font-bold">Our Success Stories</h1>
      <div className="grid grid-cols-3 gap-x-12 gap-y-24 ">
        {blogs.map((blog) => (
          <Blog blog={blog} key={blog.author} />
        ))}
      </div>
      <button className="w-fit px-12 py-2 rounded-lg border mx-auto text-primary-700 border-primary-700 hover:bg-primary-700 hover:text-primary-50 transition-all">
        Add your Success Story
      </button>
    </dov>
  );
};
