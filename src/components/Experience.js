import React from 'react'
import {Component} from 'react'
import ExperienceCard from './ExperienceCard'

class Experience extends Component{
    constructor(props){
        super(props)

        this.state = {
            cards : [{
                title : '',
                company : '',
                dates : '',
                description: '',
                editingCard: true,
                id: new Date().getTime()+1,
            }],
            editingSection : true,
            buttonLabel : 'check',
        }

        this.editSection = this.editSection.bind(this);
        this.addCard = this.addCard.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.removeCard = this.removeCard.bind(this);
    }

    editSection = () => {
        let currentSetting = this.state.editingSection;

        this.setState({
            editingSection: !currentSetting,
            buttonLabel : this.state.buttonLabel === 'check'? 'edit' : 'check'
        })
    }

    handleChange = (event, id) => {

        const target = event.target;
        const value = target.value;
        const name = target.name;

        let newCards = this.state.cards.map(card=>{
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

    addCard = () =>{
        let newCard = {
            title : '',
            company : '',
            dates : '',
            description: '',
            editingCard: true,
            id: new Date().getTime()+1,
        }

        this.setState({
            cards: [...this.state.cards, newCard]
        })

    }

    toggleEdit = (id) =>{

        const newCards = this.state.cards.map((card=>{
            if(card.id ===id){
                return {...card, editingCard : !card.editingCard}
            }else{
                return card
            }
        }))

        this.setState({
            cards: newCards
        })

    }

    removeCard = (event, id) =>{
        event.preventDefault();
        const newCards = this.state.cards;

        let index = newCards.findIndex((card)=>{
            if(card.id === id){
                return true;
            }else{
                return false
            }
        })

        newCards.pop(index)

        this.setState({
            cards: newCards
        })

    }

    render(){
        return  <section id = 'experience'>
                    <h1>Experience</h1>
                    <button 
                        className = 'material-icon edit-btn'
                        onClick = {this.editSection}

                    >{this.state.buttonLabel}
                    </button> 


                    {this.state.cards.map((card) =>{
                        return <ExperienceCard
                            card = {card}
                            key = {card.id}
                            editingSection = {this.state.editingSection}
                            handleChange ={this.handleChange}
                            toggleEdit = {this.toggleEdit}
                            removeCard = {this.removeCard}
                        />
                    })}
                    {this.state.editingSection &&
                        <button 
                            className = 'material-icon edit-btn' 
                            onClick = {this.addCard}
                        >add_circle
                        </button>
                    }
                    

                </section>
    }
}
export default Experience