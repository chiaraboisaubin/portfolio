
import React, { Component } from 'react';
import { Link, link } from 'react-router-dom';
export default class ContaierOne extends Component {
        render() {
                return (
                        <React.Fragment>
                                {/*  INTRO */}
                                <div className="layout-content-grid-1">
                                        <div className="layout-container-l">
                                                <h2 className="project-titles"> Context </h2>
                                                <p> Ink Tank is a web application that allows tattoo lovers to look for tattoos, share their tattoos,
                                                schedule sessions or consultations with a tattoo designer, or develop a project for a new tattoo.
                                                        This project was from a UX project with Career Foundry.  </p>
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
                                                        <p>July 2020 - April 2021 </p>
                                                </div>
                                        </div>
                                        {/*  SKILLS */}
                                        <div className="layout-container-r2">
                                                <h2 className="project-titles"> Skills & Tools </h2>
                                                <ul className="skill-list-project">
                                                        <li className="skills-style-proj">Competitive Analysis</li>
                                                        <li className="skills-style-proj">Prototyping</li>
                                                        <li className="skills-style-proj"> Usability testing  </li>
                                                        <li className="skills-style-proj"> Illustration </li>
                                                        <li className="skills-style-proj"> A/B testing </li>
                                                        <li className="skills-style-proj">Figma</li>
                                                        <li className="skills-style-proj">Branding</li>
                                                        <li className="skills-style-proj">Mockups</li>

                                                </ul>
                                        </div>
                                        {/*  THE PROBELM STATEMENT */}
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
                                                <img src="https://i.ibb.co/2W9yCGV/Design-Thinking-Process.png" alt="Design-Thinking-Process" border="0"/>
                                        </div>

                                        {/*  UNDERSTAND */}
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
                                        {/*  OBSERVE */}
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
                                                <article>
                                                        I did have difficulty finding a tattoo artist who was willing to talk to me about the tool and methods they use to promote their work, organize appointments and payments. Initially, the goal was to go to some tattoo shops and observe an artist during the day and see their habits. Even though I was unable to observe and interview professional tattoo artists, it allowed me to focus on the client-side of the app.
                                                </article>

                                                <img src="https://i.ibb.co/DfBD0w9/survey-overview.png" alt="survey-overview" border="0" />

                                                <span> More detail about the
                                                <a className="left" target="blank" href="https://drive.google.com/file/d/1cX6eLaoTXFv7hxXp3U853cmrGd-WuHqp/view?usp=sharing"> User survey and interviews overview</a>
                                                </span>
                                        </div>

                                          {/*  POINT OF VIEW */}

                                        <div className="layout-container-l66">
                                                <h2 className="project-titles">POV</h2>


                                                <article>
                                                        From the data provided from understanding the user, I built a couple of personas, William and Danielle.
                                                        To show how Ink Tank benedicts user’s day-to-day lives, I offered scenarios.
                                                </article>
                                                <div className="flex-init">
                                                        <img className="img-1" src="https://i.ibb.co/5vrs0yV/Danielle.png" alt="Danielle" border="0" />
                                                        <img className="img-1" src="https://i.ibb.co/XD8GypT/William.png" alt="William" border="0" />
                                                </div>
                                                                                                
                                                <article>From the data provided from understanding the user,
                                                        I built a couple of personas, William and Danielle.
                                                        I am making the scenarios to show how Ink Tank can benedict users day-to-day lives.
                                                        Now that there is a better understanding of the users,
                                                       I created a user flow that shows how a person navigates throughout the app.</article>
                                     
                                                     
                                                                 <img src="https://i.ibb.co/j51HQgt/userflow2.png" alt="userflow2" border="0"/>

                                                <span> More detail about the
                                                <a className="left" target="blank" href="https://drive.google.com/file/d/19qxU0cJqSae26r6FoW5kZHjDe9RS2WBt/view?usp=sharing"> user stories,</a>
                                                        <a className="left" target="blank" href="https://drive.google.com/file/d/1lkw71WvpuNFEuvDgIsTW20qh8mp7DmV2/view?usp=sharing"> user flow, </a> and
                                                <a className="left" target="blank" href=" After creating personas I built a sitemap and conducted card sorting. After evaluating the data, and update the sitemap. With the information form, we create user flows that would explain how they might use the app for their needs.">   user journey </a>
                                                </span>
                                        </div>


                                        {/*  IDEATE */}

                                        <div className="layout-container-l7">
                                                <h2 className="project-titles">Ideate</h2>

                                                 

                                                        I created the sitemap with the user flow. To update the sitemap from a user perspective, I decided to do card sorting to see what users think where content will be organized. It was interesting to see the diverse mindset when it comes to going to specific pages and content.

                                                        <img className="img-1" src="https://i.ibb.co/xXsr8yM/3-2-Refining-Your-Sitemap-with-Card-Sorting.png" alt="3-2-Refining-Your-Sitemap-with-Card-Sorting" border="0" />
                                                
                                                <img className="img-2" src="https://i.ibb.co/qdJV88j/updated-sitemap.png" alt="updated-sitemap" border="0" />
                                                <span> More detail about the
                                                <a className="left" target="blank" href="https://drive.google.com/file/d/1jXFPz13dHfTQEOaMYHPMIOelHlYcy-kR/view?usp=sharing"> refining sitemap with card sorting </a>

                                                </span>
                                        </div>

                                        {/*  PROTOTYPE  */}
                                        <div className="layout-container-l8">
                                                <h2 className="project-titles">Prototype </h2>
                                                <article>
                                                        After sketching a low-fidelity prototype, I tested it out with a couple of users to see if the flow was clear enough for them to get to the features. I analyze the feedback and update the sketch and flow from the majority of call-outs. Once I felt satisfied with what was on paper turned the design into a high-fidelity prototype and tested it again with some users.
                                                </article>

                                                           
                                                <img className="img-1" src="https://i.ibb.co/7nQMnYT/appt-consulation.png" alt="appt-consulation" border="0"/>
                                                <img className="img-1"  src="https://i.ibb.co/3kmmwXk/appt-session.png" alt="appt-session" border="0"/>
                                                <img className="img-1" src="https://i.ibb.co/fktrYRg/build-a-project.png" alt="build-a-project" border="0"/>

                                                <article>
                                                        Finally able to do the fun part, prototyping! When I was styling the high-fidelity prototype, I had a challenge picking the colors. I knew I wanted to go with an orange-red color to translate creativity. I was able to find a shade that is not only WGAG AA friendly but met my expectations.  I want to improve the vector images; they look simple and do not connect with the style of the app as much as I want.
                                                </article>
                                                <span> More detail about the
                                                <a className="left" target="blank" href="https://drive.google.com/file/d/1fPx6MqRTKEZrDA7NQkoh1xCtQjKzg1i1/view?usp=sharing"> Low to high fidelity prototyping </a>

                                                </span>
                                                

                                        {/*  TESTING  */}
                                                <h2 className="project-titles">Testing </h2>
                                                <article> With the testing for time purposes, I conduct a usability test and preference testing simultaneously.  </article>
                                                <article>For this usability test, I only use video chats on Zoom and Skype. The users had the choice to use their laptop or mobile device to play with the prototype. 
                                                         I have to consistently remind the users that the prototype was limited to the interaction for all the sessions. There was one button that did not work.
                                                          Some of the content was not clear about the page's objective, or it was oddly phrased. There were some technical issues, like a person's internet was slow and a page took longer to load, problems with the video recording,
                                                           or the video platform stopped working. I adjusted the script to make it sound less robotic and cleared up some of the tasks for task two. I made the user found an image they liked and booked a session with that artist. Some of the tester's comments were similar, but the experience was completely different. Some users could do the task faster than others; they did not notice a feature or provided me a lot of information.
                                                         It was great to hear people interested in getting a tattoo but have not had the experience of getting a tattoo and wanting more steps for the process.   </article>
                                                         <h3 className="margin-t">Usability test interviews	notes </h3>
                                                         <img src="https://i.ibb.co/s2gK7zc/usuability1.png" alt="usuability1" border="0"/>
                                                         <img src="https://i.ibb.co/xH8r571/usuability2.png" alt="usuability2" border="0"/>
                                                         <h3 className="margin-t">Sorting notes </h3>
                                                        <img src="https://i.ibb.co/k3FSxS0/4-6-Rainbow-Spread-Sheet-Usability-Testing-Ink-Tank-Usability-Test-Results.png" alt="4-6-Rainbow-Spread-Sheet-Usability-Testing-Ink-Tank-Usability-Test-Results" border="0" />

                                                        
                                                        

                                                      <article>
                                                      I wanted to see if the user can navigate building a project, finding an artist, and booking an appointment with the usability testing. For the preference test A/B Testing, I tested out the style of buttons.                  
                                                      </article>  
                                                      <img src="https://i.ibb.co/hRkSCvQ/usuability-4.png" alt="usuability-4" border="0"/>

                                                      <img src="https://i.ibb.co/0yJ0b8q/A-b.png" alt="A-b" border="0"/>
                                                      <article>From the data that I've collected from the testing, I've adjusted the errors on the prototype. Some of the changes were pretty easy to change because they were styling issues, but the one feature was a challenge clarifying scheduling a session. </article>
                                                
                                                <span> More detail about the
                                                       
                                                       <a className="left" target="blank" href=" https://drive.google.com/file/d/14Ih_uBy1uPGBbRh33WXUCCcYCF2BP7Ti/view?usp=sharing"> usuability testing plan, </a>
                                                       <a className="left" target="blank" href="https://drive.google.com/file/d/16PYClVcdq3x66mN0wWmXqd1coOJTw6g4/view?usp=sharing">  rainbow sheet,</a>
                                                        <a className="left" target="blank" href="https://drive.google.com/file/d/1b5AqmURIUCFjRVs9XKNoXiHFSgnsdSpw/view?usp=sharing">  A/B and preference testing, </a>and
                                                <a className="left" target="blank" href="https://drive.google.com/file/d/1c-ek21FTbgVxhYfh_xqa1M2IEZhX2Cjg/view?usp=sharing">  the updates of the prototype </a>

                                                </span>

                                        </div>
                                        <div className="layout-container-l9">


                                                <h2 className="project-titles">Style Guide </h2>
                                                <h3 className="sub-title-1">Typoagraphy</h3>
                                                <img src="https://i.ibb.co/c2B0hDf/Screen-Shot-2021-05-30-at-3-21-52-PM-2.png" alt="Screen-Shot-2021-05-30-at-3-21-52-PM-2" border="0" />
                                                <h3 className="sub-title-1">Color palette</h3>
                                                <img src="https://i.ibb.co/hZC86Mn/Screen-Shot-2021-05-30-at-2-48-16-PM-2.png" alt="Screen-Shot-2021-05-30-at-2-48-16-PM-2" border="0" />
                                                <h3 className="sub-title-1">Icons</h3>
                                               <img src="https://i.ibb.co/dWb5D4Y/Screen-Shot-2021-05-30-at-2-48-31-PM-2.png" alt="Screen-Shot-2021-05-30-at-2-48-31-PM-2" border="0" />

                                                <h3 className="sub-title-1">UI Elements</h3>
                                                <img src="https://i.ibb.co/Qmm24VQ/Screen-Shot-2021-05-30-at-2-48-45-PM-2.png" alt="Screen-Shot-2021-05-30-at-2-48-45-PM-2" border="0" />
                                                <span> More detail about the
                                                       

                                                <a className="left" target="blank" href="https://drive.google.com/file/d/15J0x26qCDo1ekG5wI7-GNRaSyhDDkUbQ/view?usp=sharing"> Design language system </a>

                                                </span>
                                        </div>

                                        {/*  conclusion */}
                                        <div className="layout-container-l10">
                                                <h2 className="project-titles">Outcome </h2>
                                                <article>
                                                        As a designer, I wanted to figure out the best way for different components to function and support the app's various features.
                                                        I wanted to make sure that the elements had a flow that the users can recognize and
                                                        navigate as much as possible with no assistance or confusion—building a layout that focuses on showing photos
                                                        and building a project or doing a project in the same area.
                                                </article>

                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/pxxusK75ras?controls=0?version=3&controls=0&&showinfo=0&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                <img src="https://i.ibb.co/wWGbvGv/Artboard-1.png" alt="Artboard-1" border="0" />
                                                <img src="https://i.ibb.co/PWnFBTN/mockup.png" alt="mockup" border="0"/>
                                                <img src="https://i.ibb.co/ZhDBL9S/Artboard-3.png" alt="Artboard-3" border="0" />


                                        </div>
                                </div>


                        </React.Fragment>
                );
        }
}