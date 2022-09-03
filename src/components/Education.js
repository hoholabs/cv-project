import React, {Component} from 'react'
import EducationCard from './EducationCard'


class Education extends Component{
    constructor(){
        super()
        this.state = {
            cards:[],
            card:{
                school: '',
                program: '',
                dates: '',
                key: '',
            },
            editing: false,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
        console.log(this.state.cards);
        this.setState(prevState =>({
            cards:[...prevState.cards, this.state.card],
            card:{
                school:'',
                program:'',
                dates:'',
                key:new Date().getTime(),
            }
        }))
        console.log(this.state.card);
    }

    render (){

        return  <section id = 'education'>  
                    <h1>Education</h1>
                    <button className = 'material-icon'>edit</button> 

                    {/* returns all of the education cards, using the state cards */}
                    {this.state.cards.map((card) =>{
			            return  <div key = {card.key+'-container'} className = 'education-card'>    
                                    <EducationCard school={card.school} program={card.program} dates={card.dates} key = {card.key}/>
                                    <button className = 'material-icon' key = {card.key+'-button'}>edit</button> 
                                </div>
                    })}
                    <div className = 'education-card'>
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
                </section>
        }
}

export default Education