import React from 'react';
import { teamConfig } from "../../config/Team";
import ThreeScene from "../ThreeScene";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import navIcon1 from '../../public/images/twitter.svg';

const Team = () => {
  const { TeamMembers } = teamConfig;

  return (
    <div className='Go-Back' style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      

    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2 className="section-title">SEASON 1 TEAM</h2>

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', padding: '0 70px' }} id='Team' className='Team'>
        {TeamMembers.map((member, index) => (
          <div className="box" key={index} style={{ marginBottom: '45px' }}>
            <div className="imgBx">
              <div className="img">
                <img src={member.logo} alt={member.memberName} className='Team_img' />
              </div>
              <div className="names">
                <h1>{member.memberName}</h1>
                <p style={{ color: '#b741dd', fontWeight: '500' }}>{member.teamName}</p>
              </div>
              <div className="icons">
                <div className="icon">
                  {/* <FontAwesomeIcon icon={faTwitter} /> */}
                  <a href={member.link.twitter}><img src="/images/twitter.svg" alt="Twitter" /></a>
                </div>
                <div className="icon">
                <a href={member.link.Linkedin}><img src="/images/linkedin.svg" alt="Linkedin" /></a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    </div>
  );
}

export default Team;
