
import './style.css';
import Tags from '../tags';
import Rating from '../rating';


function FicheInfo({ title, location, tags, hostName, hostPicture, rating }) {

    const splitName = hostName.split(' ');
    const firstName = splitName[0];
    const lastName = splitName[splitName.length - 1];

    return (
        <div className="fiche-info">

            <div className="fiche-info-left">
                <h1>{title} </h1>
                <span className='location'>{location}</span>
                <Tags
                tags={tags}
                />
            </div>
            <div className="fiche-info-right">
                <div className="fiche-info-right-top">
                <div className="hostname">

                <span className='hostname'>{firstName}</span>
                <span className='hostname'>{lastName}</span>
                </div>
                <img src={hostPicture} alt={hostName} />
                </div>
                <Rating
                full= {rating}
                empty={5-rating}
                />
            </div>
        </div>


    )
}

export default FicheInfo