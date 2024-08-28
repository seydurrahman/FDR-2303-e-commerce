import React from "react";
import Flex from "../CommonComponent/Flex";
import { FcSearch } from "react-icons/fc";

const Search = ({ placeHolder, onSearch }) => {
  return (
    <>
      <div className="relative">
        <Flex>
          <input
            type="text"
            className="w-[200px] sm:w-[350px] md:w-[400px] lg:w-[700px] py-5 px-5 rounded-sm "
            placeholder={placeHolder}
            onChange={onSearch}
          />

          <div className="absolute right-5 top-1/2 -translate-y-2/4 text-2xl hidden sm:block">
            <FcSearch />
          </div>
        </Flex>
      </div>
    </>
  );
};

export default Search;
