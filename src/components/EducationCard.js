import React, {Component} from 'react'

class EducationCard extends Component{
        constructor (props){
                super(props)
                this.state = {}
        }

        

        render(){

        return (
                !this.props.card.editingCard 

                ? 
                        <ul className = 'education-card'>
                        <li className = 'school'>{this.props.card.school}</li>
                        <li className = 'program'>{this.props.card.program}</li>
                        <li className = 'dates'>{this.props.card.dates}</li>
                        {this.props.editingSection && 
                        <button 
                                onClick = {() =>{this.props.toggleEdit(this.props.card.id)}} 
                                className = 'material-icon' >
                        edit
                        </button>}
                        </ul> 
                        
                : 
                        <form className = 'education-card'>
                                <input 
                                type = 'text'
                                placeholder = 'school' 
                                name = 'school' 
                                value={this.props.card.school}
                                onChange = {(event) => this.props.handleChange(event, this.props.card.id)}>
                                </input>

                                <input 
                                type = 'text'   
                                placeholder = 'program' 
                                name = 'program'
                                value={this.props.card.program}
                                onChange = {(event) => this.props.handleChange(event, this.props.card.id)}>
                                </input>

                                <input 
                                type = 'text'   
                                placeholder = 'dates' 
                                name = 'dates' 
                                value={this.props.card.dates}
                                onChange = {(event) => this.props.handleChange(event, this.props.card.id)}>
                                </input>

                                <button className = 'material-icon' 
                                        onClick = {() =>{this.props.toggleEdit(this.props.card.id)}} 
                                >check</button> 
                        </form>
                )
        }
}

export default EducationCard