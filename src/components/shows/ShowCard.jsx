import { Link } from "react-router-dom";
const ShowCard = ({ name, image, id, summary, }) => {

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
                <Link to='/'>Read more...</Link>
                <button type='button'>Star me</button>
            </div>
        </div>
    )
}

export default ShowCard;