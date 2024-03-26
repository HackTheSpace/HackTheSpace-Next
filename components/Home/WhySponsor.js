import SectionLayout from "../SectionLayout";

import Image from "next/image";

const WhySponsor = () => {
  return (
    <SectionLayout Title="WHY SPONSOR US?" Classname={"why-sponsor-section"}>
      <div className="container">
        <div className="card">
          <div className="card-title">
            <svg
              className="ionicon icon zinc-bg"
              style={{ transform: "rotate(-25deg)" }}
              name="megaphone-outline"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M407.94 52.22S321.3 160 240 160H80a16 16 0 00-16 16v96a16 16 0 0016 16h160c81.3 0 167.94 108.23 167.94 108.23 6.06 8 24.06 2.52 24.06-9.83V62c0-12.31-17-18.82-24.06-9.78zM64 256s-16-6-16-32 16-32 16-32M448 246s16-4.33 16-22-16-22-16-22M256 160v128M112 160v128"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              />
              <path
                d="M144 288v168a8 8 0 008 8h53a16 16 0 0015.29-20.73C211.91 416.39 192 386.08 192 336h16a16 16 0 0016-16v-16a16 16 0 00-16-16h-16"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              />
            </svg>

            <h2>Promotion</h2>
          </div>
          <p>
            Sponsoring events promotes your brand. Higher sponsorship packages
            offer more exposure. This creates a positive perception of your
            company.
          </p>
        </div>

        <div className="card">
          <div className="card-title">
            <svg
              name="people-outline"
              className="ionicon icon zinc-bg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              />
              <path
                d="M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              />
              <path
                d="M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              />
              <path
                d="M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              />
            </svg>
            <h2>Recruitment</h2>
          </div>
          <p>
            Sponsor HackTheSpace, connect with potential employees. Meet bright
            minds from the region, interview potential candidates. Build your
            team with HackTheSpace sponsorship.
          </p>
        </div>

        <div className="card">
          <div className="card-title">
            <svg
              name="albums-outline"
              className="ionicon icon zinc-bg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <rect
                x="64"
                y="176"
                width="384"
                height="256"
                rx="28.87"
                ry="28.87"
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="32"
              />
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="32"
                d="M144 80h224M112 128h288"
              />
            </svg>

            <h2>New Technology</h2>
          </div>
          <p>
            Use hackathons to test new technologies and incentivize students.
            Create challenges aligned with your technology to promote it to a
            wider audience. Drive future industries with HackTheSpace.
          </p>
        </div>

        <div className="card">
          <div className="card-title">
            <svg
              className="ionicon icon zinc-bg"
              name="flash-outline"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M315.27 33L96 304h128l-31.51 173.23a2.36 2.36 0 002.33 2.77h0a2.36 2.36 0 001.89-.95L416 208H288l31.66-173.25a2.45 2.45 0 00-2.44-2.75h0a2.42 2.42 0 00-1.95 1z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              />
            </svg>
            <h2>Inspiration</h2>
          </div>
          <p>
            Hackathons bring fresh ideas to challenging problems. Inspire both
            participants and your team by tackling problems in your field.
            Exchange of ideas can lead to innovative solutions at HackTheSpace.
          </p>
        </div>
      </div>

      <div className="btn-container">
        <button type="button" className="Btn zinc-bg">
          <a href="https://bit.ly/HTS-SU" target="https://bit.ly/HTS-SU">
            <div className="gradient-mask black-bg"></div>
            <svg
              name="planet-outline"
              className="icon ionicon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M413.48 284.46c58.87 47.24 91.61 89 80.31 108.55-17.85 30.85-138.78-5.48-270.1-81.15S.37 149.84 18.21 119c11.16-19.28 62.58-12.32 131.64 14.09"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="32"
              />
              <circle
                cx="256"
                cy="256"
                r="160"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="32"
              />
            </svg>
            <span className="text"> Sponsor Us </span>
          </a>
        </button>
        {/* <button type="button" className="Btn zinc-bg">
          <a href="#">
            <div className="gradient-mask blue-bg"></div>
            <svg
              name="arrow-down-circle-outline"
              xmlns="http://www.w3.org/2000/svg"
              className="ionicon icon"
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M176 262.62L256 342l80-79.38M256 330.97V170"
              />
              <path
                d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="32"
              />
            </svg>

            <span className="text">Brochure</span>
          </a>
        </button> */}
      </div>

      <div className="aconst3">
        <Image
          src="/images/aconst3.svg"
          alt="hack the space const"
          className="opaque8"
          width={300}
          height={300}
        />
      </div>
      <div className="aconst4">
        <Image
          src="/images/aconst4.svg"
          alt="hack the space const"
          className="opaque8"
          width={300}
          height={300}
        />
      </div>
      <div className="aconst5">
        <Image
          src="/images/aconst5.svg"
          alt="hack the space const"
          className="opaque8"
          width={300}
          height={300}
        />
      </div>
    </SectionLayout>
  );
};

export default WhySponsor;
