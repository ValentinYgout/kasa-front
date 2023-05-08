
import React, { useEffect, useState } from 'react';
import { useParams,useNavigate  } from 'react-router-dom';



import "./fiche.css";
import FicheInfo from '../../components/ficheInfo';
import Dropdown from '../../components/dropdown';
import Carousel from '../../components/carousel';



const Fiche = () => {
    const { id } = useParams()
  const [fiche, setFiche] = useState(null);
  const navigate  = useNavigate(); 
  useEffect(() => {
    (async () => {
    
        const response = await fetch("data.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
      
        const FicheData = data.find(item => item.id === id);

        if (!FicheData) {
          navigate('/error');
        } else {
          setFiche(FicheData);
        }
       
    
      
    })();
  }, []);

  return (
    <div className='fiche-container'>
        {fiche && (
  <>
  <Carousel
  pictures={fiche.pictures}
  />
        <FicheInfo
        title={fiche.title}
        location= {fiche.location}
        tags= {fiche.tags}
        hostName= {fiche.host.name}
        hostPicture= {fiche.host.picture}
        rating= {fiche.rating}
        />
        <div className="dropdowns">
        <Dropdown
         content= {fiche.description}
         label="Description"
        />
         <Dropdown
         content= {fiche.equipments}
         label="Equipments"
        />

            
        </div>
  </>
     
    ) }

   
        
    
    </div>
  );
};

export default Fiche;