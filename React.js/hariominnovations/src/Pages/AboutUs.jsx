import about from "./../image/about.png"
import employeeimg from "./../image/employeeimg.png"
import dash from "./../image/dash.png"
import endline from "./../image/endline.png"
import mission from "./../image/mission.png"
const AboutUs = () => {
    return (
        <div>
            <div className="about-img-2">
                <img src={about} className="about-img" />
                <div className="about-img-text">
                    <h1 className="text-white"><b>AboutUs</b></h1>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="Main-About-Container">
                        <div className="col-md-5">
                            <img src={employeeimg} className="employeeimg" />
                        </div>
                        <div className="col-md-6">
                            <img src={dash} />      <span className="sub-title">About company</span>
                            <h1>Websites  that tell your
                                brand’s story</h1>
                            <p>We create websites that beautifully tell your brand’s story, blending captivating design with compelling narratives. Every element, from visuals to content, is thoughtfully crafted to reflect your identity.</p>
                            <p>
                                We create websites that beautifully tell your brand’s story, blending captivating design with compelling narratives. Every element, from visuals to content, is thoughtfully crafted to reflect your identity.
                            </p>
                            <p>
                                We create websites that beautifully tell your brand’s story, blending captivating design with compelling narratives. Every element, from visuals to content, is thoughtfully crafted to reflect your identity.
                            </p>
                            <img src={endline} className="color-white" />


                        </div>
                    
                </div>
                </div>
                <div>
                    <div className="container">
                    <div className="row py-5">
                        <div className="our mission">
                            <div className="col-md-4">
                                <div>
                                    <div className="mission-img"><img src={mission}/> </div>

                                    <div className="Sub-title"><span className="Sub-title">Our Mission</span>
                                    <h3>
                                    At Hariom, we will act as client's trusted advisor specializing in areas of technology and digital services to help achieve their business success.
                                    </h3>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-4">

                            </div>
                            <div className="col-md-4">

                            </div>
                        </div>

                    </div>
                    </div>
                </div>


            </div>
        </div>




    )
}
export default AboutUs;