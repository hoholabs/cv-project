import React from 'react';

class PersonalInfo extends React.Component {
    render(){
        return  <div id = 'personal'> 
                    <h1 id = 'name'>name</h1>
                    <div id = 'address'>address</div>
                    <div id = 'phone'>phone</div>
                    <div id = 'email'>email</div>
                    
                    <button id = 'edit-personal' className = 'edit'>edit</button>
                </div>
    }
}

export default PersonalInfo