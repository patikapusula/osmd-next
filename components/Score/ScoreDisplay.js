import React, { useEffect, useRef, useState } from "react";
import { OpenSheetMusicDisplay as OSMD } from "opensheetmusicdisplay";

const remoteUrl = "https://opensheetmusicdisplay.github.io/demo/sheets";

const ScoreDisplay = ({ score }) => {
  const refContainer = useRef();
  const [ready, setReady] = useState(false);
  const [fileUrl] = useState(`${remoteUrl}/${score.filename}`);

  useEffect(() => {
    console.log(fileUrl);

    // OSMD options...
    const OSMDoptions = {
      autoResize: true,
      followCursor: true,
      disableCursor: true,
      drawComposer: true,
      drawCredits: true,
      measureNumberInterval: 1,
    };

    // Loading...
    const osmd = new OSMD(refContainer.current, OSMDoptions);
    osmd
      .load(fileUrl)
      .then(() => {
        console.log("Score file LOADED");
        console.log("Title: " + osmd.sheet.TitleString);
        osmd.render();
        // osmd.cursor.show();
        console.log("Score file RENDERED");
      })
      .then(() => {
        setReady(true);
      })
      .catch((e) => {
        console.log("OSMD LOADING Error occured...", e);
      });

    return () => {
      //
    };
  }, [fileUrl]);

  return (
    <>
      <hr />
      {!ready && <h1 style={{ textAlign: "center" }}>LOADING...</h1>}
      <div ref={refContainer} />
    </>
  );
};

export default ScoreDisplay;
