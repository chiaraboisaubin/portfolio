
import React, { Component } from 'react';
import { Link, link } from 'react-router-dom';
export default class ContaierOne extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="layout-content-grid-1">

          <div className="layout-container-l">
            <h2 className="project-titles"> Context</h2>
            <div className="flex-init">
            <article> The redesign for Care/of was a project that was a part of my UX certification.  The project brief asked for a mobile user interface that is simple and engaging. With this in mind, I designed a playful and minimal interface that provides informative details of their products to users as they accomplish their goals.</article>
          </div>
          </div>

          <div className="layout-container-l2">
            <div className="layout-container-l22">
              <h2 className="project-titles"> Role </h2>
              <p> UI Designer </p>
            </div>

            <div className="layout-container-l22">
              <h2 className="project-titles"> Time Period </h2>
              <p> April 2021 - May 2021</p>
            </div>
          </div>

          <div className="layout-container-r2">
            <h2 className="project-titles"> Skills & Tools </h2>
            <ul className="skill-list-project">
              <li className="skills-style-proj">Wireframing</li>
              <li className="skills-style-proj">Prototyping</li>
              <li className="skills-style-proj">Mockup</li>
              <li className="skills-style-proj">Style Guide</li>
              <li className="skills-style-proj">Photoshop</li>
              <li className="skills-style-proj">Abobe XD</li>
              <li className="skills-style-proj">Figma</li>
            </ul>
          </div>

          <div className="layout-container-l3">
            <h2 className="project-titles"> User Flow </h2>

            <img className="img-1" src="https://i.ibb.co/dQxD8CG/Artboard-1.png" alt="Artboard-1" border="0" />


            <h2 className="project-titles"> Wireframe sketches </h2>
            <img className="img-1" src="https://i.ibb.co/KFcJPkD/Artboard-3.png" alt="Artboard-3" border="0" />

          </div>
          <div className="layout-container-l4">

          <h2 className="project-titles"> Mid-fieldty prototype </h2>

            <img src="https://i.ibb.co/qkqLFNb/Artboard-31.png" alt="Artboard-31" border="0" />
            <img className="img-1" src="https://i.ibb.co/rZTmqxy/Artboard-41.png" alt="Artboard-41" border="0" />
          </div>

          <div className="layout-container-l5">
          <h2 className="project-titles">  Responsive Layouts & Grids </h2>
          <div className="flex-init">
          <article>I went with a six grid on mobile to make the content fit and be flexible on devices that are not apple. I did face with adjusting  the column width on Adobe XD so I decided to convert to Figma since their prototyping has more features that assisted with the project.</article>
        
            <img  src="https://i.ibb.co/L8MxXjV/mockup-2.png" alt="mockup-2" border="0" />
            </div>
            <img src="https://i.ibb.co/jvVGpNZ/1-2-layout-and-grid-most-pages.png" alt="1-2-layout-and-grid-most-pages" border="0"/>

        
          </div>

          <div className="layout-container-l6">
            <h2 className="project-titles"> Style Guide </h2>

            <h3>Typoagraphy</h3>
            
            <article>To keep the friendly feel with the text, I went with Rubik for the header and for the content is Varela Round.</article>
            <img src="https://i.ibb.co/kxxRfpJ/typography.png" alt="typography" border="0"/>
          

            <h3> Icons </h3>
            <img src="https://i.ibb.co/cQ8v2cK/icons.png" alt="icons" border="0"/>
           
            <h3> UI Elements </h3>
            <img src="https://i.ibb.co/Y7FqxsP/ui-element.png" alt="ui-element" border="0"/>

            <h3> Color Palette </h3>
           <article> I wanted to go with colors that were a mixer of simple and neutral colors with a hint of golds for the colors. The paintings should have random patterns and sometimes transparent with one another. Going with the chosen colors was not to focus ontake away focus from the vitamins, and they are not too bright.</article> 
           <img src="https://i.ibb.co/0Q6D9Z7/Artboard-4-2-8.png" alt="Artboard-4-2-8" border="0"/>

            <h3> Photos </h3>
            <img src="https://i.ibb.co/CvDk6yP/Artboard-4-8.png" alt="Artboard-4-8" border="0"/>

            <h3> Logos </h3>
            <article>The logo I wanted to keep the typography similar to the original, however, the color was a couple of shades darker, and the ends are curvier. The color and typography will make the logo appeal to friendly and professional.</article>
            <img src="https://i.ibb.co/TgkXjx2/Screen-Shot-2021-05-30-at-11-55-54-PM-2.png" alt="Screen-Shot-2021-05-30-at-11-55-54-PM-2" border="0" />
            
            <span> More detail about the
               <a className="left" target="blank" href="https://www.figma.com/file/xogLvAeKCrg5qn6jwQL2Jd/Redesign-Care-of?node-id=93%3A21"> Style Guide</a>
             </span>

          </div>
          <div className="layout-container-l7">
          <h2 className="project-titles"> Interactive prototype </h2>
          <iframe src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FxogLvAeKCrg5qn6jwQL2Jd%3Fpage-id%3D0%253A1%26node-id%3D1%253A26%26viewport%3D571%252C286%252C0.12690593302249908%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A26" allowfullscreen></iframe>
            <h2 className="project-titles"> Mockups  </h2>
            <img src="https://i.ibb.co/xmPmVz2/Macbook.png" alt="Macbook" border="0"/>
            <img src="https://i.ibb.co/GQmrRM9/ipad-view.png" alt="ipad-view" border="0"/>
            <img src="https://i.ibb.co/F4tMrbz/Mockup-2.png" alt="Mockup-2" border="0"/>

        </div>
        </div>
      </React.Fragment>
    );
  }
}