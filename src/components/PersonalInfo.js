import React from 'react';

class PersonalInfo extends React.Component {
    render(){
        return  <section id = 'personal'> 
                    <div></div>
                    <div id = 'address'>address</div>
                    <div id = 'phone'>phone</div>
                    <div id = 'email'>email</div>
                    <button className = 'material-icon'>edit</button>
                    <h1 id = 'name'>name</h1>
                </section>
    }
}

export default PersonalInfo