import React from 'react'

const EducationCard = (props) =>{

        return <div className = 'education-card'>
                <div className = 'school'>{props.school}</div>
                <div className = 'program'>{props.program}</div>
                <div className = 'dates'>{props.dates}</div>
                <button id = 'edit-education' className = 'edit'>edit</button>
        </div>

}

export default EducationCard