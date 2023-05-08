
import "./about.css";
import Banner from "../../components/banner";
import Dropdown from "../../components/dropdown";


const About = () => {
 const labels = ["Fiabilité","Respect","Service","Sécurité"]

  return (

   <div className="about-container">
  <Banner
      BackgroundPicture="aboutbanner.png"
       height="250px"
      />
      <div className="about-dropdowns">

        {
          labels.map((label,index)=>(
            <Dropdown
            content=  "Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            label={label}
            key={index}
           />
          ))
    
        }

   
    
      </div>
   </div>
  );
};

export default About;