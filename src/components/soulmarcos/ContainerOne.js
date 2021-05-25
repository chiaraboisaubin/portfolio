  
import React, { Component } from 'react';
import {Link, link} from 'react-router-dom';
export default class ContaierOne extends Component {
  render() {
    return (
        <React.Fragment>
  <div className="layout-content-grid-1">

        <div className="layout-container-l">
        <h2 className="project-titles"> Context</h2>
          <p> A DJ in New York wanted a site to show his recent music that he produced, the events he will attend, and the ability to add
                  context like collabs with other musicians and podcastors </p>

        </div>

        <div className="layout-container-l2">
        <h2 className="project-titles"> Role </h2>
<p>Web Designer </p>

            </div>

            <div className="layout-container-r2">
            <h2 className="project-titles"> skills </h2>
            <ul className="skill-list">
            <li className="skills-style">wireframing</li>
            <li className="skills-style">prototyping</li>
            <li className="skills-style">abobe XD</li>
            <li className="skills-style">html</li>
            <li className="skills-style">css</li>
            </ul>
          </div>

          <div className="layout-container-l4">
          <h2 className="project-titles"> personas </h2>   
          <p>I worked on two personas; one was a potential user, and the other was a founder. The app was theoretical and we were was still designing the wireframe, but we needed an idea of who might use the app.</p>
          <div class="image-galla">
           <a href="https://i.ibb.co/p35gWX4/persona-ash.jpg" target="blank"> <img src="https://i.ibb.co/p35gWX4/persona-ash.jpg" alt="persona about Ashley" border="0" width="100%" height="auto" /></a> 
           <a href="https://i.ibb.co/p35gWX4/persona-ant.jpg" target="blank"><img src="https://i.ibb.co/D1Gg1nb/persona-ant.jpg" alt="persona about Anthony" border="0" width="100%" height="auto" /></a>
                  </div>
          </div>

          <div className="layout-container-l5">
          <h2 className="project-titles"> wireframe </h2>   
          <p>
                  Designing this site was interesting, We decided to so all the content into one page so it is easy to 
          </p>
          </div>
          
          <div className="layout-container-center">
          <h2 className="project-titles"> prototype </h2>   
          <p>Prototype
This is an application that I have been assisting. I had to organize and construct the mockups and wireframe, and build about 55 pages. This is the mockup that I had to use to make the pages and will launch in July. The clients wanted the web application to have a similar style like GrubHub and Dominos website and mobile application. We found other companies with betas that allow you to pre-order, but there were a couple of gaps with the host table and the chefs.</p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/sNsRcff1DcY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
          </div>
    </div>

      </React.Fragment>
      );
    }
  }