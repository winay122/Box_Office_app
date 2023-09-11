// import { Link } from "react-router-dom";
const ShowCard = ({ name, image, id, summary, onStarMeClick }) => {

    const summaryStripped =summary ? 
    summary.split(" ").slice(0,10).join(' ').replace(/<.+?>/g, '') 
    : 'No description';

    return (
        <div>
            <img src={image} alt='name' />

            <h1> {name} </h1>

            <div>
                <p>{summaryStripped}</p>
            </div>
            <div>
                {/* <Link to={`/show/${id}`}>Read more...</Link> */}
                <a href={`/show/${id}`} target="blank" >Read maore...</a>
                <button type='button' onClick={() => onStarMeClick(id)}>Star me</button>
            </div>
        </div>
    )
}

export default ShowCard;