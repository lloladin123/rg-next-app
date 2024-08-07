import React from "react";

const FacebookTimeLine = () => {
  return (
    <>
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100031858223372&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="350"
        height="500"
        scrolling="no"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        style={{ border: "none", overflow: "hidden" }}
      ></iframe>
    </>
  );
};

export default FacebookTimeLine;
