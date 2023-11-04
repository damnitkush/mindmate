import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="border py-2 px-4 rounded-full w-1/2 border-slate-300 dark:border-slate-600 flex items-center ">
      <CiSearch className="text-3xl text-slate-400 dark:text-slate-500" />

      <input
        type="text"
        className="w-full focus-visible:outline-none border-none outline-none px-2 placeholder:text-slate-400 placeholder:dark:text-slate-500 dark:bg-gray-800 dark:text-slate-100 "
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
