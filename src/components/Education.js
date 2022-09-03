import React, {Component} from 'react'
import EducationCard from './EducationCard'

class Education extends Component{
    constructor(){
        super()
        this.state = {
            cards:{

            },
            card:{
                school:'test school',
                program:'program',
                dates:'dates',
            }

        }
    }
    render (){

        // const displayCards = this.state.cards.map((card) => {
		// 	return <educationCard school={card.school} program={card.program} dates={card.dates}/>
		// })

        return  <div id = 'education'>  
                    <h1>Education</h1>
                    {/* {displayCards} */}
                    <EducationCard school={this.state.card.school} program={this.state.card.program} dates={this.state.card.dates}/>


                    {/* <div className = 'school'>school</div>
                    <div className = 'program'>program</div>
                    <div className = 'education-date'>date</div>
                    <button id = 'edit-education' className = 'edit'>edit</button> */}

                </div>
        }
}

export default Education