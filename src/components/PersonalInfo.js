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
                        className = 'personal-item'
                        type = 'text'
                        value={this.state.address} 
                        name = 'address' 
                        onChange = {this.handleChange} 
                        placeholder = 'Address'
                        required>
                    </input>

                    <input 
                        className = 'personal-item'
                        type = 'tel'
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        value={this.state.phone} 
                        name = 'phone' 
                        onChange = {this.handleChange} 
                        placeholder = 'Phone number'>
                    </input>

                    <input 
                        className = 'personal-item'
                        type = 'email'
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        value={this.state.email} 
                        name = 'email' 
                        onChange = {this.handleChange} 
                        placeholder = 'E-mail'>
                    </input>

                    <button 
                        className = 'material-icon edit-btn'
                        onClick = {this.handleSubmit} 

                    >check
                    </button>
                    
                    <input 
                        className = 'personal-item'
                        id = 'name'
                        type = 'text'
                        value= {this.state.fullName} 
                        name = 'fullName' 
                        onChange = {this.handleChange} 
                        placeholder = 'Full Name'>
                    </input>

                </form> : 
            
                <div className = 'personal'>
                    <div></div>
                    <div className = 'personal-item' id = 'address'>{this.state.address}</div>
                    <div className = 'personal-item' id = 'phone'>{this.state.phone}</div>
                    <div className = 'personal-item' id = 'email'>{this.state.email}</div>
                    <button 
                        className = 'material-icon edit-btn'
                        onClick = {this.editSection}
                    >edit
                    </button>
                    <h1 className = 'personal-item' id = 'name'>{this.state.fullName}</h1>
                </div>}
        </section>
    }
}

export default PersonalInfo