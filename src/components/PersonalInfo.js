import React from 'react';

class PersonalInfo extends React.Component {
    render(){
        return  <div id = 'personal'> personal
                    <div id = 'address'>address</div>
                    <div id = 'phone'>phone</div>
                    <div id = 'email'>email</div>
                    <div id = 'name'>name</div>
                    <button id = 'edit-personal'>edit</button>
                </div>
    }
}

export default PersonalInfo