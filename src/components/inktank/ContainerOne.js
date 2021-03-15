  
import React, { Component } from 'react';
import {Link, link} from 'react-router-dom';
export default class ContaierOne extends Component {
  render() {
    return (
        <React.Fragment>
  <div className="layout-content-grid-1">

        <div className="layout-container-l">
<h2 className="project-titles"> role </h2>
<p> UI/UX Designer </p>
        </div>

        <div className="layout-container-r">
        <h2 className="project-titles"> skills </h2>
            <ul className="skill-list">
            <li className="skills-style">wireframing</li>
            <li className="skills-style">prototyping</li>
            <li className="skills-style"> usability testing  </li>
            <li className="skills-style"> illustration </li>
            <li className="skills-style"> A/B testing </li>
            <li className="skills-style">figma</li>
            </ul>
            </div>

        <div className="layout-container-l2">
<h2 className="project-titles"> mission statement </h2>
<p> Users need a way to discover different tattoo styles for inspiration and an artist capable of producing the design.
We will know this to be true when we see we have a place to search for both a style and a tattoo artist.</p>
<div className="image-row">
</div>
        </div>
        <div className="layout-container-r2">
        <h2 className="project-titles"> objective </h2>   
        <p> This is a web app that the company MakesSense is building to make a web application to reserve seating at a restaurant, have multiple methods to make payment, also save and provide dietary requirements before arrival. Some of the goals that the client wanted:

- easy navigation
- visually stands out
- simple and secure payment
- user input is not complex</p> 

          </div>

          <div className="layout-container-l3">
          <h2 className="project-titles"> personas </h2>   
          <p>I worked on two personas; one was a potential user, and the other was a founder. The app was theoretical and we were was still designing the wireframe, but we needed an idea of who might use the app.</p>
          <div class="image-galla">
           <a href="https://i.ibb.co/p35gWX4/persona-ash.jpg" target="blank"> <img src="https://i.ibb.co/p35gWX4/persona-ash.jpg" alt="persona about Ashley" border="0" width="100%" height="auto" /></a> 
           <a href="https://i.ibb.co/p35gWX4/persona-ant.jpg" target="blank"><img src="https://i.ibb.co/D1Gg1nb/persona-ant.jpg" alt="persona about Anthony" border="0" width="100%" height="auto" /></a>
                  </div>
          </div>

          <div className="layout-container-r3">
          <h2 className="project-titles"> wireframe </h2>   
          <p>We needed to make sure that the application pages were not cluttered and navigation was not complex. We wanted to make sure that it was not difficult to understand for ages 25-50. We wanted to make sure that the user's account provided the information could be looked at under a 10 second glance - the food industry is fast pace and we want to limit the human error. The live ordering should only be accessible only to the restaurant so adding will not have an issue while the reservation is happening. There are about 90 wireframe screens.</p>
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