  
import React, { Component } from 'react';
import {Link, link} from 'react-router-dom';
export default class ContaierOne extends Component {
  render() {
    return (
        <React.Fragment>
  <div className="layout-content-grid-1">

        <div className="layout-container-l">
        <h2 className="project-titles"> Context</h2>
          <article> This is a reservation app for restaurants that allows people to pre-order, saves payment methods, and tells restaurant about your food allergies/dietary requirement in advance. Chowdown was a web-based application I was building with at MakeSense. The site is a place to make a reservation to restaurants and do-ability pre-order food and calculate group  </article>
        </div>

        <div className="layout-container-l2">
        <div className="layout-container-l22">
        <h2 className="project-titles"> Role </h2>
        <p> UI Designer and Front End Developer </p>
        </div>

        <div className="layout-container-l22">
        <h2 className="project-titles"> Year </h2>  
        <p> 2017 - 2018</p>
        </div>
        </div>

         <div className="layout-container-r2">
        <h2 className="project-titles"> Skills & Tools </h2>
          <ul className="skill-list-project">
            <li className="skills-style-proj">Wireframing</li>
            <li className="skills-style-proj">Prototyping</li>
            <li className="skills-style-proj">Mockup</li>
            <li className="skills-style-proj">Abobe XD</li>
            <li className="skills-style-proj">HTML</li>
            <li className="skills-style-proj">CSS</li>
            <li className="skills-style-proj">JavaScript</li>
            </ul>
            </div>

        <div className="layout-container-l3">
<h2 className="project-titles"> Why did I want to work on this project? </h2>

  <article> In my experience in dining out with friends or collages the following may occur, no some want to know what to order in advice, and there is no menu, particular food takes longer to make, splitting the bill is a hassle get interrupted by the server’s follow up. These problems are complex to especially in large groups or if you want intimate time with another person.</article>
<article>  As users, we wanted to give them a space to plan their order and bill reasonably.  To this, we will need to make a product that will allow a person(S) to pre-order food, tell their dietary needs and see the restaurant menu and see what the ingredients are.  The goal I want to reach was finding a solution to have user not have to repeat the process of updating information before heading over to a restaurant, and making sure that people could adjust their order without affect the restaurant’s flow. </article>

<div className="image-row">
<img src="https://i.ibb.co/Mhqbq6w/allergies.png" alt="allergies" border="0" />
<img src="https://i.ibb.co/nb1Kz9Z/money.png" alt="money" border="0" />
<img src="https://i.ibb.co/1QM9Jht/planner.png" alt="planner" border="0" />
</div>
        </div>
        <div className="layout-container-l4">
        <h2 className="project-titles"> Why did I want to do this project? </h2>   
        <p> This is a web app that the company MakesSense is building to make a web application to reserve seating at a restaurant, have multiple methods to make payment, also save and provide dietary requirements before arrival. Some of the goals that the client wanted:

- easy navigation
- visually stands out
- simple and secure payment
- user input is not complex</p> 

          </div>

          <div className="layout-container-l5">
        <h2 className="project-titles">  How did we get to understand our potential users better?   </h2>      
          <article> For the interviews I did with 6-10 people, I learned that the service was not balanced; either the server comes too often,  making them feel rust and uncomfortable or lacking interaction for long periods.  People also felt uncomfortable with spitting the bill. With the information that we got from the interview, I built the persona Ashley, a young professional who travels a lot and does not eat meat. She finds doing phone reservations a hassle and has a hard time decided what she will like to eat. </article>
          <article> Learning more about the user desire, I main a list with the stakeholder that will fit what the users need and what the company would like on the app. From that list, I started sketching ideas for the site when it cam to telling dietary needs, how the menu will look like for the restaurants and pre-ordering. I wanted to make it make sure that the users could customize and provide as much information to the restaurant in advance. </article>
  
          <div class="image-galla">
           <a className="ease-in" href="https://i.ibb.co/p35gWX4/persona-ash.jpg" target="blank"> <img src="https://i.ibb.co/p35gWX4/persona-ash.jpg" alt="persona about Ashley" border="0" width="100%" height="auto" /></a> 

                  </div>
          </div>

          <div className="layout-container-l6">
          <h2 className="project-titles"> Prototype</h2>
<p> This is an application that I have been assisting. I had to organize and construct the mockups and wireframe, and build about 55 pages. This is the mockup that I had to use to make the pages and will launch in July. The clients wanted the web application to have a similar style like GrubHub and Dominos website and mobile application. We found other companies with betas that allow you to pre-order, but there were a couple of gaps with the host table and the chefs.</p>
<iframe width="420px" height="720px" src="https://www.youtube.com/embed/sNsRcff1DcY?rel=0?version=3&autoplay=1&controls=0&&showinfo=0&loop=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
          </div>
          <div className="layout-container-l7">
          <h2 className="project-titles"> Outcome </h2>
          <p> I started to build the log in and sign up process and on boarding process. I was also also doing research for the back end side for the restaurants who would be using Chowdown. I acknowledge that the restaurants will need to features and hands on while dealing with orders inside and outside the restaurant.
            I also learn that Chowdown was missing the live order methods, for when users are in the resturant having the ability to request a server and place their own order.  </p>
            <h2 className="project-titles"> Images </h2>
          <a href="https://ibb.co/25YSsv4"><img className="img-1" src="https://i.ibb.co/V3pxQg4/diningandphone.jpg" alt="diningandphone" border="0"/></a>
<a href="https://ibb.co/W6qwqJc"><img className="img-3" src="https://i.ibb.co/BtdxdMg/iphonesx-chowdown.png" alt="iphonesx-chowdown" border="0"/></a>
          </div>
    </div>

      </React.Fragment>
      );
    }
  }