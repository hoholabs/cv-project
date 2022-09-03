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
            }

        }
    }
    render (){


        return  <div id = 'education'>  
                    <h1>Education</h1>
                    <button id = 'add-education' className = 'add'>add</button> 
                    {this.state.cards.map((card) =>{
			            return   <EducationCard school={card.school} program={card.program} dates={card.dates} key={card.key}/>
                    })}
                </div>
        }
}

export default Education