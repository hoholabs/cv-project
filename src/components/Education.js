import React, {Component} from 'react'
import EducationCard from './EducationCard'

class Education extends Component{
    constructor(props){
        super(props)
        this.state = {
            cards:[{
                school:'',
                program:'',
                dates:'',
                key:new Date().getTime(),
                id: new Date().getTime(),
                editingCard: true,
            }],
            card:{
                school: '',
                program: '',
                dates: '',

                id: new Date().getTime(),
                editingCard: false
            },
            editingSection: true,
            buttonLabel: 'check',
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

        let newCards = [];

        if(id === undefined){
            this.setState({
                card:{
                    ...this.state.card,
                    [name]: value,
                    id:new Date().getTime(),
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

    addCard = () =>{
        let newCard = {
            school : '',
            program : '',
            dates : '',
            editingCard: true,
            id: new Date().getTime()+1,
        }

        this.setState({
            cards: [...this.state.cards, newCard]
        })

    }

    render (){

        return  <section id = 'education'>  
                    <h1>Education</h1>
                    <button 
                        className = 'material-icon edit-btn'
                        onClick = {this.editSection}
                        
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

export default Education