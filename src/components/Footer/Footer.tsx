import Pagination from "../Buttons/Pagination";

import { setFilter } from "../../logic/paginationSlices";
import { useDispatch } from "react-redux";

import "./footer.scss";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";

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
      <div className="references">
        <p>Réalisé par Théodore Perron-Kyritsos</p>
        <a href="https://github.com/theodorepk">
          <AiFillGithub /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/theodore-perron-kyritsos/">
          <AiOutlineLinkedin /> Linkedin
        </a>
      </div>
    </footer>
  );
};

export default Footer;
