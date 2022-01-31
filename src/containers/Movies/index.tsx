import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../store/actions";
import { MultiSelect, MovieCard, Pagination } from "../../components";

const Movies = () => {
  const dispatch = useDispatch();
  const { list: movies } = useSelector((state: any) => state.movies);
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <div className="container mx-auto px-4">
      <section className="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px]">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="text-center mx-auto text-slate-200 mb-12 lg:mb-20 max-w-[510px]">
                <span className="font-semibold text-lg text-primary mb-2 block">
                  Our Services
                </span>
                <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                  What We Offer
                </h2>
                <p className="text-base text-body-color">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          <MultiSelect />
          </div>
          <div className="flex flex-wrap -mx-4">
            {movies.map((e: any) => (
              <MovieCard key={e.id} {...e} />
            ))}
          </div>
        </div>
      <Pagination />
      </section>
    </div>
  );
};

export default Movies;
