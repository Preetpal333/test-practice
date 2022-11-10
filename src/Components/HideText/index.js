import React, { useState } from "react";
import "./hideText.css";

function HideText() {
  const [hidePara, setHidePara] = useState(true);

  const onHideParaHandler = (e) => {
    e.preventDefault();
    setHidePara(!hidePara);
  };

  return (
    <div className="main">
      <div className="btn">
        <a
          className="btn-link"
          href="http://localhost:3000/"
          // target="_self"
          onClick={onHideParaHandler}
        >
          {hidePara ? "Hide text" : "Show Text"}
        </a>
      </div>

      {hidePara ? (
        <div className="para">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default HideText;
