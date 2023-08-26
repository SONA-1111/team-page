import React from 'react'
import {teamData} from '../../data/teamData'

import './mentors.css'
const Mentors = () => {
  return (
    <div className="mentors-container" id='plans'>
        <div className="programs-header" style={{gap: "2rem"}}>
            <span className='stroke-text'>Our Teams</span>
            <span>Fully dedicated for future</span>
            <span className='stroke-text'> scientist</span>
        </div>
        <div className="programs-header" style={{gap: "2rem"}}>
            <span className='stroke-text'>Mentors</span>
            <span>&</span>
            <span className='stroke-text'> Advisor</span>
        </div>
        

        <div className="mentors_" >
            {teamData.map((team,i)=>(
                <div className="mentor" key={i}>
                    <div className='image'>
                    <img src={team.img} alt={team.name}/>
                       
                    </div>
                    
                    <span>{team.name}</span>
                    <span>{team.position}</span>
                    <div>                    
                        </div>
                        <button className='btn'>Contact</button>
                </div>
            ))}
        </div>
        <div className="programs-header" style={{gap: "2rem"}}>
    <span className='stroke-text'>Meet </span>
    <span>Your</span>
    <span className='stroke-text'> Mentors</span>
</div>
    </div>
  )
}

export default Mentors