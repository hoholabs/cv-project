import React from 'react'

const EducationCard = (props) =>{

        return <div className = 'education-details'>
                <div className = 'school'>{props.school}</div>
                <div className = 'program'>{props.program}</div>
                <div className = 'dates'>{props.dates}</div>
        </div>
}

export default EducationCard