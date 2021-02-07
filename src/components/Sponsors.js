import React from 'react';
import balsamiq from './../assets/past-sponsors/balsamiq.png'
import cloudsploit from './../assets/past-sponsors/cloudsploit.png'
import cmr from './../assets/past-sponsors/CMR.png'
import goel from './../assets/past-sponsors/GOEL.png'
import jetbrains from './../assets/past-sponsors/jetbrains.png'
import nkcc from './../assets/past-sponsors/NKCC.png'
import seaport from './../assets/past-sponsors/SEAPORT.png'
import sketch from './../assets/past-sponsors/sketch.png'
import bugsee from './../assets/past-sponsors/bugsee.png'

const Sponsors = React.forwardRef(({ setSponsors }, ref) => {
    return (
        <div className="sponsors" id="sponsors" ref={ref}>
            <div className="sponsors-title">Past Sponsors</div>
            <div className="sponsors-gallery">
               <div><img src={cloudsploit} alt="CloudSploit" /></div>
               <div><img src={cmr} alt="CMR" /></div>
               <div><img src={goel} alt="GOEL" /></div>
               <div><img src={jetbrains} alt="JetBrains" /></div>
               <div><img src={nkcc} alt="NKCC" /></div>
               <div><img src={seaport} alt="SEAPORT" /></div>
               <div><img src={sketch} alt="Sketch" /></div>
               <div><img src={balsamiq} alt="Balsamiq" /></div>
               <div><img src={bugsee} alt="BUGSEE" /></div>
            </div>
        </div>
    )
})

export default Sponsors;
