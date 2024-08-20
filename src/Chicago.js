import React from 'react';
import './styles.css';

function Chicago() {
  return (
    <section className="about">
      <div className="about-frame">
        <div className="about-text">
        <h2>Little Lemon</h2>
        <p>Chicago</p>
        <p>Amet minim mollit non deserunt<br />
         ullamco est sit aliqua dolor do <br />
         amet sint. Velit officia consequat<br />
         duis enim velit mollit. Exercitation<br />
         veniam consequat sunt nostrud amet.
         <br />
          Amet minim mollit non deserunt<br />
          ullamco est sit aliqua dolor do amet<br />
          sint. Velit officia consequat duis<br />
           enim velit mollit.</p>
        </div>
        <div className="about-photos">
          <div className='img1'>
            <img className='A' src="/images/MarioandAdrianA.png" alt="Mario and Adrian A"/>
          </div>
          <div className='img2'>
            <img className='B' src="/images/MarioandAdrianB.png" alt="Mario and Adrian B"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chicago;
