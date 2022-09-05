import React from 'react'

const EducationCard = (props) =>{

    if(props.editingCard){

        return  <form className = 'education-details'>
        <input 
            type = 'text'
            placeholder = 'school' 
            name = 'school'>
        </input>
        <input 
            type = 'text'   
            placeholder = 'program' 
            name = 'program'>
        </input>
        <input 
            type = 'text'   
            placeholder = 'dates' 
            name = 'dates'>
        </input>
    </form>

    }else{

        return <ul className = 'education-details'>
                <li className = 'school'>{props.school}</li>
                <li className = 'program'>{props.program}</li>
                <li className = 'dates'>{props.dates}</li>
        </ul>
    }
}

export default EducationCard