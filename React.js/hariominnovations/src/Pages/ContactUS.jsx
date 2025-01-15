import MainNavBar from "../Components/MainNavBar"
import footer from "./../image/footer.png"
import Location from "./../image/Location.png"
import Message from "./../image/Message.png"
import Call from "./../image/Call.png"
import hero from "./../image/hero.png"
import dash from "./../image/dash.png"
import callus from "./../image/callus.png"
import email from "./../image/email.png"
import location2 from "./../image/location2.png"
import footerFacebook from "./../image/footerFacebook.png"
import footerTwiter from "./../image/footerTwiter.png"
import footerInstagram from "./../image/footerInstagram.png"
import contactUsLinkedin from "./../image/contactUsLinkedin.png"
import contactUsInstagram from "./../image/contactUsInstagram.png"
import contactUsFacebook from "./../image/contactUsFacebook.png"
import contactUsTwiter from "./../image/contactUsTwiter.png"

const ContactUs = () => {
    return (
        <div>
            <div className="container">
                <MainNavBar />
            </div>
            <div className="hero-img-div">
                <img src={hero} className="hero-img" />
                <div className="hero-im-text-div">
                    <h1 className="text-white"><b>Contact Us</b></h1>

                </div>
            </div>

           <div className="container py-5">
            <div className="row text-center  py-5">
                <div className="col-md-12">
                <img src={dash}/>      <span className="sub-title">Get In Touch </span>
                    <h3 className="title-second">
                    Hey! Let’s Talk
                    </h3>

                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                <input type="text" placeholder="Name" className="Contact-from-input"/>
                <br/>
                <input type="email" placeholder="Email" className="Contact-from-input"/>
                <br/>
                <input type="mobileno" placeholder="MobileNo" className="Contact-from-input"/>
                <br/> 
                <textarea type="Your Message" placeholder="Your Message" className="Contact-from-input" ></textarea>
                </div>
                <div className="col-md-4">
                    <div className="row my-3">
                        <div className="col-md-4">
                            <img src={callus}/>
                        </div>
                        <div className="col-md-8">
                        <p>Call Anytime</p>
                        <span>+ 91 23678 27867
                        + 91 67678 92878</span>
                        </div>
                        <div className="col-md-4">
                        <img src={email}/>
                        </div>
                        <div className="col-md-8">
                        <p>Send Email</p>
                        <span>connect@itfirms.com
                        hello@itfirms.com</span>
                        </div>
                        <div className="col-md-4">
                        <img src={location2}/>
                        </div>
                        <div className="col-md-8">
                        <p>Visit Us</p>
                        <span>20 Island Park Road, 
                        New Jearsy, New York, USA</span>
                        </div>
                        </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div>
                            <h3 className="contactUs-last-hedding">Follow Us</h3>
                            </div>
                            <br/>   
                            <div>
                                <img src={contactUsLinkedin} />
                                <img src={contactUsInstagram} />
                                <img src={contactUsFacebook} />
                                <img src={contactUsTwiter} />
                            </div>
                            
                            
                        </div>

                    </div>
                    
                </div>

            </div>
            </div>            



            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179.05846601931!2d74.22187720000001!3d17.3194702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc17f03509738b1%3A0x576f02648d3bb018!2sHari%20Om%20Innovations!5e1!3m2!1sen!2sin!4v1736698302057!5m2!1sen!2sin"
                style={{
                    border: 0,
                    width: "100%",
                    height: "500px"
                }}
                allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
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
                            <img src={footerFacebook} className="Social-icon-footer"/>
                            <img src={footerTwiter} className="Social-icon-footer"/>
                            <img src={footerInstagram} className="Social-icon-footer"/>
                        

                            </div>

                        </div>
                    </div>
                </div>

            </footer>
        </div>
    )
}
export default ContactUs; 