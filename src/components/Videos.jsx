import { Box, Stack } from "@mui/material";
import React from "react";
import { ChannelCard, VideoCard } from "./";

const Videos = ({ videos,direction ,justifyContent}) => {
  if(!videos?.length) return 'Loading ...'
  return (
    <Stack
      direction={direction || 'row'}
      flexWrap="wrap"
      justifyContent={justifyContent || "space-evenly"}
      gap={2}
    >
      {videos.map((video, index) => (
        <Box key={index}>
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.channelId && <ChannelCard channelDetail={video} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
