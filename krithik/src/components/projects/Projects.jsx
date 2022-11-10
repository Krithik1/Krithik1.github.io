import React from 'react'
import Project from './Project'
import './projects.css'

const projects = () => {
  return (
    <div id='projects'>
      <h2>PROJECTS</h2>
      <Project title="LogiCal" description="Calculate simplified logic from truth tables
                                            Use Karnaugh maps to calculate logic"
               tech="Java"
               link="https://github.com/Krithik1/LogiCal"/>
      <Project title="LogiSim" description="Create your own logic gates using previously built basic gates" 
               tech="HTML5 CSS3 JavaScript"
               link="https://github.com/Krithik1/Logisim"/>
      <Project title="STAT 201 PROJECT" description="Test whethter there was increase in the theft crime rates 
                                                     in Kitsilano, Vancouver, Canada during the pandemic"
                tech="R JupyterLab"
                link="https://github.com/Krithik1/STAT_201_PROJECT"/>
      <Project title="Krithik's Portfolio" description="This website you are currently on"
               tech="ReactJS HTML5 CSS3"
               link="https://github.com/Krithik1/Krithik1"/>
    </div>
  )
}

export default projects