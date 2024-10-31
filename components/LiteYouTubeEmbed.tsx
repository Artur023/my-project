import "lite-youtube-embed";
import React from "react";

interface LiteYouTubeEmbedProps {
  videoId: string;
  title: string;
}

const LiteYouTubeEmbed: React.FC<LiteYouTubeEmbedProps> = ({
  videoId,
  title,
}) => {
  return React.createElement("lite-youtube", {
    videoid: videoId,
    style: {
    
    },
    title: title,
  });
};

export default LiteYouTubeEmbed;
