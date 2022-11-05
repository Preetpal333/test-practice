import React, { useState } from "react";

function Test() {
  const [hidePara, setHidePara] = useState(false);
  const onHideParaHandler = () => {
    setHidePara(!hidePara);
  };

  return (
    <>
      <a href="#" target="_self" onClick={onHideParaHandler}>
        Hide text
      </a>

      {hidePara && (
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      )}
    </>
  );
}

export default Test;

/*
1 system design course 
2 dsa and system desgin crash course 
3 mock interviews 
*/
