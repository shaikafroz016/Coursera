import React, { Component } from 'react'
import { baseUrl } from '../shared/baseUrl';
class adminComponent extends Component {
    render() {
        return (
            <div className='container'>
                <a href={baseUrl + 'admin'}>Click Here</a> for admin section
            </div>
        )
    }
}

export default adminComponent
