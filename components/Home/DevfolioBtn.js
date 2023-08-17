import React, { useEffect, useState, useRef } from "react";

const DevfolioBtn = () => {
  const devfolioRef = useRef(null);
  const [retryCount, setRetryCount] = useState(0);
  const [maxRetries, setMaxRetries] = useState(5);

  // const [showPlaceholder, setShowPlaceholder] = useState(false);

  const scriptUrl = "https://apply.devfolio.co/v2/sdk.js";

  function loadExternalScript(scriptUrl, callback) {
    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;
    script.defer = true;
    script.onerror = callback;
    document.body.appendChild(script);
  }

  useEffect(() => {
    function handleScriptError() {
      if (
        devfolioRef.current.children[0].children.length === 0 &&
        retryCount < maxRetries
      ) {
        let count = retryCount + 1;
        setRetryCount(count);

        const retryInterval = Math.pow(5, retryCount) * 2000; // Exponential backoff in milliseconds

        // console.log(`Retrying in ${retryInterval}ms, attempt ${retryCount}`);

        setTimeout(() => {
          loadExternalScript(scriptUrl, handleScriptError);
        }, retryInterval);
      } else {
        console.log(
          "Max retry attempts reached. Unable to load external script."
        );
      }
    }

    // window.onload = handleScriptError();
    handleScriptError();

    // console.log(devfolioRef.current.children[0].children.length);
    // console.log(devfolioRef.current.children[0]);
  }, [devfolioRef, retryCount]);

  return (
    <div className="butHolder" ref={devfolioRef}>
      <div
        className="apply-button"
        data-hackathon-slug="hackthespace-1"
        data-button-theme="light"
        style={{ height: "56px", width: "305px" }}
      ></div>
      <button type="button" className="Btn zinc-bg">
        <a href="https://discord.gg/FJKTSgdxPX" target="_blank">
          <div className="gradient-mask blue-bg"></div>

          <svg
            name="logo-discord"
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon icon"
            viewBox="0 0 512 512"
          >
            <path d="M464 66.52A50 50 0 00414.12 17L97.64 16A49.65 49.65 0 0048 65.52V392c0 27.3 22.28 48 49.64 48H368l-13-44 109 100zM324.65 329.81s-8.72-10.39-16-19.32C340.39 301.55 352.5 282 352.5 282a139 139 0 01-27.85 14.25 173.31 173.31 0 01-35.11 10.39 170.05 170.05 0 01-62.72-.24 184.45 184.45 0 01-35.59-10.4 141.46 141.46 0 01-17.68-8.21c-.73-.48-1.45-.72-2.18-1.21-.49-.24-.73-.48-1-.48-4.36-2.42-6.78-4.11-6.78-4.11s11.62 19.09 42.38 28.26c-7.27 9.18-16.23 19.81-16.23 19.81-53.51-1.69-73.85-36.47-73.85-36.47 0-77.06 34.87-139.62 34.87-139.62 34.87-25.85 67.8-25.12 67.8-25.12l2.42 2.9c-43.59 12.32-63.44 31.4-63.44 31.4s5.32-2.9 14.28-6.77c25.91-11.35 46.5-14.25 55-15.21a24 24 0 014.12-.49 205.62 205.62 0 0148.91-.48 201.62 201.62 0 0172.89 22.95s-19.13-18.15-60.3-30.45l3.39-3.86s33.17-.73 67.81 25.16c0 0 34.87 62.56 34.87 139.62 0-.28-20.35 34.5-73.86 36.19z" />
            <path d="M212.05 218c-13.8 0-24.7 11.84-24.7 26.57s11.14 26.57 24.7 26.57c13.8 0 24.7-11.83 24.7-26.57.25-14.76-10.9-26.57-24.7-26.57zM300.43 218c-13.8 0-24.7 11.84-24.7 26.57s11.14 26.57 24.7 26.57c13.81 0 24.7-11.83 24.7-26.57S314 218 300.43 218z" />
          </svg>

          <span className="text">Discord</span>
        </a>
      </button>
    </div>
  );
};

export default DevfolioBtn;
