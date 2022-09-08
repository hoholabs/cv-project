import React, {Component} from 'react'
import EducationCard from './EducationCard'

class Education extends Component{
    constructor(props){
        super(props)
        this.state = {
            cards:[],
            card:{
                school: '',
                program: '',
                dates: '',
                key: new Date().getTime(),
                editingCard: false
            },
            editingSection: false,
            buttonLabel: 'edit',
        }

        this.editSection = this.editSection.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    editSection = () =>{
        
        this.setState({
            editingSection:!this.state.editingSection,
            buttonLabel: this.state.buttonLabel === 'edit' ? 'check' : 'edit'
        })
    }

    handleChange = (event) =>{

        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            card:{
                ...this.state.card,
                [name]: value,
                key:new Date().getTime(),
            }
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault();

        this.setState(prevState =>({

            cards:[...prevState.cards, this.state.card],
            card:{
                school:'',
                program:'',
                dates:'',
                key:new Date().getTime(),
                editingCard: false,
            }
        }))
    }

    render (){

        return  <section id = 'education'>  
                    <h1>Education</h1>
                    <button className = 'material-icon' onClick = {this.editSection}>{this.state.buttonLabel}</button> 

                    {/* returns all of the education cards, using the state cards */}
                    {this.state.cards.map((card) =>{
			            return  <EducationCard card = {card} key={card.key}
                                        editingSection = {this.state.editingSection}
                                        handleChange = {this.handleChange}
                                        handleSubmit = {this.handleSubmit}
                                    />
                            
                        })}

                    {/* <EducationCard card = {this.state.card} key = {this.state.card.key}/> */}

                    {/* this shows 'new card' when the section is in edit mode */}
                    {this.state.editingSection && (

                            <form className = 'education-card'>
                                <input 
                                    type = 'text'
                                    placeholder = 'school' 
                                    name = 'school' 
                                    value={this.state.card.school}
                                    onChange = {this.handleChange}>
                                </input>
                                <input 
                                    type = 'text'   
                                    placeholder = 'program' 
                                    name = 'program'
                                    value={this.state.card.program}
                                    onChange = {this.handleChange}>
                                </input>
                                <input 
                                    type = 'text'   
                                    placeholder = 'dates' 
                                    name = 'dates' 
                                    value={this.state.card.dates}
                                    onChange = {this.handleChange}>
                                </input>
                                 <button className = 'material-icon' onClick = {this.handleSubmit}>add_circle</button> 
                            </form>
                    )}
                </section>
        }
}

export default Education