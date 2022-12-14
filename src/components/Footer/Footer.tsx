import Pagination from "../Buttons/Pagination";

import { setFilter } from "../../logic/paginationSlices";
import { useDispatch } from "react-redux";

import "./footer.scss";

const Footer = () => {
  const dispatch = useDispatch();
  return (
    <footer>
      <Pagination />
      <div>
        <label htmlFor="">Nombre de résultats</label>
        <select
          onChange={(event) => dispatch(setFilter(Number(event.target.value)))}
        >
          <option value="12">12</option>
          <option value="8">8</option>
          <option value="4">4</option>
        </select>
      </div>
    </footer>
  );
};

export default Footer;
