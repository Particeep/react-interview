import React from "react";

// Redux
import { useDispatch } from "react-redux";
import { set_amount_per_page } from "../redux/pagesSlice";

const Limiter = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(set_amount_per_page(e.target.value));
  };
  return (
    <div className="items-limiter">
      <label htmlFor="items-limit">Items per page: </label>

      <select
        data-testid="limit-movies"
        id="items-limit"
        onChange={(e) => handleChange(e)}
      >
        <option value="4">4</option>
        <option value="8">8</option>
        <option value="12">12</option>
      </select>
    </div>
  );
};

export default Limiter;
