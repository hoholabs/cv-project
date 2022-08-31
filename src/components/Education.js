import React, {Component} from 'react'

class Education extends Component{
    render (){
        return  <div id = 'education'> Education 
                    <div className = 'school'>school</div>
                    <div className = 'program'>program</div>
                    <div className = 'education-date'>date</div>
                    <button className = 'edit-education'>edit</button>
                </div>
        }
}

export default Education