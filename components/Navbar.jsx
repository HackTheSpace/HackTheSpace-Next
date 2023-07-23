import Link from "next/link";
import React, {useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

     const handleScroll = (e) => {
        // first prevent the default behavior
         e.preventDefault();
         // get the href and remove everything before the hash (#)
         const href = e.currentTarget.href;
         const targetId = href.replace(/.*\#/, "");
         // get the element by id and use scrollIntoView
         const elem = document.getElementById(targetId);
         elem?.scrollIntoView({
           behavior: "smooth",
         });
       };
      

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
                    <Link href="#home" className="active" onClick={handleScroll}>
                        Home
                    </Link >
                    <Link href="#about" onClick={handleScroll}>About</Link >
                    {/* <!-- <Link href="#" >Tracks</Link > --> */}
                    <Link href="#schedule" onClick={handleScroll}>Schedule</Link >
                    <Link href="#sponsors" onClick={handleScroll}>Sponsors</Link >
                    <Link href="#organiser" onClick={handleScroll}>Team</Link >
                    <Link href="#faqs" onClick={handleScroll}>FAQs</Link >
                    <Link href="#contact" onClick={handleScroll}>Contact</Link >
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
                        <Link href="#home">
                            <img
                                src="/images/navbar/nav_logo.png"
                                alt="hack the space"
                            />
                        </Link >
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
                    <Link href="#home">
                        <img
                            src="/images/navbar/nav_logo.png"
                            alt="hack the space"
                        />
                    </Link >
                </div>
                <div className="links">
                    <Link href="#home" onClick={handleScroll}>Home</Link >
                    <Link href="#about" onClick={handleScroll}>About</Link >
                    {/* <!-- <Link href="#">Tracks</Link > --> */}
                    {/* <!-- <Link href="#">Prizes</Link > --> */}
                    <Link href="#schedule" onClick={handleScroll}>Schedule</Link >
                    <Link href="#sponsors" onClick={handleScroll}>Sponsors</Link >
                    <Link href="#organiser" onClick={handleScroll}>Team</Link >
                    <Link href="#faqs" onClick={handleScroll}>FAQs</Link >
                    <Link href="#contact" onClick={handleScroll}>Contact</Link >
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
