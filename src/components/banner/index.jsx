
import "./style.css";



const Banner = ({BackgroundPicture,height}) => {



  return (
 
    <div className="banner">
<img   style={{ height: height}} src={BackgroundPicture} alt="" />
    </div>



    
  );
};

export default Banner;