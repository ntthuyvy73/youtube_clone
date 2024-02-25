import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChannelDetail, Feed, Navbar, SearchFeed, VideoDetail } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ background: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/channel/:id" element={<ChannelDetail/>} />
          <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
          <Route path="/video/:id" element={<VideoDetail/>} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
