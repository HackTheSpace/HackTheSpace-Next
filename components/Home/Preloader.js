import React, { useEffect } from 'react';

const Preloader = () => {
    useEffect(() => {
        const load = document.getElementById("preloader");
        const body = document.getElementById("body");

        const loadComplete = () => {
            load.style.opacity = 0;
            body.style.overflow = "auto";
        };

        const hideLoader = () => {
            load.style.display = "none";
        };

        setTimeout(loadComplete, 6000);
        setTimeout(hideLoader, 6200);
    }, []);

    return (
        <>
            <div id="preloader">
                <div class="text-container">
                    <svg
                        class="text-stroke"
                        viewBox="0 0 900 100"
                        width="80%"
                        height="100%"
                    >
                        <text class="text" x="20" y="75">HACK THE SPACE</text>
                    </svg>
                </div>
            </div>

            <div id="particles-js">
                <canvas id="3D-particle-effect-canvas"></canvas>
            </div>
        </>
    );
};

export default Preloader;
