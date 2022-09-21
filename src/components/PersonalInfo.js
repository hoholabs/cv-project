import React, {useState, useEffect} from 'react'

function PersonalInfo(props){

    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [fullName, setFullName] = useState('')
    const [editing, setEditing] = useState(true)

    useEffect(()=>{

    },[editing]);

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
                        onChange = {event => setAddress(event.target.value)} 
                        placeholder = 'Address'
                        required>
                    </input>

                    <input 
                        className = 'personal-item'
                        type = 'tel'
                        // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        name = 'phone' 
                        onChange = {event => setPhone(event.target.value)} 
                        placeholder = 'Phone number'>
                    </input>

                    <input 
                        className = 'personal-item'
                        type = 'email'
                        // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        name = 'email' 
                        onChange = {event => setEmail(event.target.value)} 
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
                        onChange = {event => setFullName(event.target.value)} 
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