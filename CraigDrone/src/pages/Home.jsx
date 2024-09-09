import video from '../assets/videos/Test1.mp4';
import bnwWaves from '../assets/black_white_waves.svg';
import colorWaves from '../assets/colorWaves.svg';
import DroneAnimation from '../components/DroneAnimation';
import Carousel from 'react-multi-carousel';
import FlowChart from '../assets/FlowChart.svg';

import HomeCarousel from '../components/HomeCarousel';


import './Home.css';


const Home = () => {
    return (
        <>

            <div className="videoContainer">
                <video id='videoPlayer' autoPlay loop muted >
                    <source src={video} type="video/mp4" />
                </video>
                <div className="overlayText">
                    <p id="topText">Premium Full Spectrum Aerial Photography and Videography Solutions </p>
                    <p id="topSubText">For your personal or business needs in WA.</p>
                    <button className='CustomButton' onClick={() => alert("You clicked the button")}>Contact Us!</button>
                </div>
            </div>
            <img className="wavesSVG" src={colorWaves} />
            <div className="aboutSection">
                <h2>
                    Specializing in drone services, video production, and aerial photography across Seattle and the Pacific Northwest, we deliver high-quality visuals using the latest technology.

                </h2>
                <p>
                    Our drone services address a wide range of business needs efficiently and cost-effectively, from real estate to industrial applications.
                </p>
                <p>

                    We have extensive experience with aerial cinematography and aerial photography Seattle and the Puget Sound region. The quality of our drone services work speaks for itself,
                    both in the field and the editing room- take a look at our Portfolio page for examples.
                </p>
                <p>
                    Get in touch with us today to explore our range of aerial packages!
                </p>
            </div>

            <HomeCarousel/>
            
            <div className='flowchartContainer'>
                <img className="flowchartImage" src={FlowChart} />  
            </div>

            <button className='CustomButton' style={{marginTop:"50px"}} onClick={() => alert("You clicked the button")}>Book Now!</button>

            <div className='OneStopContainer'>
            <h1 style={{paddingTop:'50px'}}>Your One-Stop-Shop for Drone Services anywhere in Seattle!</h1>
                <p>When searching for “high-quality drone video services near me” you want to ensure you select the experts. "CraigDrones"  provides premium aerial photography, videography, 
                    and industrial drone services at an affordable price. 
                </p> 

                <p>
                    We also specialize in the production of that video into vibrant media assets, sure to engage your audience. 
                    We have experience in Fife, Puyallup, Downtown Seattle, Capitol Hill, Wallingford & Greenlake, North Queen Anne, West Seattle, Beacon Hill, and the surrounding areas. 
                </p> 
                <p> 
                    From drones to so much more, "CraigDrones" is your one-stop-shop for capturing the best imagery of your business, property, or event from air, land, and sea. 
                    Elevate your work with our drone photography and videography services. Give us a call to get an instant quote and timeline.
                </p> 

            </div>

            <footer>
                <h3>
                    Drone Company
                </h3>
                <h4>
                    Contact us now!
                </h4>
                <h4>
                    Email here
                </h4>
                <h4>
                    Phone number here
                </h4>
                <h4>
                    maybe: social media
                </h4>
            </footer>
            
        </>
    )
};

export default Home