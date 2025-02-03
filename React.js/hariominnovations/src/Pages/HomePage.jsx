import React from 'react'
import MainNavBar from '../Components/MainNavBar'
import footer from "./../image/footer.png"
import footerFacebook from "./../image/footerFacebook.png"
import footerTwiter from "./../image/footerTwiter.png"
import footerInstagram from "./../image/footerInstagram.png"
import Message from "./../image/Message.png"
import Call from "./../image/Call.png"


const HomePage = () => {
  return (
    <div>
      <div className="container">
        <MainNavBar />
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <footer>
        <div className="container">
          <div className="row py-5">
            <div className="col-md-4">
              <img src={footer} />
              <p className="my-3">Innovation is the driving force behind progress, transforming ideas into impactful solutions that address modern challenges. Innovation is the driving force behind progress, transforming ideas into impactful solutions that address.</p>
              <ul>
                <li> <img src={Location} className="footor-icon" />1234 Elm Street, Springfield, IL 62704,
                  New York</li>
                <li> <img src={Message} className="footor-icon" />supporthariom@gmail.com</li>
                <li><img src={Call} className="footor-icon" />(212) 555-7890</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Company</h5>
              <ul>
                <li>About us
                </li>
                <li>Careers
                </li>
                <li>Case Studies
                </li>
                <li>Testimonials
                </li>
              </ul>

              <h5>Industry
              </h5>
              <ul>
                <li>Education & Learning
                </li>
                <li>Food & Hospitality
                </li>
                <li>Health & Fitness
                </li>
                <li>Finance & Marketing
                </li>
                <li>Real Estate
                </li>
                <li>Retail & Ecommerce
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Services</h5>
              <ul>
                <li>Al Enabled Application
                </li>
                <li>ERP Consulting and
                </li>
                <li>Development
                </li>
                <li> Frontend Development
                </li>
                <li> Web Development
                </li>
                <li> Microsoft Technologies
                </li>
                <li> Mobile Development
                </li>
                <li>Data Visualizaton
                </li>
                <li>Devops Development
                </li>
                <li>Enterprise Portals
                </li>
                <li>Dedicated Development Team
                </li>
                <li>UI/UX Design
                </li>
                <li> Database Consulting
                </li>
                <li> Open Source CMS & E-
                </li>
                <li> QA and Testing
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5>Technology</h5>
              <ul>
                <li>HTML5
                </li>
                <li> CSS3
                </li>
                <li> JavaScript
                </li>
                <li> Jquery
                </li>
                <li> Bootstrap
                </li>
                <li> ReactJS
                </li>
                <li> Angular
                </li>
                <li> Azure AI
                </li>
                <li> Open AI
                </li>
                <li> Gemini
                </li>
                <li> ASP NET Core
                </li>
                <li> ASP.NET.MVC
                </li>
                <li> PHP
                </li>
                <li> NodeJS
                </li>
                <li> Python
                </li>
              </ul>
            </div>
            <hr />
            <div className="pd-3 copy-right-div">
              <span>Copyright: © 2024 By Hariom Innovations</span>

              <div>
                <img src={footerFacebook} className="Social-icon-footer" />
                <img src={footerTwiter} className="Social-icon-footer" />
                <img src={footerInstagram} className="Social-icon-footer" />


              </div>

            </div>
          </div>
        </div>

      </footer>


    </div>


  )
}

export default HomePage