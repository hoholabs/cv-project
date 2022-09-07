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

        this.editEducation = this.editEducation.bind(this);
        this.editCard = this.editCard.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    editEducation = () =>{
        
        this.setState({
            editingSection:!this.state.editingSection,
            buttonLabel: this.state.buttonLabel === 'edit' ? 'check' : 'edit'
        })
    }

    editCard = (event, key) =>{

        const cards = this.state.cards;
        const index = cards.findIndex(card => {
            return card.key === key;
          });
        const card = cards[index];

        if(card.editingCard === true){
            card.editingCard = false;
        }else{
            card.editingCard = true
        }

        cards[index]=card;

        if(event.target.textContent === 'edit'){
            event.target.textContent = 'check'
        }else{
            event.target.textContent = 'edit'
        }

        this.setState({
            cards
        });

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
                    <button className = 'material-icon' onClick = {this.editEducation}>{this.state.buttonLabel}</button> 

                    {/* returns all of the education cards, using the state cards */}
                    {this.state.cards.map((card) =>{
			            return  <div key = {card.key+'-container'} className = 'education-card'>
                                    
                                    {!card.editing &&
                                    <EducationCard 
                                        school={card.school} 
                                        program={card.program} 
                                        dates={card.dates} 
                                        key={card.key} 
                                        editingCard = {card.editingCard}/>
                                    }

                                    {card.editing &&
                                        <form className = 'education-details'>
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
                                    </form>
                                    }

                                    {/* edit button */}
                                    {this.state.editingSection && (
                                        <button 
                                        onClick = {event => this.editCard(event, card.key)} 
                                        className = 'material-icon' 
                                        key = {card.key+'-button'}
                                        >edit</button>)}
                                </div>
                    })}
                    {this.state.editingSection && (
                        <div id = 'new-education-card' className = 'education-card'>
                            <form className = 'education-details'>
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
                            </form>
                            <button className = 'material-icon' onClick = {this.handleSubmit}>add_circle</button> 
                        </div>
                    )}
                </section>
        }
}

export default Education