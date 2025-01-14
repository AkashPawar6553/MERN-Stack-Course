import theGrassland from '../images/theGrassland.png';
import ParadiseFound from '../images/ParadiseFound.png';
import smokeonthewater from '../images/smokeonthewater.png';
import lineoftress2 from '../images/lineoftress2.png';
import cursor from '../images/cursor.png';

const MainPage = () =>{
return (
    <div className="Container First-Main-Container">
            <div className="row  ">
                <div className="row-image-text">
                    <div className="col-md-4 ">
                        <img src={theGrassland} className="FirstPages-img" />
                    </div>
                    <div className="col-md-8">
                        <h1 className="Hedding">The Grasslands</h1>
                        <span className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing.
                            Nam quis justo in augue auctor imperdiet.</span>
                    </div>
                </div>
            </div>
            <div className="row row-pointer-edit">
                <div className="row-image-text">
                    <div className="col-md-4  ">
                        <img src={ParadiseFound} className="FirstPages-img" />
                    </div>
                    <div className="col-md-8 ">
                        <h1 className="Main-Hedding">Paradise Found
                        </h1>
                        <span className="fort-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing.
                            Nam quis justo in augue auctor
                            <img src={cursor} className="pointer-cursor" />
                        </span>
                    </div>
                </div>
            </div>
            <div className="row ">
                <div className="row-image-text">
                    <div className="col-md-4 ">
                        <img src={smokeonthewater}/>
                    </div>
                    <div className="col-md-8">
                        <h1 className="Main-Hedding">Smoke On The Water</h1>
                        <span className="fort-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing.
                            Nam quis justo in augue auctor imperdiet.</span>
                    </div>
                </div>
            </div>
            <div className="row ">
                <div className="row-image-text">
                    <div className="col-md-4 ">
                        <img src={lineoftress2} className="FirstPages-img" />
                    </div>
                    <div className="col-md-8">
                        <h1 className="Main-Hedding">Line of Trees</h1>
                        <span className="fort-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing.
                            Nam quis justo in augue auctor imperdiet.</span>
                    </div>
                </div>
            </div>
 
        </div>
)
}
