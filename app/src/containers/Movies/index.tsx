import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMovies } from "../../store/actions";

const Movies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);
  
  return <div>movies</div>;
};

export default Movies;
