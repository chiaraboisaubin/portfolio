
import React, { Component } from 'react';
import { Link, link } from 'react-router-dom';
export default class ContaierOne extends Component {
        render() {
                return (
                        <React.Fragment>
                                {/*  intro */}
                                <div className="layout-content-grid-1">
                                        <div className="layout-container-l">
                                                <h2 className="project-titles"> Context </h2>
                                                <p> Ink Tank is a web application that allows tattoo lovers to look for tattoos, share their tattoos, 
                                                        schedule sessions or consultations with a tattoo designer, or develop a project for a new tattoo. 
                                                        This project was from a UX course with Career Foundry.  </p>
                                                <div className="image-row">
                                                </div>
                                        </div>

                                        <div className="layout-container-l2">
                                                <div className="layout-container-l22">
                                                        <h2 className="project-titles"> Role </h2>
                                                        <p> UI/UX Designer </p>
                                                </div>
                                                <div className="layout-container-l22">
                                                        <h2 className="project-titles"> Time Period </h2>
                                                        <p>2020-2021</p>
                                                </div>
                                        </div>
                                        {/*  skills */}
                                        <div className="layout-container-r2">
                                                <h2 className="project-titles"> Skills </h2>
                                                <ul className="skill-list-project">
                                                        <li className="skills-style-proj">Competitive Analysis</li>
                                                        <li className="skills-style-proj">Low to High fieldity prototyping</li>
                                                        <li className="skills-style-proj"> Usability testing  </li>
                                                        <li className="skills-style-proj"> Illustration </li>
                                                        <li className="skills-style-proj"> A/B testing </li>
                                                        <li className="skills-style-proj">Figma</li>
                                                        <li className="skills-style-proj">Branding</li>

                                                </ul>
                                        </div>
                                        {/*  intro */}
                                        <div className="layout-container-l3">
                                                <h2 className="project-titles"> The problem </h2>

                                                <article> 
                                                There are a lot of steps to get a good tattoo. Looking for a tattoo design and finding a capable tattoo artist feels like a loop, 
                                                jump, and tumble. One must direct message or email, send documents of what you want to do, 
                                                then go to another app to make an appointment, and if the artist allows you to pay digitally -- 
                                                you have to go through another app to make a deposit payment.  
                                                What I mean to say about this process is there are many steps to accomplish. 
                                                 That is about five to seven steps a user will have to and in different methods. 
                                                At least that was my experience with three of my tattoos.
                                                </article>
                                                
                                                <i className="bold">A user needs to discover various tattoos for inspiration and find a capable artist to produce their design. To do so, a user needs a place where people can publish pieces of a tattoo design, categorize the tattoo style, and connect the artist who did the work, encouraging people to interact.</i>
                                                <article>
                                                For this project, I wanted to compress the process into one space.
                                                Ink Tank aims to share and find tattoo inspirations and find artists who can design, 
                                                organize assignments, and organize appointments.
                                                </article>
                                        </div>

                                        <div className="layout-container-l4">
                                                <h2 className="project-titles"> Process </h2>
                                                <img src="https://i.ibb.co/1Z6P37t/Design-Thinking-Process.png" alt="Design-Thinking-Process" border="0" />
                                        </div>

                                        {/*  understand */}
                                        <div className="layout-container-l5">
                                                <h2 className="project-titles"> Understand  </h2>
                                                <div className="flex-init">
                                                        <article>
                                                        I research mobile apps that focus on sharing and displaying content, 
                                                        organizing communication, and scheduling an appointment for the tattoo industry. 
                                                        Conducting a competitive analysis allows me to see what is out there for people, 
                                                        how easy it is for people who have experience getting a tattoo and are entirely new to the process. 
                                                        Tattoodo and Tattoomap were indirect competitors for Ink Tank. 
                                                        Those sites were the best indirect competitors due to some features accessible for finding an artist, 
                                                        displaying a post, communicating with another user, and visual proof on licensed tattoo artist compare to a regular user. 
                                                         By identifying the underserved opportunities in the market,
                                                         I made possible solutions to fill the users' needs. 
                                                        </article>
                                                </div>
                                                <img className="img-1" src="https://i.ibb.co/yqrcc4p/competivie-analsyis-inktank.png" alt="competivie-analsyis-inktank" border="0"></img>
                                                <img className="img-2" src="https://i.ibb.co/D8GX2KS/S-W-O-T.png" alt="S-W-O-T" border="0" />

                                                <span> More detail about the
                                                <a className="left" target="blank" href="https://drive.google.com/file/d/1JZhoqM_efQ_fDiWyeLxnpw-h6jNTTKkL/view?usp=sharing"> Competitive and UX analysis</a>
                                                </span>
                                        </div>
                                        {/*  observe */}
                                        <div className="layout-container-l6">
                                                <h2 className="project-titles">Observe</h2>


                                                <article>
                                                I sent out user surveys and User Interviews; I understand how people organize their projects. 
                                                The user’s preference enjoys setting up an appointment, looking up ideas, and hiring a professional. 
                                                I interviewed five users that fit close to the market Ink Tank is reaching. With the data that I analyze,
                                                I did learn that users want a place where they can communicate during the build of a design and view profiles and pieces of work.
                                                 I have built personas for the ideal user and scenarios with the information from the interviews and surveys. 
                                                Creating the personas and scenarios will see the user’s perspective on how Ink Tank will function within their life. 
                                                </article>

                                                <img src="https://i.ibb.co/DfBD0w9/survey-overview.png" alt="survey-overview" border="0" />
                                        
                                                <span> More detail about the
                                                <a className="left" target="blank" href="https://drive.google.com/file/d/1cX6eLaoTXFv7hxXp3U853cmrGd-WuHqp/view?usp=sharing"> User survey and interviews overview</a>
                                                </span>
                                        </div>

                                        <div className="layout-container-l66">
                                                <h2 className="project-titles">POV</h2>


                                                <article>
                                                From the data provided from understanding the user, I built a couple of personas, William and Danielle.
                                                 To show how Ink Tank benedicts user’s day-to-day lives, I offered scenarios. 
                                                </article>
                                                <div className="flex-init">
                                                <img src="https://i.ibb.co/5vrs0yV/Danielle.png" alt="Danielle" border="0"/>
                                                <img src="https://i.ibb.co/XD8GypT/William.png" alt="William" border="0"/>
                                                </div>


                                                <span> More detail about the
                                                <a className="left" target="blank" href="https://drive.google.com/file/d/19qxU0cJqSae26r6FoW5kZHjDe9RS2WBt/view?usp=sharing"> user stories </a>,
                                                <a className="left" target="blank" href="https://drive.google.com/file/d/1lkw71WvpuNFEuvDgIsTW20qh8mp7DmV2/view?usp=sharing"> user flow </a>, and
                                                <a className="left" target="blank" href=" After creating personas I built a sitemap and conducted card sorting. After evaluating the data, and update the sitemap. With the information form, we create user flows that would explain how they might use the app for their needs.">   user journey </a>
                                                </span>
                                        </div>


                                        {/*  POV */}

                                        <div className="layout-container-l7">
                                                <h2 className="project-titles">Ideate</h2>

                                                <div className="flex-init">
                                                        <article>From the data provided from understanding the user,
                                                        I built a couple of personas, William and Danielle.
                                                        I am making the scenarios to show how Ink Tank can benedict users day-to-day lives.
                                                        Now that there is a better understanding of the users,
                                                       I created a user flow that shows how a person navigates throughout the app.</article>

                                                        <img className="img-1" src="https://i.ibb.co/xXsr8yM/3-2-Refining-Your-Sitemap-with-Card-Sorting.png" alt="3-2-Refining-Your-Sitemap-with-Card-Sorting" border="0" />
                                                </div>
                                                <img className="img-2" src="https://i.ibb.co/qdJV88j/updated-sitemap.png" alt="updated-sitemap" border="0" />
                                                <span> More detail about the
                                                <a className="left" target="blank" href="https://drive.google.com/file/d/1jXFPz13dHfTQEOaMYHPMIOelHlYcy-kR/view?usp=sharing"> refining sitemap with card sorting </a>

                                                </span>
                                        </div>

                                        {/*  ideate */}
                                        <div className="layout-container-l8">
                                                <h2 className="project-titles">Prototype and testing </h2>
                                                <article>
                                                Finally able to do the fun part, prototyping!  After sketching a low-fidelity prototype,
                                                 I tested it out with a couple of users to see if the flow was clear enough for them to get to the features.
                                                  I analyze the feedback and update the sketch and flow from the majority of call-outs. 
                                                Once I felt satisfied with what was on paper turned the design into a high-fidelity prototype and tested it again with some users.         
                                                </article>

                                                <img src="https://i.ibb.co/8g0grVf/6-2-polishing-desgin.png" alt="6-2-polishing-desgin" border="0" />



                                        </div>
                                        <div className="layout-container-l9">

                                                <article>  
                                                I did A/B testing and usability testing to see what needed more clarification or adjustments. 
                                                I decide to Implement usability and A/B testing to see how a group of users feel about the features and visuals. 
                                                 I did user testing with five candidates, and afterward, I sorted the feedback to see what can be improved.        
                                                </article>
                                                <img src="https://i.ibb.co/k3FSxS0/4-6-Rainbow-Spread-Sheet-Usability-Testing-Ink-Tank-Usability-Test-Results.png" alt="4-6-Rainbow-Spread-Sheet-Usability-Testing-Ink-Tank-Usability-Test-Results" border="0" />
                                                <article>
                                                As a designer, I wanted to figure out the best way for different components to function and support the app's various features. 
                                                I wanted to make sure that the elements had a flow that the users can recognize and 
                                                navigate as much as possible with no assistance or confusion—building a layout that focuses on showing photos
                                                 and building a project or doing a project in the same area. 
      
                                                </article>
                                                <span> More detail about the
                                                <a className="left" target="blank" href="https://drive.google.com/file/d/15J0x26qCDo1ekG5wI7-GNRaSyhDDkUbQ/view?usp=sharing"> Design language system </a>,
                                                <a className="left" target="blank" href="https://drive.google.com/file/d/16PYClVcdq3x66mN0wWmXqd1coOJTw6g4/view?usp=sharing">  rainbow sheet</a>,
                                                <a className="left" target="blank" href="https://drive.google.com/file/d/198MaXy-3pK1WfJXp16YbZiEhm3ePRK4s/view?usp=sharing">  A/B preference testing </a> , and
                                                <a className="left" target="blank" href="https://drive.google.com/file/d/1c-ek21FTbgVxhYfh_xqa1M2IEZhX2Cjg/view?usp=sharing">  the updates </a>
                                                </span>
                                        </div>

                                        {/*  conclusion */}
                                        <div className="layout-container-l10">
                                                <h2 className="project-titles">Outcome </h2>

                                                <article>
                                                This project allowed me to see what the tattoo industry is missing out on and how it could evolve with a mobile app. I
                                                 wish I could have done interviews with artists, especially in their studios, 
                                                 to see how their day-to-day looks and the tools they use to stay organized when it came to appointments and payments.  </article>
                                                <article>

                                                        At this point we have looked at potential clienta who want to get a tatto design, the next part I want to do build for artists. I want to interact with artists to see what they need to make their work-life fun.  This project was interesting to find a way to give the tattoo industry more technology that helps.
                                                </article>
                                                <h2 className="project-titles">Next steps </h2>
                                                <ol>
                                                        <li>To build the artists section of the site. I want to interact with artists to see what they need to make their work-life fun. I believe making contextual inquiries with artists will show me their perspective.</li>
                                                        <li>Do another usability test with the high-fidelity prototype updates, and I think A/B testing will be faster and easier to gather feedback.  </li>
                                                        <li>Update the illustration on the onboarding process to better match the app’s theme.</li>
                                                </ol>

                                        </div>
                                </div>


                        </React.Fragment>
                );
        }
}