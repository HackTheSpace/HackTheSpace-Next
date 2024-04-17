import React from 'react';
import SectionLayout from '../SectionLayout';
import { TestomoniesConfig } from '../../config/Testomonies';
import { TestomoniesConfig1 } from '../../config/Testomonies';
import Marquee from 'react-fast-marquee';

const Testomonies = () => {
  return (
    <SectionLayout Title={'TESTOMONIE'}  id={'Testomonie'}>


        <Marquee speed={70} direction='right' pauseOnHover className='Marquee'>
        <div className='Testomonies-main-div' style={{}}>
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
        <div className='Testomonies-main-div' style={{}}>
          
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
    {/* </div> */}
    </SectionLayout>
    
  );
};

export default Testomonies;


