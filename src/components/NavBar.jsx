import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import Filter from "./Filter";
import logo from "../Assets/img/logo.jpeg";
const NavBar = ({ selectedCategories, setSelectedCategories, movies }) => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ bgcolor: "#ed867e" }}>
        <img
          src={logo}
          alt="Logo"
          style={{ marginRight: "auto"}}
        />
        <Filter
          categories={[...new Set(movies?.map((movie) => movie.category))]}
          value={selectedCategories}
          onChange={setSelectedCategories}
        />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
