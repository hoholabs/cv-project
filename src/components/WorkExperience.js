import React from 'react'
import {Component} from 'react'

class WorkExperience extends Component{
    render(){
        return  <div id = 'experience'>WorkExperience
                    <div className = 'job-title'>job-title</div>
                    <div className = 'company'>company</div>
                    <div className = 'work-dates'>work-dates</div>
                    <button id = 'edit-work'>edit</button>
                </div>
    }
}
export default WorkExperience