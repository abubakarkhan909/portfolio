import React from 'react'

function SkillCard({ icon, title, description }) {
  return (
    <div className="skill-card">
        <div  className='media-object media-left'>
            <div className='icon'>
                {icon}
            </div>
        </div>
        <div className='media-body'> 
            <h3 className="skill-title">{title}</h3>
            <p className="skill-description">{description}</p>
        </div>
    </div>
  )
}

export default SkillCard