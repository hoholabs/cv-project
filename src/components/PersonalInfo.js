import React, {useState, useEffect} from 'react'

const initialPersonal = {
    address: '',
    phone: '',
    email: '',
    fullName: '',
}

function PersonalInfo(props){

    const [personal, setPersonal] = useState(initialPersonal)
    const {address, phone, email, fullName } = personal;
    const [editing, setEditing] = useState(true)

    useEffect(()=>{

    },[editing]);

    function handleChange(event){
        let name = event.target.name;
        let value = event.target.value;

        setPersonal(()=>{
            return{
                ...personal,
                [name]:value
            };
        });

    }

    function toggleEdit(event){
        
        event.preventDefault();
        
        if(editing === true){
            setEditing(false)
        }else{
            setEditing(true)
        }

        console.log('clicked');
    }

        return  <section>
            {editing ? 
            
                <form className = 'personal'>
                    <div></div>
                    <input 
                        className = 'personal-item'
                        type = 'text'
                        name = 'address'
                        value = {personal.address}
                        onChange = {handleChange} 
                        placeholder = 'Address'
                        required>
                    </input>

                    <input 
                        className = 'personal-item'
                        type = 'tel'
                        // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        name = 'phone' 
                        value = {personal.phone}
                        onChange = {handleChange} 
                        placeholder = 'Phone number'>
                    </input>

                    <input 
                        className = 'personal-item'
                        type = 'email'
                        // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        name = 'email' 
                        value = {personal.email}
                        onChange = {handleChange} 
                        placeholder = 'E-mail'>
                    </input>

                    <button 
                        className = 'material-icon edit-btn'
                        onClick={event => toggleEdit(event)}
                    >check
                    </button>
                    
                    <input 
                        className = 'personal-item'
                        id = 'name'
                        type = 'text'
                        name = 'fullName' 
                        value = {personal.fullName}
                        onChange = {handleChange} 
                        placeholder = 'Full Name'>
                    </input>

                </form> : 
            
                <div className = 'personal'>
                    <div></div>
                    <div className = 'personal-item' id = 'address'>{address}</div>
                    <div className = 'personal-item' id = 'phone'>{phone}</div>
                    <div className = 'personal-item' id = 'email'>{email}</div>
                    <button 
                        className = 'material-icon edit-btn'
                        onClick={event => toggleEdit(event)}
                    >edit
                    </button>
                    <h1 className = 'personal-item' id = 'name'>{fullName}</h1>
                </div>}
        </section>
    
};

export default PersonalInfo