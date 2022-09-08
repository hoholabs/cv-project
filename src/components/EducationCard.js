import React from 'react'

const EducationCard = (props) =>{

        return (
        !props.card.editingCard ? 
                <ul className = 'education-card'>
                <li className = 'school'>{props.card.school}</li>
                <li className = 'program'>{props.card.program}</li>
                <li className = 'dates'>{props.card.dates}</li>
                {props.editingSection && 
                <button 
                        onClick = {() =>{props.editCard(props.card.key)}} 
                        className = 'material-icon' >
                edit
                </button>}
                </ul> : 
                
                <form className = 'education-card'>
                        <input 
                        type = 'text'
                        placeholder = 'school' 
                        name = 'school' 
                        // value={props.card.school}
                        onChange = {props.handleChange}>
                        </input>

                        <input 
                        type = 'text'   
                        placeholder = 'program' 
                        name = 'program'
                        // value={props.card.program}
                        onChange = {props.handleChange}>
                        </input>

                        <input 
                        type = 'text'   
                        placeholder = 'dates' 
                        name = 'dates' 
                        // value={props.card.dates}
                        onChange = {props.handleChange}>
                        </input>

                        <button className = 'material-icon' 
                                onClick={props.handleSubmit}
                        >check</button> 
                </form>
        )
    
}

export default EducationCard