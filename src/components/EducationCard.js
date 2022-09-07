import React from 'react'

const EducationCard = (props) =>{

        return <ul className = 'education-details'>
                <li className = 'school'>{props.school}</li>
                <li className = 'program'>{props.program}</li>
                <li className = 'dates'>{props.dates}</li>
        </ul>
    
}

export default EducationCard