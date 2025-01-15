import MainNavBar from "../Components/MainNavBar"
import about from "./../image/about.png"
import employeeimg from "./../image/employeeimg.png"
import employeeimg2 from "./../image/employeeimg2.png"
import dash from "./../image/dash.png"
import endline from "./../image/endline.png"
const AboutUs = () => {
    return (
        <div>
            <div>
                <MainNavBar />
            </div>

            <div className="about-img-2">
                <img src={about} className="about-img" />
                <div className="about-img-text">
                    <h1 className="text-white"><b>AboutUs</b></h1>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={employeeimg} />
                        <img src={employeeimg2} />
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
                        <img src={endline} className="color-white"/>
                </div>

                </div>


            </div>
        </div>




    )
}
export default AboutUs;