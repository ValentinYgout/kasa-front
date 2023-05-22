
import "./about.css";
import Banner from "../../components/banner";
import Dropdown from "../../components/dropdown";


const About = () => {
  const dropdownContent = [
    {
      label: "Fiabilité",
      text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    },
    {
      label: "Respect",
      text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
      label: "Service",
      text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    },
    {
      label: "Sécurité",
      text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
  ];

  return (

    <div className="about-container">
      <Banner
        BackgroundPicture="aboutbanner.png"
      />
      <div className="about-dropdowns">
        {dropdownContent.map(({ label, text }, index) => (
          <Dropdown content={text} label={label} key={index} />
        ))}


      </div>
    </div>
  );
};

export default About;