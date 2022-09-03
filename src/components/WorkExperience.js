import React from 'react'
import {Component} from 'react'

class WorkExperience extends Component{
    render(){
        return  <div id = 'experience'>
                    <div className = 'job-title'>job-title</div>
                    <div className = 'company'>company</div>
                    <div className = 'work-date'>work-dates</div>
                    <div className = 'description'>description</div>
                    <button id = 'edit-work' className = 'edit'>edit</button>
                </div>
    }
}
export default WorkExperience