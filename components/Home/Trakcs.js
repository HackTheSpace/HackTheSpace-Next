import SectionLayout from "../SectionLayout";

import Image from "next/image";


const cardStyle={justifyContent:"center",padding:"20px",width:"250px",height:"200px"}
const headingStyle={fontSize:"1.5rem",marginBottom:"10px",position:"absolute",bottom:"5px"}


const Trakcs = () => {
  return (
    <SectionLayout Title="TRACKS" Classname={"why-sponsor-section"}>
      {/* <h4>loremispemloremispemloremispemloremispemloremispemloremispemloremispem</h4> */}
      <div className=" tracks-container">
        
        <div className="tracks-card" style={cardStyle}>
          <div className="card-title centered-content">
            <div className="centered-icon"  style={{margin:"30px 0"}}>
              <Image
                src="/images/astrohealth.png"
                alt="Hack the space Hackathon Constellation"
                priority={true}
                sizes="100%"
                width={150}
                height={150}
              />
            </div>
            <h2 style={headingStyle}>Healthcare</h2>
          </div>
        </div>


        <div className="tracks-card" style={cardStyle}>
          <div className="card-title" >
          <div className="centered-icon"  style={{margin:"30px 0"}}>
              <Image
                src="/images/astrogiri_transparent.png"
                alt="Hack the space Hackathon Constellation"
                priority={true}
                sizes="100%"
                width={150}
                height={150}
              />
            </div>
            <h2 style={headingStyle}>Agriculture</h2>
          </div>
          {/* <p>
            Sponsor HackTheSpace, connect with potential employees. Meet bright
            minds from the region, interview potential candidates. Build your
            team with HackTheSpace sponsorship.
          </p> */}
        </div>

        <div className="tracks-card" style={cardStyle}>
          <div className="card-title">
          <div className="centered-icon"  style={{margin:"30px 0"}}>
              <Image
                src="/images/astrotech_nobg.png"
                alt="Hack the space Hackathon Constellation"
                priority={true}
                sizes="100%"
                width={150}
                height={150}
              />
            </div>

            <h2 style={headingStyle}>Technology</h2>
          </div>
          {/* <p>
            Use hackathons to test new technologies and incentivize students.
            Create challenges aligned with your technology to promote it to a
            wider audience. Drive future industries with HackTheSpace.
          </p> */}
        </div>

        <div className="tracks-card" style={cardStyle}>
          <div className="card-title">
          <div className="centered-icon"  style={{margin:"30px 0"}}>
              <Image
                src="/images/astroaiml.png"
                alt="Hack the space Hackathon Constellation"
                priority={true}
                sizes="100%"
                width={200}
                height={180}
              />
            </div>
            <h2 style={{fontSize:"1.5rem",marginBottom:"10px",position:"absolute",bottom:"5px",left:"100px"}}>AI/ML</h2>
          </div>
          {/* <p>
            Hackathons bring fresh ideas to challenging problems. Inspire both
            participants and your team by tackling problems in your field.
            Exchange of ideas can lead to innovative solutions at HackTheSpace.
          </p> */}
        </div>
        <div className="tracks-card" style={cardStyle}>
          <div className="card-title">
          <div className="centered-icon"  style={{margin:"0px 0",color:"#fff"}}>
              <Image
                src="/images/astroweb3.png"
                alt="Hack the space Hackathon Constellation"
                priority={true}
                sizes="100%"
                width={190}
                height={210}
              />
            </div>
            <h2 style={{fontSize:"1.5rem",marginBottom:"10px",position:"absolute",bottom:"5px",left:"100px"}}>Web3</h2>
          </div>
          {/* <p>
            Hackathons bring fresh ideas to challenging problems. Inspire both
            participants and your team by tackling problems in your field.
            Exchange of ideas can lead to innovative solutions at HackTheSpace.
          </p> */}
        </div>
        <div className="tracks-card" style={cardStyle}>
          <div className="card-title">
          <div className="centered-icon"  style={{margin:"30px 0"}}>
              <Image
                src="/images/astroopen.png"
                alt="Hack the space Hackathon Constellation"
                priority={true}
                sizes="100%"
                width={200}
                height={180}
              />
            </div>
            <h2 style={{fontSize:"1.5rem",position:"absolute",bottom:"15px",left:"30px"}}>Open Innovation</h2>
          </div>
          {/* <p>
            Hackathons bring fresh ideas to challenging problems. Inspire both
            participants and your team by tackling problems in your field.
            Exchange of ideas can lead to innovative solutions at HackTheSpace.
          </p> */}
        </div>
      </div>

    </SectionLayout>
  );
};

export default Trakcs;
