import { Dispatch, SetStateAction } from "react";
import { MultiSelect } from "react-multi-select-component";
import { dataMovies, selectValues } from "../../interfaces/Movies";

interface Props {
  movies: dataMovies[];
  filteredValues: selectValues[];
  setFilteredValues: Dispatch<SetStateAction<selectValues[]>>;
}

const Filter = ({ movies, setFilteredValues, filteredValues }: Props) => {
  const moviesCategories = movies.map((movie) => movie.category);
  const filteredMoviesCategories = [...new Set(moviesCategories)];

  const filteredOptions = filteredMoviesCategories.map((movie) => {
    return {
      label: movie,
      value: movie,
    };
  });

  return (
    <div className="w-3/4 sm:w-96 mx-auto mb-12">
      <MultiSelect
        options={filteredOptions}
        value={filteredValues}
        onChange={setFilteredValues}
        labelledBy="Select movies categories"
      />
    </div>
  );
};

export default Filter;
