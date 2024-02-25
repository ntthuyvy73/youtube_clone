import React from "react";

import { categories } from "../utils/constants";
import { Stack } from "@mui/material";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: "column",
      }}
    >
      {categories.map((cate) => {
       // console.log(cate);
        return (
          <button
            className="category-btn"
            style={{ background: cate.name === selectedCategory && "#FC1503" }}
            onClick={()=> setSelectedCategory(cate.name)}
            key={cate.name}
          >
            <span
              className="category-icon"
              style={{
                color: cate.name === selectedCategory ? "white" : "red",
              }}
            >
              
              {cate.icon}{" "}
            </span>
            <span style={{ opacity: cate.name === selectedCategory ? 1 : 0.7 }}>
              {cate.name}{" "}
            </span>
          </button>
        );
      })}
    </Stack>
  );
};

export default Sidebar;
