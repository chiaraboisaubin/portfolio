  
import React, { Component } from 'react';
import {Link, link} from 'react-router-dom';
export default class ContaierOne extends Component {
  render() {
    return (
        <React.Fragment>
  <div className="layout-content-grid-1">

        <div className="layout-container-l">
<h2 className="project-titles"> role </h2>
<p> Front End Developer and Designer </p>
        </div>

        <div className="layout-container-r">
        <h2 className="project-titles"> skills </h2>
            <ul className="skill-list">
            <li className="skills-style">wireframing</li>
            <li className="skills-style">prototyping</li>
            <li className="skills-style">abobe XD</li>
            <li className="skills-style">html</li>
            <li className="skills-style">css</li>
            </ul>
            </div>

        <div className="layout-container-l2">
<h2 className="project-titles"> What is Chowdown? </h2>
<p> This is a reservation app for restaurants that allows people to pre-order, saves payment methods, and tells restaurant about your food allergies/ dietary requirement in advance. </p>
<div className="image-row">
<img src="https://i.ibb.co/Mhqbq6w/allergies.png" alt="allergies" border="0" />
<img src="https://i.ibb.co/nb1Kz9Z/money.png" alt="money" border="0" />
<img src="https://i.ibb.co/1QM9Jht/planner.png" alt="planner" border="0" />
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
        <div className="persona-para-1">
          <h2 className="project-titles"> personas </h2>   
          <p>Meet Ashley, a young professional who tries to take life step by step. She enjoys traveling - especially in the city. She became a vegetarian a couple of years ago but decided to be a pescatarian to better suit her lifestyle. She doesn't like to admit this but, she is a very picky eater. Find a place to eat is a challenge during work because she has a limited time to do so and when she has a meeting with her team, she wished that she can look and the menu in advance and order before arriving. She also doesn't like making a reservation on the phone because she is shy and believes it to be a hassle.  </p>
          <p>We learned about Ashley that she wants to order what she eats in advance, schedule reservations without calling on the phone, find places that work for her dietary needs, and tell the restaurant what she does not wish to in her food.</p>
          </div>
          <div class="image-galla">
           <a href="https://i.ibb.co/p35gWX4/persona-ash.jpg" target="blank"> <img src="https://i.ibb.co/p35gWX4/persona-ash.jpg" alt="persona about Ashley" border="0" width="100%" height="auto" /></a> 

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
<iframe width="560" height="600" src="https://www.youtube.com/embed/sNsRcff1DcY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
          </div>
    </div>

      </React.Fragment>
      );
    }
  }