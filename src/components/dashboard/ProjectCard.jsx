/* eslint-disable react/prop-types */

import { HiOutlineDotsHorizontal } from "react-icons/hi";
// eslint-disable-next-line react/prop-types
const ProjectCard = ({ project }) => {
  return (
    <>
      <div className="grid grid-cols-12 items-center py-4 mt-2 dark:text-slate-200 text-slate-500 font-light">
        <div className="flex items-center text-sm gap-1 col-span-2 ">
          {project.dateAdded}
        </div>
        <div className="flex items-center text-sm gap-1 col-span-2 font-medium dark:text-white text-black">
          {project.title}
        </div>
        <div className="flex items-center text-sm gap-1 col-span-2">
          {project.dueDate}
        </div>
        <div className="flex items-center text-sm col-span-2">
          {project.category}
        </div>
        <div className="flex items-center text-sm col-span-2 ">
          {/* bg-green-800 */}
          {/* bg-green-200/60 dark:bg-green-200 text-green-800 */}
          <span
            className={`px-4 py-1 flex items-center gap-2 rounded-full text-xs bg-${
              project.status == "ongoing"
                ? "green"
                : project.status == "pending"
                ? "amber"
                : "red"
            }-200/60 dark:bg-${
              project.status == "ongoing"
                ? "green"
                : project.status == "pending"
                ? "amber"
                : "red"
            }-200 text-${
              project.status === "ongoing"
                ? "green"
                : project.status == "pending"
                ? "amber"
                : "red"
            }-800`}
          >
            <span
              className={`w-2 rounded-full aspect-square bg-${
                project.status === "ongoing"
                  ? "green"
                  : project.status == "pending"
                  ? "amber"
                  : "red"
              }-800`}
            ></span>
            {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
          </span>
        </div>
        <div className="flex items-center text-sm col-span-1">
          {project.platform}
        </div>
        <div className=" col-span-1 place-content-end w-full flex pr-4">
          <span className="flex items-center justify-center w-8 aspect-square text-sm hover:bg-primary-50 duration-200 rounded-full cursor-pointer dark:hover:bg-slate-600">
            <HiOutlineDotsHorizontal />
          </span>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
