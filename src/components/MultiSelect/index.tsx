import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTag, removeTag } from "../../store/reducers/movies";
import { Dropdown } from "../";

const Multiselect = () => {
  const [dropdown, setDropdown] = useState(false),
    list: any[] = useSelector((state: any) => [
      ...new Set(state.movies.data.map((o: { category: any }) => o.category)),
    ]),
    { selectedCategories } = useSelector((state: any) => state.movies),
    dispatch = useDispatch();

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };
  const handleAddTag = (tag: any) => {
    dispatch(addTag(tag));
    setDropdown(false);
  };
  const handleRemoveTag = (tag: any) => {
    dispatch(removeTag(tag));
  };

  return (
    <div className="relative">
      <label className="absolute ml-2 md:ml-12 bottom-20 text-slate-200">
        Choose your categories
      </label>
      <div className="autcomplete-wrapper ml-2 md:ml-12 mb-5 w-[360px]">
        <div className="autcomplete">
          <div className="w-full flex flex-col items-center mx-auto">
            <div className="w-full">
              <div className="flex flex-col items-center relative">
                <div className="w-full ">
                  <div className="my-2 p-1 flex border border-gray-200 bg-white rounded ">
                    <div className="flex flex-auto flex-wrap">
                      {selectedCategories.map((tag: string, index: number) => {
                        return (
                          <div
                            key={index}
                            className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-teal-700 bg-teal-100 border border-teal-300 "
                          >
                            <div className="text-xs font-normal leading-none max-w-full flex-initial">
                              {tag}
                            </div>
                            <div className="flex flex-auto flex-row-reverse">
                              <div onClick={() => handleRemoveTag(tag)}>
                                <svg
                                  width="100%"
                                  height="100%"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-x cursor-pointer hover:text-teal-400 rounded-full w-4 h-4 ml-2"
                                >
                                  <line x1="18" y1="6" x2="6" y2="18"></line>
                                  <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      <div className="flex-1">
                        <input
                          placeholder=""
                          className="bg-transparent p-1 px-2 appearance-none outline-none h-full w-full text-gray-800"
                        />
                      </div>
                    </div>
                    <div
                      className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200"
                      onClick={toggleDropdown}
                    >
                      <button className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                        <svg
                          width="100%"
                          height="100%"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-chevron-up w-4 h-4"
                        >
                          {dropdown ? (
                            <polyline points="18 15 12 9 6 15"></polyline>
                          ) : (
                            <polyline points="6 9 12 15 18 9"></polyline>
                          )}
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {dropdown && <Dropdown list={list} addItem={handleAddTag} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Multiselect;
