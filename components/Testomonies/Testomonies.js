import React from 'react';
import SectionLayout from '../SectionLayout';
import { TestomoniesConfig } from '../../config/Testomonies';
import { TestomoniesConfig1 } from '../../config/Testomonies';
import Marquee from 'react-fast-marquee';

const Testomonies = () => {
  return (
    <div id="Testomonie"> 
      <div className="heading-container" style={{ marginTop: '50px',marginLeft:"60px" }}>
        <h1 className="title-shadow">Testomonies</h1>
        <h2 className="section-title">Testomonies</h2>
      </div>

        <Marquee speed={70} direction='right' pauseOnHover>
        <div className='Testomonies-main-div' style={{gap:'14rem',marginRight:'6rem'}}>
          {/* Map over testimonies */}
          {TestomoniesConfig.Details.map((item) => (
            <div key={item.id} className='Testomonies-section'>
              <p>{item.description}</p>
              <div className='Testomonies-Info'>
                <img src={item.icon} alt='testimony-image' style={{ width: '50px'}} />
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.about}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        </Marquee>
        <Marquee speed={70} style={{display:'flex'}} pauseOnHover>
        <div className='Testomonies-main-div' style={{gap:'4rem',marginRight:'12rem'}}>
          
          {TestomoniesConfig1.Details.map((item) => (
            // 
            <div key={item.id} className='Testomonies-section'>
              <p>{item.description}</p>
              <div className='Testomonies-Info'>
                <img src={item.icon} alt='testimony-image' style={{ width: '50px' }} />
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.about}</span>
                </div>
              </div>
            </div>
           
          ))}
        </div>
        </Marquee>
    </div>
    
  );
};

export default Testomonies;


