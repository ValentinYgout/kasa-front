
import React, { useEffect, useState } from 'react';



import "./home.css";
import Banner from '../../components/banner';
import Thumb from '../../components/thumb';


const Home = () => {
  const [fiches, setFiches] = useState(null);
  useEffect(() => {
    (async () => {
    
        const response = await fetch("data.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setFiches(data);
    
      
    })();
  }, []);

  return (
    <div className='home-container'>
      <Banner
      BackgroundPicture="homebanner.png"
      />
      
      {fiches && (
        <ul>
          {fiches.map(({id,title,cover},index) => (
      
            
            <Thumb
              key={index}
              id={id}
              title={title}
              cover={cover}
            />
        
         
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;