import SectionLayout from "../SectionLayout";
import Image from "next/image";

const Venue = () => {
  return (
    <SectionLayout
      id="venue"
      Title="DESTINATION"
      Classname={"venue-section-container"}
    >
      <div className="venue-section">
        <div className="venue-wrapper">
          <div className="venue">
            <h2>Venue</h2>
            <p>
              Shri Shankaracharya Technical Campus, Bhilai
              <br />
              Chhattisgarh
            </p>
          </div>
          <div className="date">
            <h2>Date and Time</h2>
            <p>
              8 - 9 September 2023
              <br />
              10 AM Onwards
            </p>
          </div>
          <div className="extra-info">
            <h2>Extra information</h2>
            <p>
              This is where innovation meets inspiration! Idea convert into
              Impact! A 4 - time hackathon venue with ample space and high speed
              internet connectivity, will unleash your inner hacker to build
              something “space” - breaking.🚀
            </p>
          </div>
        </div>
        <div className="divider"></div>

        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14877.578089888093!2d81.3077697!3d21.2161986!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293d0fd98b5f0f%3A0xf5808c843a7ce7e2!2sSSTC!5e0!3m2!1sen!2sin!4v1683534612631!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="aconst6">
        <Image
          src="/images/aconst6.svg"
          alt="hack the space const"
          className="opaque8"
          width={300}
          height={300}
        />
      </div>
    </SectionLayout>
  );
};

export default Venue;
