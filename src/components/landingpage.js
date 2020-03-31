import React, { Component } from "react"
import { Grid, Cell } from 'react-mdl'

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}></Cell>
                        <img src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/malecostume-512.png" 
                        alt="avatar"
                        className="avatar-img"/>

                        <div className="banner-text">
                            <h1>Front end Web Developer</h1>

                        <hr/>

                        <p>HTML/CSS | JavaScript | React</p>

                        <div className="social-links">

                            {/* LinkedIn */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true" />    
                            </a>

                            {/* GitHub */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square"  aria-hidden="true" />    
                            </a>

                             {/* VK */}
                             <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-telegram-square"  aria-hidden="true" />    
                            </a>

                            {/* Facebook */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-facebook-square"  aria-hidden="true" />    
                            </a>
                        </div>
                            
                        </div>
                </Grid>
            </div>
        )
    }
}
export default Landing 