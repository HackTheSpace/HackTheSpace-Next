import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Lottie from "react-lottie-player";
import ShootingStars from "../utils/ShootingStars.json";
import Telescope from "../utils/Telescope.json";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const handleClick = () => {
    router.push("/Team");
  };

  const handleScroll = (e) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    setOpen(false);
    //Y band krdega navbar navigation link click krne pr
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
      <div className="desktop-nav">
        <div className="logo shrink">
          <Link href="#home" onClick={handleScroll}>
            <img src="/images/navbar/nav_logo.png" alt="hack the space" />
          </Link>
        </div>

        <div className="nav-sponsor">
          <Link href="https://bit.ly/HTS-SU" target="https://bit.ly/HTS-SU">
            Sponsor Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
