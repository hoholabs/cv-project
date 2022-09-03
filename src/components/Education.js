import React, {Component} from 'react'
import EducationCard from './EducationCard'


class Education extends Component{
    constructor(){
        super()
        this.state = {
            cards:[
                {
                school:'test school',
                program:'map program',
                dates:'dates',
                key:1,
                },
                {
                    school:'test school',
                    program:'map program',
                    dates:'dates2',
                    key:2,
                    }

            ],
            card:{
                school:'school',
                program:'program',
                dates:'dates',
                key:new Date().getTime(),
            },
            editing: false,

        }
    }
    render (){

        return  <section id = 'education'>  
                    <h1>Education</h1>
                    <button className = 'material-icon'>edit</button> 

                    {/* returns all of the education cards, using the state cards */}
                    {this.state.cards.map((card) =>{
			            return  <div className = 'education-card'>    
                                    <EducationCard school={card.school} program={card.program} dates={card.dates} key={card.key}/>
                                    <button className = 'material-icon'>edit</button> 
                                </div>
                    })}
                    <div className = 'education-card'>
                        <form className = 'education-details'>
                            <input placeholder = 'school'></input>
                            <input placeholder = 'program'></input>
                            <input placeholder = 'dates'></input>
                        </form>
                        <button className = 'material-icon'>add_circle</button> 
                    </div>
                </section>
        }
}

export default Education