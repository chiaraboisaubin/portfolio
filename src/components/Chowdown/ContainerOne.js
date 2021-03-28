  
import React, { Component } from 'react';
import {Link, link} from 'react-router-dom';
export default class ContaierOne extends Component {
  render() {
    return (
        <React.Fragment>
  <div className="layout-content-grid-1">

        <div className="layout-container-l">
        <h2 className="project-titles"> Context</h2>
          <article> This is a reservation app for restaurants that allows people to pre-order, saves payment methods, and tells restaurant about your food allergies/ dietary requirement in advance. Chowdown was a web-based application I was building with at MakeSense. The site is a place to make a reservation to restaurants and do-ability pre-order food and calculate group  </article>
<h2 className="project-titles"> Role </h2>
<p> Front End Developer and Designer </p>
        </div>

        <div className="layout-container-l2">
        <h2 className="project-titles"> Year </h2>  
        <p> 2018 </p>
        <h2 className="project-titles"> Skills </h2>
            <ul className="skill-list">
            <li className="skills-style">Wireframing</li>
            <li className="skills-style">Prototyping</li>
            <li className="skills-style">Abobe XD</li>
            <li className="skills-style">HTML</li>
            <li className="skills-style">CSS</li>
            <li className="skills-style">JavaScript</li>
            </ul>
            </div>

        <div className="layout-container-r2">
<h2 className="project-titles"> Why did I want to work on this project? </h2>
<div className="flex-init">
  <article> In my experience in dining out with friends or collages the following may occur, no some want to know what to order in advice, and there is no menu, particular food takes longer to make, splitting the bill is a hassle get interrupted by the server’s follow up. These problems are complex to especially in large groups or if you want intimate time with another person.</article>
<article>  As users, we wanted to give them a space to plan their order and bill reasonably.  To this, we will need to make a product that will allow a person(S) to pre-order food, tell their dietary needs and see the restaurant menu and see what the ingredients are.  The goal I want to reach was finding a solution to have user not have to repeat the process of updating information before heading over to a restaurant, and making sure that people could adjust their order without affect the restaurant’s flow. </article>
</div>
<div className="image-row">
<img src="https://i.ibb.co/Mhqbq6w/allergies.png" alt="allergies" border="0" />
<img src="https://i.ibb.co/nb1Kz9Z/money.png" alt="money" border="0" />
<img src="https://i.ibb.co/1QM9Jht/planner.png" alt="planner" border="0" />
</div>
        </div>
        <div className="layout-container-l3">
        <h2 className="project-titles"> Why did I want to do this project? </h2>   
        <p> This is a web app that the company MakesSense is building to make a web application to reserve seating at a restaurant, have multiple methods to make payment, also save and provide dietary requirements before arrival. Some of the goals that the client wanted:

- easy navigation
- visually stands out
- simple and secure payment
- user input is not complex</p> 

          </div>

          <div className="layout-container-l4">
        <div className="persona-para-1">
        <h2 className="project-titles">  How did we get to understand our potential users better?   </h2>      
          <article> For the interviews I did with 6-10 people, I learned that the service was not balanced; either the server comes too often,  making them feel rust and uncomfortable or lacking interaction for long periods.  People also felt uncomfortable with spitting the bill. With the information that we got from the interview, I built the persona Ashley, a young professional who travels a lot and does not eat meat. She finds doing phone reservations a hassle and has a hard time decided what she will like to eat. </article>
          <article> Learning more about the user desire, I main a list with the stakeholder that will fit what the users need and what the company would like on the app. From that list, I started sketching ideas for the site when it cam to telling dietary needs, how the menu will look like for the restaurants and pre-ordering. I wanted to make it make sure that the users could customize and provide as much information to the restaurant in advance. </article>
          </div>
          <div class="image-galla">
           <a href="https://i.ibb.co/p35gWX4/persona-ash.jpg" target="blank"> <img src="https://i.ibb.co/p35gWX4/persona-ash.jpg" alt="persona about Ashley" border="0" width="100%" height="auto" /></a> 

                  </div>
          </div>

          <div className="layout-container-l5">
          <h2 className="project-titles"> Prototype and testing the app out  </h2>   
          <article>With the low fidelity sketches, I started working with an existing prototype with an existing style guide to match with the site’s design goals. We conducted one face to face test with 6 candidates at the age range of 22 - 35. Will the error that we noticed or wanted to adjust, we updated the high filetly prototype. </article> 
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