import React, { useState } from "react";
import Webcam from "react-webcam";
import { useGlobalContext } from "../context";
import axios from "axios";

const CameraPage = () => {
  const [posting, setPosting] = useState(false);
  const { dispatch } = useGlobalContext();

  const handleCapture = async (getScreenshot) => {
    setPosting(true);
    const imageSrc = getScreenshot();
    // setRectImg(imageSrc);
    const body = JSON.stringify({ img: imageSrc });
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    console.log("POSTING...");

    const response = await axios.post("/api/upload", body, config);
    console.log(response.data);
    setItem(response.data.prediction[0]);
    setPosting(false);
    // setPopup(true);
  };

  return (
    <main className="absolute top-1/2 left-1/2 flex flex-col items-center -translate-x-1/2 -translate-y-1/2">
      <Webcam
        audio={false}
        screenshotFormat="image/jpeg"
        width={window.innerWidth}
      >
        {({ getScreenshot }) => (
          <button
            className="rounded-full self-center m-5 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            onClick={() => handleCapture(getScreenshot)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="60"
              fill="currentColor"
              className="bi bi-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            </svg>
          </button>
        )}
      </Webcam>
      {posting && (
        <>
          <div className="z-10 absolute inset-0 flex items-center justify-center bg-black/80">
            <h1 className="font-bold text-2xl text-white">Identifying...</h1>
          </div>
        </>
      )}
    </main>
  );
};

export default CameraPage;
