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

                id: new Date().getTime(),
                editingCard: false
            },
            editingSection: false,
            buttonLabel: 'edit',
        }

        this.editSection = this.editSection.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.removeCard = this.removeCard.bind(this);
    }

    editSection = () =>{
        
        this.setState({
            editingSection:!this.state.editingSection,
            buttonLabel: this.state.buttonLabel === 'edit' ? 'check' : 'edit'
        })
    }

    toggleEdit= (id)=>{
        console.log(id);
        const newCards = this.state.cards.map(card=>{
            if(card.id === id){
                return {...card, editingCard : !card.editingCard}
            }else{
                return card
            }
        })

        this.setState({
            cards : newCards
        })

    }

    handleChange = (event, id) =>{
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log(id);

        let newCards = [];

        if(id === undefined){
            this.setState({
                card:{
                    ...this.state.card,
                    [name]: value,
                    key:new Date().getTime(),
                }
            })
        }else{

            newCards = this.state.cards.map(card=>{
                if(card.id === id){
                    return {...card, [name]:value}
                }else{
                    return card
                }
            })

            this.setState({
                cards:newCards
            })
        }
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
                id: new Date().getTime(),
                editingCard: false,
            }
        }))
    }

    removeCard = (event, id) =>{
        event.preventDefault()
        
        const index = this.state.cards.findIndex((card)=>card.id === id)
        let newCards = this.state.cards
        newCards.pop(index);

        this.setState({
            cards:newCards
        })
    }

    render (){

        return  <section id = 'education'>  
                    <h1>Education</h1>
                    <button 
                        className = 'material-icon' 
                        onClick = {this.editSection}
                        style={{backgroundColor: "green"}}
                    >{this.state.buttonLabel}
                    </button> 

                    {/* returns all of the education cards, using the state cards */}
                    {this.state.cards.map((eachCard) =>{
			            return  <EducationCard 
                                        card = {eachCard} 
                                        key = {eachCard.id}
                                        editingSection = {this.state.editingSection}
                                        toggleEdit = {this.toggleEdit}
                                        handleChange = {this.handleChange}
                                        handleSubmit = {this.handleSubmit}
                                        removeCard = {this.removeCard}
                                    />
                            
                        })}

                    {/* this shows 'new card' when the section is in edit mode */}
                    {this.state.editingSection && (

                            <form className = 'education-card'>
                                <div></div>
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