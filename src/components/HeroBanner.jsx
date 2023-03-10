import React from 'react'

export default function HeroBanner() {
    const handleNavItemClick = id => {
        const target = document.getElementById(id);
        target.scrollIntoView({ behavior: 'smooth' });
    };
  return (
    <section id='banner'>
        <div className='versatile-container'>
            <div className='left-side'>
                <div id='title'>
                <h1 id='title-1'>Welcome to</h1> 
                <h1 id='title-2'>Create I.T 2023</h1>
                </div>
                <p id='intro-text'>Create I.T an event that handles the art of creative coding through a series of workshops about the main categories of this art and an opportunity for Art Code enthusiasts to compete in</p>
                <div id='event-btn'>
                    <button id='btn-join'>Join Us</button>
                    <button id='btn-info' onClick={e => {e.preventDefault(); handleNavItemClick("description");}}>Learn More</button>
                    <img src="/Arrow 1.svg" alt="" id='desc-arrow' />
                </div>
                
            </div>
            <div className='right-side'>
                <img src="/Group 21.svg" alt="" />
            </div>
        </div>
    </section>
  )
}
