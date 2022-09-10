import React from 'react'
import {Component} from 'react'

class Experience extends Component{
    constructor(props){
        super(props)

        this.state = {
            cards : [],
            card : {
                title : 'title',
                company : 'company',
                dates : 'dates',
                desc: 'description',
                key: new Date().getTime(),
            },
            editingSection : false,
            buttonLabel : 'edit',
        }

        this.editSection = this.editSection.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    editSection = () => {
        console.log('editing section')

        this.setState({
            editingSection: true,
        })
    }

    handleChange = () => {

    }

    handleSubmit = () =>{

    }

    render(){
        return  <section id = 'experience'>
                    <h1>Experience</h1>
                    <button 
                        className = 'material-icon' 
                        onClick = {this.editSection}
                        style={{backgroundColor: "green"}}
                    >{this.state.buttonLabel}
                    </button> 

                    {this.state.cards.map((card) =>{
                        return this.state.editingSection ? 
                        <form></form> :
                        <div></div>
                    })}

                    {this.state.editingSection &&
                    <form className = 'experience-card'>

                        <input className = 'job-title' placeholder = 'Title'></input>
                        <input className = 'company' placeholder = 'Company'></input>
                        <input className = 'work-date' placeholder = 'Dates'></input>

                        <button className = 'material-icon' onClick = {this.handleSubmit}>add_circle</button> 
                        
                        <input className = 'description' placeholder = 'Description'></input>
                    </form>
                    }

                </section>
    }
}
export default Experience