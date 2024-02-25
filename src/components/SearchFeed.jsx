import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {Videos} from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos,setVideos]=useState([]);

  const {searchTerm} = useParams();

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => { setVideos(data.items)} );
  },[searchTerm])

  return (
    <Stack
      sx={{
        flexDirection: {
          sx: "column",
          md: "row",
        },
      }}
    >
     
      <Box p={2} sx={{overflowY:'auto', height:'90vh', flex:2}} >
        <Typography variant="h4" fontWeight='bold' mb={2} sx={{color:'white'}}>
         Search results for: 
          <span style={{ color: "#f31503" }}> {searchTerm} videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default SearchFeed;
