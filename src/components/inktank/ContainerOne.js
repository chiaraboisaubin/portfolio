
import React, { Component } from 'react';
import { Link, link } from 'react-router-dom';
export default class ContaierOne extends Component {
        render() {
                return (
                <React.Fragment>
                                <div className="layout-content-grid-1">
                                        <div className="layout-container-l">
                                                <h2 className="project-titles"> Context </h2>
                                                <p> Ink Tank is a web application that allows tattoo lovers to share their work, schedule a session, or develop a project.
                                                        This  was a project I did with UX course with Career Foundry. </p>
                                                <div className="image-row">
                                                </div>
                                        </div>

                                        <div className="layout-container-l2">
                                                <h2 className="project-titles"> Role </h2>
                                                <p> UI/UX Designer </p>
                                        </div>

                                        <div className="layout-container-r2">
                                                <h2 className="project-titles"> Skills </h2>
                                                <ul className="skill-list">
                                                        <li className="skills-style">Competitive Analysis</li>
                                                        <li className="skills-style">Low to High fieldity prototyping</li>
                                                        <li className="skills-style"> Usability testing  </li>
                                                        <li className="skills-style"> Illustration </li>
                                                        <li className="skills-style"> A/B testing </li>
                                                        <li className="skills-style">Figma</li>
                                                        <li className="skills-style">Branding</li>

                                                </ul>
                                        </div>

                                        <div className="layout-container-l3">
                                                <h2 className="project-titles"> The problem </h2>
                                                <div className="flex-init">
                                                        <article> Finding a tattoo artist with a specific medium is a loop, jump, and a tumble; what I mean is a lot of steps to accomplish. You have to look at multiple social media sites or a google search.
                                                        Direct message or email, send documents of what you want to do, then go to another app to make an appointment, and if the artist allows you to pay digitally -- you have to go through another app to make a deposit payment. That was my experience for at least 3 of my tattoos.
</article>
                                                        <i>A user needs to discover various tattoos for inspiration and find a capable artist to produce their design. To do so, we need a place where people can publish pieces of a tattoo design, categorize the tattoo style, and connect the artist who did the work, encouraging people to interact.</i>
                                                        <article>Ink Tank aims to share and find tattoo inspirations and find artists who can design, organize projects, and organize appointments.</article>
                                                </div>
                                        </div>

                                        <div className="layout-container-l4">
                                                <h2 className="project-titles"> The process </h2>
                                                <img src="https://i.ibb.co/1Z6P37t/Design-Thinking-Process.png" alt="Design-Thinking-Process" border="0" />
                                        </div>


                                        <div className="layout-container-l5">
                                                <h2 className="project-titles"> Understand  </h2>

                                                <h3>Who might be Ink Tank's potential competition?</h3>
                                                <div className="flex-init">
                                                        <article>We needed to look for mobile apps that share content, input information, and display.  Also, look at tattoo shops and tattoo artist websites to find a common theme. Through my research, I've discovered Tattoodo AND Tattoomap that were indirect competitors for Ink Tank. I believe these were indirect competitors because of some of the features they have accessible for finding an artist, how they displayed posts, the ability to communicate with an artist, and the parts that allow people to understand the tattoo culture.  By identifying the underserved opportunities in the market, I could list possible solutions to fill the users' needs.
</article>
                                                <img className="img-1" src="https://i.ibb.co/yqrcc4p/competivie-analsyis-inktank.png" alt="competivie-analsyis-inktank" border="0"></img>
                                                </div> 
                                               <img className="img-2" src="https://i.ibb.co/D8GX2KS/S-W-O-T.png" alt="S-W-O-T" border="0" />

                                                <h3>What did we learn about potential users? </h3>
                                                <div className="flex-init">
                                                        <article>To understand what our potential users need and solve the problems that are noticed from the competitor analysis. We need\ed to understand their reasons for getting a tattoo, their experience of getting a tattoo, and what they use to keep projects and dates organized. I conducted user surveys and User Interviews - I wanted to make Contextual Inquiries with artists, but it was challenging to complete because of the pandemic.  With the analyzed data, I learned that users wanted a place to get creative ideas, communicate, and research. With that information, I have been able to build personas, William and Danielle.</article>
                                                </div>

                                                <span> More detail about the
                                                <a href="">competitive analysis </a>
                                                <a href="">market research and UX analysis</a>
                                                </span>
                                        </div>

                                        <div className="layout-container-l6">
                                                <h2 className="project-titles">Observe</h2>
                                                <h3> Personas and user flows </h3>
                                                <div className="flex-init">
                                                        <article>For me to understand the user Ink Tank will like to reach, I did user interviews with 5 users that fit close to what Ink Tank objective. We also did a survey. </article>
                                                        <img src="https://i.ibb.co/DfBD0w9/survey-overview.png" alt="survey-overview" border="0" />
                                                </div>
                                                <article>From the data that was provided from understanding the user, we built personas, William and Danielle. With the information form, we create user flows that would explain how they might use the app for their needs.  </article>
                                                <img src="https://i.ibb.co/sg1SxBF/Personas-Ink-Tank-combo.png" alt="Personas-Ink-Tank-combo" border="0" />
                                               
                                                <span> More detail about the
                                                <a href=""> user survey and interviews </a>
                                                <a href=""> personas and user stories </a>
                                                </span>
                                        </div>

                                        <div className="layout-container-l7">
                                                <h2 className="project-titles">Ideate</h2>
                                                <h3> Updating a sitemap with card sorting </h3>
                                                <div className="flex-init">
                                                        <p> After creating personas I built a sitemap and conducted card sorting. After evaluating the data, and update the sitemap. </p>
                                                        <img className="img-1" src="https://i.ibb.co/xXsr8yM/3-2-Refining-Your-Sitemap-with-Card-Sorting.png" alt="3-2-Refining-Your-Sitemap-with-Card-Sorting" border="0"/>
                                                </div>
                                                <img className="img-2" src="https://i.ibb.co/qdJV88j/updated-sitemap.png" alt="updated-sitemap" border="0"/>
                                        </div>

                                        <div className="layout-container-l8">
                                                <h2 className="project-titles">Prototype and testing </h2>
                                                <h3> what was build? </h3>
                                                <div className="flex-init">
                                                        <article>Now that we understood our users better and user flow, I could finally start prototyping from the user flow.
                                                        After a low fidelity prototype, I tested it out with a couple of users to see if the flow was clear enough for the user to know how to get to the features after I went through the feedback and chose the ones that affected the experience from the majority or affected the flow.  </article>
                                                        <article> Allow the user to organize their sketches into projects and add people they would like to collaborate with—the development of the story's design for each flow for Ink Tank. The ideas put on paper slowly evolved into wireframes and tested to find errors. </article>

                                                        <img src="https://i.ibb.co/8g0grVf/6-2-polishing-desgin.png" alt="6-2-polishing-desgin" border="0"/>
                                                        
                                                </div>


                                        </div>
                                        <div className="layout-container-l9">
                                                <h3> Testing the out our work  </h3>
                                                <article>  I did A/B testing and usability testing to see what needed more clarification or adjustments. We decided to Implement usability, and A/B testing to see how a group of users feel about the features and visual.  The user testing was conducted with five candidates, and afterward, I sorted the feedback to see what could be improved. </article>
                                                <img src="https://i.ibb.co/k3FSxS0/4-6-Rainbow-Spread-Sheet-Usability-Testing-Ink-Tank-Usability-Test-Results.png" alt="4-6-Rainbow-Spread-Sheet-Usability-Testing-Ink-Tank-Usability-Test-Results" border="0"/>
                                                
                                                <span> More detail about the
                                                <a href="">  rainbow sheet</a>
                                                <a href=""> and A/B testing </a> and
                                                <a href=""> and the updates </a>
                                                </span>
                                        </div>

                                        <div className="layout-container-l10">
                                                <h2 className="project-titles">Outcome </h2>
                                                <div className="flex-init">
                                                        <article>
                                                                We want to do another usability testing with the updates that we did.
                                                                We will also want to complete the artist's business side - allowing the artist to manage projects,
        payments, and other features that will be useful for them, like showing their certification on where they can tattoo. </article>
                                                        <article>
                                                                We want to interact with artists to see what they need to make their work-life easier.
                                                                This project was interesting to find a way to give the tattoo industry more technology that helps.
                </article>
                                                </div>
                                        </div>
                                </div>


                        </React.Fragment>
                );
        }
}