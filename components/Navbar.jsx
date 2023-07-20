import React, { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav>
            <div className="mobile-nav">
                <div
                    className="mobile-nav-links"
                    id="mobile-nav-links"
                    style={{
                        transform: open
                            ? `translate(0%, 0)`
                            : `translate(100%, 0)`,
                    }}
                >
                    <a href="#home" className="active">
                        Home
                    </a>
                    <a href="#about">About</a>
                    {/* <!-- <a href="#" >Tracks</a> --> */}
                    <a href="#schedule">Schedule</a>
                    <a href="#sponsors">Sponsors</a>
                    <a href="#organiser">Team</a>
                    <a href="#faqs">FAQs</a>
                    <a href="#contact">Contact</a>
                </div>

                <div
                    className="mobile-nav-icons"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                    }}
                >
                    <div className="logo shrink">
                        <a href="#home">
                            <img
                                src="/images/navbar/nav_logo.png"
                                alt="hack the space"
                            />
                        </a>
                    </div>
                    <div className="burgMlh">
                        <svg
                            name="menu-outline"
                            id="open-mobile-nav"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`ionicon icon ${
                                !open ? "show" : "hidden"
                            }`}
                            onClick={() => setOpen(true)}
                            viewBox="0 0 512 512"
                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="32"
                                d="M80 160h352M80 256h352M80 352h352"
                            />
                        </svg>

                        <svg
                            name="closeOutline"
                            xmlns="http://www.w3.org/2000/svg"
                            id="close-mobile-nav"
                            className={`ionicon icon ${
                                open ? "show" : "hidden"
                            }`}
                            onClick={() => setOpen(false)}
                            viewBox="0 0 512 512"
                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="32"
                                d="M368 368L144 144M368 144L144 368"
                            />
                        </svg>

                        <div
                            className="mlh-flag2 show"
                            style={{ display: "none" }}
                            name="menu-outline"
                        >
                            <img
                                src="/images/navbar/mlh_flag.png"
                                alt="mlh hack the space"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="desktop-nav">
                <div className="logo shrink">
                    <a href="#home">
                        <img
                            src="/images/navbar/nav_logo.png"
                            alt="hack the space"
                        />
                    </a>
                </div>
                <div className="links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    {/* <!-- <a href="#">Tracks</a> --> */}
                    {/* <!-- <a href="#">Prizes</a> --> */}
                    <a href="#schedule">Schedule</a>
                    <a href="#sponsors">Sponsors</a>
                    <a href="#organiser">Team</a>
                    <a href="#faqs">FAQs</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="mlh-flag" style={{ opacity: "0" }}>
                    <img
                        src="/images/navbar/mlh_flag.png"
                        alt="mlh hack the space"
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
