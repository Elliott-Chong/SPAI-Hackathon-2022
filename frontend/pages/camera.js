import Image from "next/image";
import axios from "axios";
import Navbar from "../components/Navbar";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useGlobalContext } from "../context";
import Webcam from "react-webcam";
import { useRouter } from "next/router";

export default function Camera() {
  const { state, dispatch } = useGlobalContext();
  const [domLoaded, setDomLoaded] = useState(false);
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };
  const [posting, setPosting] = useState(false);
  const [rectImg, setRectImg] = React.useState(null);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  const router = useRouter();

  if (!domLoaded) return <></>;

  return (
    <>
      <Header />
      <main className="flex flex-col align-center" style={{ height: "88vh" }}>
        {/* {state.user && (
          <>
            <div className="flex items-center gap-4">
              <h1 className="font-poppinsMedium text-xl font-bold">
                Logged in as:{" "}
                <span className="font-normal">{state.user.displayName}</span>
              </h1>
              <Image
                width={50}
                height={50}
                className="rounded-full"
                src={state.user.photoURL}
              />
            </div>
          </>
        )} */}
        <Webcam
          audio={false}
          // height={2000}
          className="h-screen"
          screenshotFormat="image/jpeg"
          forceScreenshotSourceSize={true}
          // width={1280}
          // videoConstraints={videoConstraints}
        >
          {({ getScreenshot }) => (
            <button
              className="rounded-full self-center m-5 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              onClick={async () => {
                if (!state.user) {
                  alert("Please sign in first!");
                  return;
                }
                setPosting(true);
                const imageSrc = getScreenshot();
                const body = JSON.stringify(imageSrc);
                const config = {
                  headers: { "Content-Type": "application/json" },
                };
                console.log("POSTING...");

                const response = await axios.post(
                  "http://192.168.50.35:8000/api/upload",
                  body,
                  config
                );
                dispatch({
                  type: "update_inventory",
                  payload: JSON.parse(response.data).prediction[0],
                });
                setPosting(false);
                router.push("/inventory");
              }}
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
        {rectImg && <img src={rectImg} />}
        {posting && (
          <>
            <div className="z-10 absolute inset-0 flex items-center justify-center bg-black/80">
              <h1 className="font-poppinsMedium font-bold text-2xl text-white">
                Identifying...
              </h1>
            </div>
          </>
        )}
      </main>
      <Navbar />
    </>
  );
}
