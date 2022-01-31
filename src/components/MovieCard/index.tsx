import star from "../../images/star.png";
import { useDispatch } from "react-redux";
import { deleteFromList, toggleLike } from "../../store/reducers/movies";

const MovieCard = (props: any) => {
  const { id, title, category, likes, dislikes, userLike } = props,
    dispatch = useDispatch(),
    handleDelete = () => {
      dispatch(deleteFromList(id));
    },
    handleLike = () => {
      dispatch(toggleLike(id));
    };

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
      <div className="p-4 md:px-7 xl:px-10 rounded-[20px] bg-slate-100 shadow-md hover:shadow-lg mb-8">
        <button
          className="float-right inline-flex items-center justify-center w-8 h-8 md:-mr-6 text-red-100 transition-colors duration-150 bg-red-700 rounded-full focus:shadow-outline hover:bg-red-800"
          onClick={handleDelete}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="w-[70px] h-[70px] flex items-center justify-center bg-primary rounded-2xl mb-8">
          <img src={star} alt="star" />
        </div>
        <h4 className="font-semibold text-xl text-dark mb-3">{title}</h4>
        <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
          {category}
        </span>
        <button
          className={`float-right inline-flex items-center justify-center w-12 h-12 -mr-2 md:-mr-8 text-${
            userLike === undefined ? "gray" : userLike === true ? "teal" : "red"
          }-100 transition-colors duration-150 bg-${
            userLike === undefined ? "gray" : userLike === true ? "teal" : "red"
          }-700 rounded-full focus:shadow-outline hover:bg-${
            userLike === undefined ? "gray" : userLike === true ? "teal" : "red"
          }-800`}
          onClick={handleLike}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                userLike === true || userLike === undefined
                  ? "M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  : "M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
              }
            />
          </svg>
        </button>
        <div className="pt-4 flex justify-around">
          <div className="flex w-[50px] justify-between">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              />
            </svg>
            <p>{likes}</p>
          </div>
          <div className="flex w-[50px] justify-between">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
              />
            </svg>
            <p>{dislikes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
