import React from 'react';

class PersonalInfo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            address: '',
            phone: '',
            email: '',
            fullName: '',
            editing: true
        }

        this.editSection = this.editSection.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    editSection = () =>{

        this.setState({
            editing: true
        })
    }

    handleChange = (event) =>{
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name] : value
        })

        console.log(name)

    }

    handleSubmit = (e) =>{
        e.preventDefault();

        this.setState({
            editing: false
        })
    }

    render(){
        return  <section>
            {this.state.editing ? 
            
                <form className = 'personal'>
                    <div></div>
                    <input 
                        type = 'text'
                        value={this.state.address} 
                        name = 'address' 
                        onChange = {this.handleChange} 
                        placeholder = 'address'>
                    </input>

                    <input 
                        type = 'text'
                        value={this.state.phone} 
                        name = 'phone' 
                        onChange = {this.handleChange} 
                        placeholder = 'phone'>
                    </input>

                    <input 
                        type = 'text'
                        value={this.state.email} 
                        name = 'email' 
                        onChange = {this.handleChange} 
                        placeholder = 'email'>
                    </input>

                    <button className = 'material-icon' onClick = {this.handleSubmit} >check</button>
                    
                    <input 
                        id = 'name'
                        type = 'text'
                        value= {this.state.fullName} 
                        name = 'fullName' 
                        onChange = {this.handleChange} 
                        placeholder = 'fullName'>
                    </input>

                </form> : 
            
                <div className = 'personal'>
                    <div></div>
                    <div id = 'address'>{this.state.address}</div>
                    <div id = 'phone'>{this.state.phone}</div>
                    <div id = 'email'>{this.state.email}</div>
                    <button className = 'material-icon' onClick = {this.editSection} >edit</button>
                    <h1 id = 'name'>{this.state.fullName}</h1>
                </div>}
        </section>
    }
}

export default PersonalInfo