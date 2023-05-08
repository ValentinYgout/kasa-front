
import "./style.css";
import { Link } from "react-router-dom";



const Thumb = ({ id, title, cover }) => {


  return (

    <Link to={`/${id}`}>

      <li key={id} className="thumbnails">


        <img src={cover} alt={title} />
        <div className="image-title">
          <span>{title}</span>
        </div>


      </li>

    </Link>







  );
};

export default Thumb;