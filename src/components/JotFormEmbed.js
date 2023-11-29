import React from "react";

function JotFormEmbed() {
  return (
    // return the iframe
    <iframe
      src="https://form.jotform.com/233130838141044"
      title="JotForm Embed"
      id="JotFormIFrame-233130838141044"
      onload="window.parent.scrollTo(0,0)"
      allowtransparency="true"
      allowfullscreen="true"
      allow="geolocation; microphone; camera"
      style={{
        width: "100%",
        height: "100vh",
        border: "none",
        margin: "0",
        padding: "0",
        overflow: "none",
        // z index is the order of the element
        zIndex: "999",
        position: "fixed",
        top: "0",
        left: "0",
        // try to change the color of the button by id
      }}
      allowFullScreen
    ></iframe>
  );
}

export default JotFormEmbed;
