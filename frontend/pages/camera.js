import Image from "next/image";
import axios from "axios";
import Navbar from "../components/Navbar";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useGlobalContext } from "../context";
import Webcam from "react-webcam";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Camera() {
  const { state, dispatch } = useGlobalContext();
  const [domLoaded, setDomLoaded] = useState(false);
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };
  const [posting, setPosting] = useState(false);
  const [popup, setPopup] = useState(false);
  const [rectImg, setRectImg] = React.useState(null);
  const router = useRouter();
  const [item, setItem] = React.useState();
  useEffect(() => {
    setDomLoaded(true);
  }, []);

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
                setRectImg(imageSrc);
                const body = JSON.stringify(imageSrc);
                const config = {
                  headers: { "Content-Type": "application/json" },
                };
                console.log("POSTING...");

                const response = await axios.post(
                  "http://192.168.50.74:8000/api/upload",
                  body,
                  config
                );
                dispatch({
                  type: "update_inventory",
                  payload: JSON.parse(response.data).prediction[0],
                });
                setItem(JSON.parse(response.data).prediction[0]);
                setPosting(false);
                setPopup(true);
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
        {posting && (
          <>
            <div className="z-10 absolute inset-0 flex items-center justify-center bg-black/80">
              <h1 className="font-poppinsMedium font-bold text-2xl text-white">
                Identifying...
              </h1>
            </div>
          </>
        )}
        {popup && (
          <>
            <div className="z-10 absolute top w-[80vw] top-1/2 flex flex-col gap-4 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-600 p-6 font-poppinsMedium rounded-lg">
              <h1 className="text-center font-bold text-2xl">Plastic bottle</h1>
              <img src={rectImg} alt="img" className="rounded-lg" />
              <p>
                Recyclable: <span className="font-bold">Yes</span>
              </p>
              <p>
                Fun fact:{" "}
                <span className="font-bold">
                  Recycled bottles use 75% less energy to produce than new ones
                </span>
              </p>
              <div className="flex mx-auto items-center mt-auto">
                <Link href="/inventory">
                  <button className="py-2 px-4 rounded-md bg-green-200 hover:bg-green-800 transition hover:text-white shadow-lg">
                    Add to inventory
                  </button>
                </Link>

                <Link href="/map">
                  <span className="underline cursor-pointer ml-4">
                    Visit map
                  </span>
                </Link>
              </div>
            </div>
          </>
        )}
      </main>
      <Navbar />
    </>
  );
}
