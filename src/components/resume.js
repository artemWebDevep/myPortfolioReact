import React, { Component } from 'react'
import { Grid, Cell} from 'react-mdl'
import Education from './education'
import Experience from './experience'
import Skills from './skills'

class Resume extends Component {
    render() {
        return(
        <div>
            <Grid>
                <Cell col={4}>
                    <div style={{textAlign:'center'}}>
                        <img
                        src="http://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                        alt="avatar"
                        style={{height: '200px'}}
                        />
                    </div>
                    <h2 style={{paddingTop: '2em'}}>Artem Shalamov</h2>
                    <h4 style={{color: 'grey'}}>Front end Developer</h4>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, nisi? Optio ad dolorem ea voluptatum quidem, suscipit quia voluptas hic sint voluptatem mollitia tempora fugiat! Amet dolor debitis aliquam nam.</p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    <h5>Adress</h5>
                    <p>Russia, Tyumen</p>
                    <h5>Phone</h5>
                    <p>+79995402657</p>
                    <h5>Email</h5>
                    <p>iart1756@gmail.com</p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                </Cell>
                <Cell className="resume-right-col" col={8}>
                    <h2>Education</h2>
                    <Education
                        startYear={2013}
                        endYear={2018}
                        schoolName="My University"
                        schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor fringilla malesuada. Praesent at scelerisque arcu, ac hendrerit magna. Donec in libero lectus. Integer enim ante, aliquam ac lacus eu, tincidunt molestie leo. Ut eros ligula, rutrum pharetra elementum fringilla, cursus non augue. Cras non enim vitae ipsum pulvinar feugiat. Duis gravida nisi non odio imperdiet, in iaculis massa rutrum. Proin placerat diam vitae leo fringilla ultrices. Fusce eget justo sit amet lo"
                        />
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h2>Experience</h2>
                        <Experience
                        startYear={2019}
                        jobName="Self-education"
                        jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor fringilla malesuada. Praesent at scelerisque arcu, ac hendrerit magna. Donec in libero lectus. Integer enim ante, aliquam ac lacus eu, tincidunt molestie leo. Ut eros ligula, rutrum pharetra elementum fringilla, cursus non augue. Cras non enim vitae ipsum pulvinar feugiat. Duis gravida nisi non odio imperdiet, in iaculis massa rutrum. Proin placerat diam vitae leo fringilla ultrices. Fusce eget justo sit amet lo"
                        />
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h2>Skills</h2>
                        <Skills
                        skill='JavaScript'
                        progress={20}
                        />
                         <Skills
                        
                        skill="HTML/CSS"
                        progress={30}
                        />
                    </Cell>
            </Grid>
        </div>
        )
    }
}
export default Resume 
