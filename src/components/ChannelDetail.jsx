import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  console.log(id);
  console.log(videos);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet,statistics&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {setVideos(data?.items);
      console.log(data);}
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(36,0,33,1) 0%, rgba(232,23,217,1) 0%, rgba(9,121,120,1) 35%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        ></div>
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>

{/* video list */}
      <Box
      >
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
