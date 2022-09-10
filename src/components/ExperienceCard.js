import React, {Component} from 'react'

class ExperienceCard extends Component{
        constructor (props){
                super(props)
                this.state = {}
        }

        render(){

        return (
                !this.props.card.editingCard || this.props.editingSection === false

                ? 
                        <ul className = 'experience-card'>
                                <li></li>
                                <li className = 'title'>{this.props.card.title}</li>
                                <li className = 'company'>{this.props.card.company}</li>
                                <li className = 'dates'>{this.props.card.dates}</li>
                                {this.props.editingSection && 
                                <button 
                                        onClick = {() =>{this.props.toggleEdit(this.props.card.id)}} 
                                        className = 'material-icon edit-btn'
                                        >edit
                                </button>}
                                <li className= 'description'>{this.props.card.description}</li>
                        </ul> 
                        
                : 
                        <form className = 'experience-card'>
                                <button 
                                        className = 'material-icon' 
                                        onClick = {(event)=>{this.props.removeCard(event, this.props.card.id)}} 
                                        style={{backgroundColor: "red"}}
                                        >delete
                                </button>
                                <input 
                                type = 'text'
                                placeholder = 'title' 
                                name = 'title' 
                                value={this.props.card.title}
                                onChange = {(event) => this.props.handleChange(event, this.props.card.id)}>
                                </input>

                                <input 
                                type = 'text'   
                                placeholder = 'company' 
                                name = 'company'
                                value={this.props.card.company}
                                onChange = {(event) => this.props.handleChange(event, this.props.card.id)}>
                                </input>

                                <input 
                                type = 'text'   
                                placeholder = 'dates' 
                                name = 'dates' 
                                value={this.props.card.dates}
                                onChange = {(event) => this.props.handleChange(event, this.props.card.id)}>
                                </input>
                                <button 
                                        className = 'material-icon edit-btn'
                                        onClick = {() =>{this.props.toggleEdit(this.props.card.id)}}

                                >check
                                </button>
                                <input 
                                className = 'description'
                                type = 'textarea'   
                                placeholder = 'description' 
                                name = 'description' 
                                value={this.props.card.description}
                                onChange = {(event) => this.props.handleChange(event, this.props.card.id)}>
                                </input>

                        </form>
                )
        }
}

export default ExperienceCard